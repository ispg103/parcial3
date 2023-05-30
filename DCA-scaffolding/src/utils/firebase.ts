import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Recipe } from "../types/recipe";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveRecipeInDB = async (recipes: Recipe) =>{
    try {
        await addDoc(collection(db, "recipes"), recipes);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};

const getRecipesFromDB = async (): Promise<Recipe[]>=>{
  const resp: Recipe[] = [];
  const querySnapshot = await getDocs(collection(db, "recipes"));

querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push({
    ...doc.data(),
  } as Recipe);
});
return resp;
}

export default { saveRecipeInDB, getRecipesFromDB };