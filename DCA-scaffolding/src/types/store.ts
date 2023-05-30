import { Recipe } from "./recipe";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recipe: Recipe[];
};

export enum SomeActions {
  "SAVE_RECIPE" = "SAVE_RECIPE",
  "GET_RECIPE" = "GET_RECIPE",
}

export interface SaveRecipeAction {
  action: SomeActions.SAVE_RECIPE;
  payload: Recipe;
}

export interface GetRecipeAction {
  action: SomeActions.GET_RECIPE;
  payload: Recipe[];
}

export type Actions = SaveRecipeAction | GetRecipeAction;