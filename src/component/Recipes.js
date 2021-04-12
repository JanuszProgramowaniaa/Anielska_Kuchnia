import React  from 'react'
import './Recipes.css';
import CardComponent from './CardComponent'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexBasis:100,
    justifyContent:"center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
  
}));



export default function Recipes() {
  const classes = useStyles();
  return (
    
     <React.Fragment>
    <div className={classes.root}>
    
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={12}>
        <CardComponent/>
        </Grid>
        <Grid item  xl={3} lg={3} md={3} sm={4} xs={12}>
        <CardComponent/>
        </Grid>
        <Grid item  xl={3} lg={3} md={3} sm={4} xs={12}>
        <CardComponent/>
        </Grid>
        <Grid item  xl={3} lg={3} md={3} sm={4} xs={12}>
        <CardComponent/>
        </Grid>
        <Grid item  xl={3} lg={3} md={3} sm={4} xs={12}>
        <CardComponent/>
        </Grid>
        <Grid item  xl={3} lg={3} md={3} sm={4} xs={12}>
        <CardComponent/>
        </Grid>
        <Grid item  xl={3} lg={3} md={3} sm={4} xs={12}>
        <CardComponent/>
        </Grid>
        <Grid item  xl={3} lg={3} md={3} sm={4} xs={12}>
        <CardComponent/>
        </Grid>
      </Grid>
    </div>
      </React.Fragment> 
   
    )
}