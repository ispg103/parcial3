import { Recipe } from "../types/recipe";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveRecipe = async (recipe: Recipe): Promise<Actions> =>{
    await firebase.saveRecipeInDB(recipe);
        return {
            action: SomeActions.SAVE_RECIPE,
            payload: recipe,
        };
};

export const getRecipes = async (): Promise<Actions> =>{
    const recipes = await firebase.getRecipesFromDB();
        return {
            action: SomeActions.GET_RECIPE,
            payload: recipes,
        };
};