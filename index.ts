import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import { db } from "./firebase.js";

const app = express();
const port = 3000;

// ----------------- CORS -----------------
const corsOptions = {
  origin: "https://christmas-advent-game.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// ----------------- Godot Headers -----------------
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

// ----------------- Paths -----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = process.env.NODE_ENV !== "production";
const rootDir = isDev ? path.join(__dirname, "..") : __dirname;

// ----------------- Static files -----------------
app.use(express.static(path.join(__dirname, "html-game-export")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "html-game-export", "FlappyBirdGame.html"));
});

// ----------------- JSON parser -----------------
app.use(express.json());

// ----------------- Create User -----------------
app.post("/api/users", async (req: Request, res: Response) => {
  try {
    const { username, company, email, points } = req.body;

    if (!username || !company || !email)
      return res
        .status(400)
        .json({ error: "Missing username, company, or email" });

    const id = uuidv4();
    const user = {
      id,
      username,
      company,
      email,
      points: points || 0,
    };

    await db.ref(`users/${id}`).set(user);

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// ----------------- Get All Users -----------------
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const snapshot = await db.ref("users").get();

    if (!snapshot.exists()) return res.json([]);

    const usersData = snapshot.val();
    const usersArray = Object.values(usersData).map((user: any) => ({
      id: user.id,
      company: user.company,
      username: user.username,
      points: user.points,
    }));

    res.json(usersArray);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get users" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  console.log("name", __dirname);
});
