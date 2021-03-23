import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import lazania from '../static/recipes/lazania.png';
import pizza from '../static/recipes/pizza.jpg'
import spaghetti from '../static/recipes/spaghetti.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: '100vw',
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
                  Lasagne bolognese to pyszny pomysł na obiad, który z pewnością podbije Wasze serca!
                   Wiecie jak mocno kocham kuchnię włoską i mogłabym ją jeść wręcz codziennie.
                   Pięknie pachnąca, warstwowa zapiekanka z mięsem mielonym, warzywami przekładana 
                   makaronem do lasagne, serem mozzarella…
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => window.location.replace("Details")}>
                  Czytaj wiecej
                </Button>
              </CardActions>
            </Card>
    )
}
