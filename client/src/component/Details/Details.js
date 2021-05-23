<<<<<<< HEAD
import React from "react";
import lazania from "../../static/recipes/lazania.png";
import CardMedia from "@material-ui/core/CardMedia";
import DetailStyles from "./Details.module.css";
import img from "../../static/login/maklowicz.jpg";


export default function Details() {
  return (
    <div className={DetailStyles.details}>
      <h1 className={DetailStyles.details}> Szczegółowy opis </h1>
      <h2 className="details_2"> Lazania bolognese</h2>
      <CardMedia
        style={{ height: "250px" }}
        image={lazania}
        title="lasagneBolognese"
      />
      <span className="description">
        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta
        kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności
        kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu
        smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
      </span>

      <h1 className={DetailStyles.details}> Składniki </h1>
      <ul>
        <li>15 płatów lasagne</li>
        <li>150 g tartego parmezanu</li>
      </ul>

      <div className="content">
        <h1>SOS BOLOŃSKI</h1>
      </div>
      <ul>
        <li>3 łyżki oliwy</li>
        <li>1 cebula</li>
        <li>2 łodygi selera naciowego</li>
        <li>1 marchewka</li>
        <li>150 g boczku wędz. lub gotowanego</li>
        <li>500 g mielonego mięsa wieprzowo-wołowego</li>
        <li>1 szklanka białego lub czerwonego wina</li>
        <li>4 łyżki koncentratu pomidorowego</li>
        <li>1 szklanka gorącego bulionu</li>
        <li>400 g passaty pomidorowej</li>
      </ul>
      <div className="content">
        <h1>SOS BESZAMELOWY</h1>
      </div>
      <ul>
        <li>4 łyżki masła</li>
        <li>3 łyżki mąki</li>
        <li>650 ml mleka</li>
        <li>szczypta gałki muszkatołowej</li>
      </ul>
      <div className="comments">
        <div className="bg-comments">
          {" "}
          <h1 className={DetailStyles.details}> Komentarze </h1>
          <form className={DetailStyles.formik}>
            <div className={DetailStyles.whosAdd}>
              <span className={DetailStyles.spanik}>
                <b>Robert</b>
              </span>
            </div>
            <input
              type="text"
              value="Danie pierwsza klasa dla każdego głodomorka"
              style={{"border":"2px solid green"}}
            />
             <div className={DetailStyles.whosAdd}>
              <span className={DetailStyles.spanik}>
                <b>Marek</b>
              </span>
            </div>
            <input
              type="text"
              value="Spoko przepis"
              style={{"border":"2px solid green"}}
            />
             <div className={DetailStyles.whosAdd}>
              <span className={DetailStyles.spanik}>
                <b>Andrzej</b>
              </span>
            </div>
            <input
              type="text"
              value="Daje rade, choc ja robie to inaczej"
              style={{"border":"2px solid green"}}
            />
            
            <input className={DetailStyles.inpt} style={{"border":"4px solid blue"}}type="text" />
            <button className={DetailStyles.addComents}>Dodaj komentarz</button>
          </form>
        </div>
      </div>
    </div>
  );
}
=======
import React, { useEffect, useState } from 'react'
import lazania from '../../static/recipes/lazania.png'
import CardMedia from '@material-ui/core/CardMedia';
import DetailsStyles from './Details.module.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import { fetchRecipe, pushComment } from '../../actions/recipesActions'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"
import Loader from '../Main/Loader'

function Details({ przepis, fetchRecipe, user, pushComment }) {

    const { przepisId } = useParams();
    const [comment, setComment] = useState()
    const handleComment = (e) => setComment(e.target.value)

    const handleSubmit = (e) => {


        e.preventDefault()
        const content = {
            komentarze: {
                author: user.name,
                treść: comment
            }
        }

        pushComment(content, przepisId)
        window.location.reload();

    }


    useEffect(() => {
        fetchRecipe(przepisId);
    }, [])

    return (
        <div className={DetailsStyles.details}>
            <h1 className="details"> Szczegółowy opis </h1>
            <h2 className="details_2"> {przepis.tytul}</h2>
            <CardMedia
                style={{ height: '250px' }}

                image={lazania}
                title="lasagneBolognese"
            />
            <span className="description">{przepis.krotki_opis}</span>

            <h1 className="details"> Składniki </h1>
            <ul>
                {JSON.stringify(przepis.skladniki)}




            </ul>

            <div className="content"><h1>Sposob wykonania</h1></div>
            <span className="description">{przepis.sposob_wykonania}</span>

            <div className="comments">
                <div className="bg-comments"> <h1 className="details"> Komentarze </h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Wprowadz swoj komentarz" name="comment" onChange={handleComment} />
                        <button type="submit" className="addComents"> Dodaj komentarz</button>
                    </form>
                </div>
                {przepis.komentarze === 0 ? '' : ''}
                {przepis.komentarze ? (przepis.komentarze.map(comment => <Comment key={comment.id} comment={comment} />)) : (<Loader />)}

            </div>

        </div>


    )

}

Details.propTypes = {
    przepis: PropTypes.object.isRequired,
    fetchRecipe: PropTypes.func.isRequired,
    przepisId: PropTypes.string.isRequired,
    user: PropTypes.object,
    pushComment: PropTypes.func
}

const mapStateToProps = state => {
    return {
        przepis: state.main.przepis,
        user: state.auth.user
    }
}
// const mapDispatchToProps = () => (id, dispatch) => {
//     return {
//         fetchRecipe: () => dispatch(fetchRecipe(id))
//     }
// }

export default connect(mapStateToProps, { fetchRecipe, pushComment })(Details)
>>>>>>> new_order
