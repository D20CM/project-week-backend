import * as admin from "firebase-admin";

admin.initializeApp({
   credential: admin.credential.cert("path-to-your-JSON-file"),
   databaseURL: "https://test-project.firebaseio.com",
});
