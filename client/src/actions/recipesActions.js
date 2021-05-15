import { FETCH_RECIPES} from "./types";
import axios from 'axios'

export const fetchRecipes = () => (dispatch) =>{
    // axios.get("http://localhost:5000/recipes")
    //     .then(przepisy =>dispatch({
    //         type:FETCH_RECIPES,
    //         payload:przepisy.data
    //     }))
    //     .catch((error) => {
    //     console.log(error);
    //     })
    fetch("http://localhost:5000/recipes")
    .then((response) => response.json())
    .then(przepisy =>
      dispatch({
        type: FETCH_RECIPES,
        payload: przepisy,
      })
    );


};
