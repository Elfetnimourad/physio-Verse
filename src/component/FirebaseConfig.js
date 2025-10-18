// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc,
  getDoc,
  serverTimestamp,
  orderBy,
  query,
  setDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgpNtrNSfGrmIGZNPDh3k4VFrtHx4iYcY",
  authDomain: "physio-verse.firebaseapp.com",
  projectId: "physio-verse",
  storageBucket: "physio-verse.firebasestorage.app",
  messagingSenderId: "67764244985",
  appId: "1:67764244985:web:a9f36aa13879b521516d28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signUpWithEmailAndPassword = (username, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      user.displayName = username;
      console.log("username from sign up", user.displayName);
      // ...
      console.log("Signed up");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
export default function signInWithEmailAndPasswordFunction(
  username,
  email,
  password
) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // User Details
      user.displayName = username;
      console.log("username", user.displayName);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
export const addingChats = async (question, answer) => {
  try {
    const docRef = await addDoc(collection(db, "chats"), {
      question: question,
      answer: answer,
    });

    console.log("Document written with ID: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getData = (callback) => {
  const collectionRef = collection(db, "chats");
  const q = query(collectionRef, orderBy("createdAt", "desc"));
  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(docs); // ✅ replace the data instead of pushing
  });

  return unsubscribe; // ✅ allow cleanup in React
};
export const getSpecificDoc = (docId, docArr) => {
  const docRef = doc(db, "chats", docId);

  // Start listening in real time
  onSnapshot(docRef, (snapshot) => {
    // clear or update array depending on your logic
    docArr.length = 0; // optional: clear previous data
    docArr.push(snapshot.data());

    console.log("docArr:", docArr);
  });

  // You can return the unsubscribe if you need to stop listening later
};

export const addDocumentWithId = async (documentId, data) => {
  try {
    const docRef = doc(db, "chats", documentId);
    await updateDoc(docRef, data);
    console.log("Document successfully written with ID:", data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export function signOutFunction() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("User signed out.");
    })
    .catch((error) => {
      // An error happened.
      console.error("Error signing out:", error);
    });
}

export function deletedDocument(docId) {
  const delRef = doc(db, "chats", docId);

  deleteDoc(delRef).then(() => {
    console.log("deleted");
  });
  console.log("deleted id", docId);
}
export const addToOldOne = async (docId, question, answer) => {
  try {
    const docRef = doc(db, "chats", docId);
    await updateDoc(docRef, {
      packs: arrayUnion({
        id: docId,
        question: question,
        answer: answer,
      }),
    });
  } catch {
    console.log("eerrrrrrrrr");
  }
};

export { signInWithPopup, auth, provider, GoogleAuthProvider };
