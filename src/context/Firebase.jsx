import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export const getMatchedData = async (limitCount, category, path) => {
  let q = query(collection(firestore, "products"));

  if (category) {
    q = query(q, where("category", "==", category));
  }

  if (path) {
    q = query(
      q,
      where("path", "!=", path),
      orderBy("path"),
      orderBy("priority", "asc")
    );
  } else {
    // If no path is provided, use priority as the default order
    q = query(q, orderBy("priority", "asc"));
  }

  // If limitCount is provided, add limit to the query
  if (limitCount) {
    q = query(q, limit(limitCount));
  }

  // Add default ascending order by title if no specific order is provided

  const querySnapshot = await getDocs(q);
  let products = [];

  querySnapshot.forEach((doc) => {
    products.push({
      id: doc.id,
      data: {
        title: doc.data().title,
        image: doc.data().image,
        shortdescription: doc.data().shortdescription,
        path: doc.data().path,
        keywords: doc.data().keywords,
      },
    });
  });

  return products;
};

export const getSingleProduct = async (path) => {
  const q = query(collection(firestore, "products"), where("path", "==", path));

  const querySnapshot = await getDocs(q);
  let product = null;

  querySnapshot.forEach((doc) => {
    product = doc.data(); // Update product with the document data
  });

  return product;
};

export const getImageURL = async (path) => {
  const storageRef = ref(storage, path);
  try {
    const url = await getDownloadURL(storageRef);

    return url;
  } catch (error) {
    console.error("Error getting download URL:", error);
    throw error;
  }
};
