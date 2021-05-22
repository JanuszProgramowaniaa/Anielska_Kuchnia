import React, { useEffect, useState } from 'react'
import './Recipes.css';
import CardComponent from '../Common/CardComponent'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/recipesActions'
import PropTypes from 'prop-types'
import Loader from '../Main/Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexBasis: 100,
    justifyContent: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }

}));



function Recipes({ przepisy, fetchRecipes }) {
  const classes = useStyles();

  useEffect(() => {
    fetchRecipes();
  }, [])

  // return przepisy ? (przepisy.map(przepis => <p>{przepis.tytul}</p>)) : (<Loader />)
  // <Grid container spacing={3}>
  //         <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
  //           <CardComponent />
  //         </Grid>

  // </Grid>
  return przepisy ? (
    <Grid container spacing={3}>
      {przepisy.map(przepis =>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
          <CardComponent przepis={przepis} />
        </Grid>
      )}
    </Grid>) : (<Loader />)
}


Recipes.propTypes = {
  przepisy: PropTypes.array.isRequired,
  fetchRecipes: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    przepisy: state.main.przepisy
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
