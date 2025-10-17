// firebaseAdmin.ts
import admin from "firebase-admin";

const serviceAccount = {
  projectId: "messe-flappy-bir",
  clientEmail:
    "firebase-adminsdk-fbsvc@messe-flappy-bir.iam.gserviceaccount.com",
  privateKey:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDZeD2BDWfrm38x\nbhPVYFGDzlRuTF3afL1jkanndtn7KFl1hZHRfcAgXI0/Q7pt98nRerTbx7xx2OYm\ny8WPpGaCUnsDkbx4zfIUO4Pex7CzfzhCr/mh+KpiNzwRy49II6VXQeHkAVUUQeCS\n9emIavl5RvLLS7kwHm1I0CzgeISitVL53LbY1Gae0G/XNrlX1iJ4h4Eqe+ecmsh8\nBrc1GV+m/EYXBkFeuQRIafOw+NSazBU752li6SkiTkXzO1evvH/5IAwZuZA730N9\nQxyDNEs/UYZilOiY9Grg49e9dmMFUrTIrmAKe40aVwxvDc//IXXcQQvcLAT1vXy8\nkZrljXY7AgMBAAECggEAG5/niC4wxkARbzEBefhrQmgCV6SBw5BW6oAFai6xz/K3\nMnOOK2Ni9XlsQ94Rn4h7bY29zbFYocmgqsr1xKJolyNtFu37WAkpOCK7RKBvNM3z\nUp1SA5433pQPoF8QS2SjyyrGTBVTPmiD44czbC3SlPJLQ0HSO2eSEE7JdJY6mwRb\nlSAXjsIseJoMIZPVw8T0DqGzWhhkGem8KbJoT/WE9Rj351KJrXnYWvWnfS8i/kK4\ntujHMtsy5Ej7HJY0BJIMdQUyn0rglGrjZVThA9CYAXREguQBmc8pJ25Fwyp7J3t4\n48uBhc2nHfNzJ3c9VajUl6QVLqbJ5xoEYLKbgz1ASQKBgQDzpmD2EsIEYUEE8J4R\nDWB0CvubJjLASV7jud0RTvjVK58uX9tZD0uSCaJnBcWbmateSrp6k8JFijD66d5N\nbbHDMN+POKHe0TIJLzz89Gl/lHYKZRDJV923rZ6U6esS94AQAcm0Wh/3Jwy+Ndr5\n8SfDtkm+7z/mSSZPYZiGW7RklwKBgQDkfiULr+il3kdI1ykVSJ+RuC+dsn8lWQUn\nqKccXsxZE8RC6U76ZCsPgrUlkQMPwWPn4L1N5tk4a676XCKAt4H87RoXU0E14cKL\nNAf1KXMhdeVq+vKn6pA6ZKSk2KQuIxVE40t17VTC8200VXonPVtx3V+cyxjv95gV\nv1/nfkr7/QKBgF1rZbHz70AOqgdi2rhfEKRtsZsDQmJHv4JBOWnxhab2WspFJq03\nGBqeZw5pQCMxAGve6zEkhlBzc+RA12OIs6fLjWw0opv0SeMLoa67Z9fq7Hd/2Lfa\nYMCUaUFfjypui0OX6+aix67T4ibsL1G2DTEVK6FxymZZlb7KBNk/QCNxAoGAJRJW\nXlwPCgJTXH0UPFDJGvJgP1y7hkq4LGQPoOm8i+NKH3UNDFD+L4kMbOjnL0I4PGHZ\nNO90ZNQL0rDqJCoh2/B4IDqwxNY5Iy6w79TmyhH/w+itQBMtjVvQ3rILiTTF+aRL\nFPoJm4u1Nx17MSyiTooVPjIxfJWWRkkDfWKfNd0CgYEA7F5KHgS0hwCxJIAzI22d\nja94wXC7CswBKwY0wymoPBiwjPDKLMP/Cc69LgdtU9SMHaJJOm6aZMjadv4ivtDw\nI9ZE0fqw7P2S8NhiprfNl506Zi5ejmuJf8zfSVn0Go97oWqlkpBPYvHzeSb1aIdT\nQ9dkFWwqYviz7rGISapy01I=\n-----END PRIVATE KEY-----\n",
};

// Initialize Admin SDK only once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      "https://messe-flappy-bir-default-rtdb.europe-west1.firebasedatabase.app/",
  });
}

// Export Realtime Database instance
export const db = admin.database();
