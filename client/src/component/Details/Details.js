import React, { useEffect } from 'react'
import lazania from '../../static/recipes/lazania.png'
import CardMedia from '@material-ui/core/CardMedia';
import DetailsStyles from './Details.module.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import { fetchRecipe } from '../../actions/recipesActions'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"

function Details({ przepis, fetchRecipe }) {

    const { przepisId } = useParams();
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

                    <form>
                        <input type="text" placeholder="Wprowadz swoj komentarz" />
                        <button className="addComents">
                            Dodaj komentarz</button>




                    </form>
                    {przepis.komentarze.map(comment => <Comment comment={comment} />)}



                </div>
            </div>
        </div>

        // <p>{przepis.tytul}</p>
    )

}

Details.propTypes = {
    przepis: PropTypes.array.isRequired,
    fetchRecipe: PropTypes.func.isRequired,
    przepisId: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        przepis: state.main.przepis
    }
}
// const mapDispatchToProps = () => (id, dispatch) => {
//     return {
//         fetchRecipe: () => dispatch(fetchRecipe(id))
//     }
// }

export default connect(mapStateToProps, { fetchRecipe })(Details)