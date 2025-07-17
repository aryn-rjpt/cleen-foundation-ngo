import { getFirestore, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import app from './firebaseConfig.js';

const db = getFirestore(app);

// export async function updateProfile(uid, userData) {

//     console.log("Uid:", uid, "Data:", userData);

//     try {
//         const docRef = await addDoc(collection(db, 'users'), {
//             uid: uid,
//             ...userData
//         })
//         console.log("Document written with ID: ", docRef.id, uid, userData);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }

export async function setProfile(email, userData) {

    console.log("email:", email, "Data:", userData);

    const docRef = doc(db, 'users', email)

    await setDoc(docRef, {
        ...userData
    }, { merge: true });

    console.log("Created document with email: ", email, "Data:", userData);
}

export async function updateProfile(email, userData) {

    try {

        console.log("email:", email, "Data:", userData);

        const docRef = doc(db, 'users', email)

        await updateDoc(docRef, {
            ...userData
        }, { merge: true });

        console.log("Updated document with email: ", email, "Data:", userData);

        return 200;
    }
    catch (error) {
        console.error("Error updating document: ", error);
        return 500;
    }
}

export async function getUserData(email) {

    console.log("Retrieving data for email:", email);

    const ref = doc(db, 'users', email);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return null;
    }

}