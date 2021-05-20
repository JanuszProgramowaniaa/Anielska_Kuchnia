import { FETCH_RECIPES } from "./types";


export const fetchRecipes = () => (dispatch) => {

  fetch("/recipes")
    .then((response) => response.json())
    .then((przepisy) =>
      dispatch({
        type: FETCH_RECIPES,
        payload: przepisy,
      })
    );
};
