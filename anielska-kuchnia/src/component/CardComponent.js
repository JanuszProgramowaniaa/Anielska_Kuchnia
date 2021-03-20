import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import lazania from '../static/recipes/lazania.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minHeight:300
    },
    media: {
      height: 140,
    },
  });
  

export default function CardComponent() {
   
    const classes = useStyles();

    return (
        <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={lazania}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lasagne Bolognese
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary" onClick={() => window.location.replace("Details.js")}>
                  Read more
                </Button>
              </CardActions>
            </Card>
    )
}
