import { FETCH_RECIPES, FETCH_RECIPE, PUSH_RECIPE_FAILED, PUSH_RECIPE_SUCCESS } from "./types";
import { returnErrors } from "./errorAction";
import axios from "axios";
import { tokenConfig } from './authAction'




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

export const fetchRecipe = (id) => (dispatch) => {
  fetch("/details/" + id)
    .then((response) => response.json())
    .then((przepis) =>
      dispatch({
        type: FETCH_RECIPE,
        payload: przepis,
      })
    );
};



export const pushRecipe = (recipe) => (dispatch, getState) => {

  //request body
  const body = JSON.stringify(recipe)

  axios.post('/recipes/add', body, tokenConfig(getState))
    .then(res => dispatch({
      type: PUSH_RECIPE_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.data, err.status, 'PUSH_RECIPE_FAILED'));
      dispatch({
        type: PUSH_RECIPE_FAILED
      })
    })

};

