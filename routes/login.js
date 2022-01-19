// import admin from "firebase-admin";
// import { Router } from "express";

// const router = Router();
// admin.initializeApp({
//    credential: admin.credential.cert({
//       privateKey: process.env.FB_PRIVATE_KEY,
//       clientEmail: process.env.FB_CLIENT_EMAIL,
//       projectId: process.env.FB_PROJECT_ID,
//    }),
// });

// router.post("/", async (req, res) => {
//    const userObject = await admin.auth().verifyIdToken(req.body.uid);

//    res.json({
//       success: userObject,
//    });
// });

// export default router;
