import React, { Component } from 'react'
import './Introduction.css';
import CardMedia from '@material-ui/core/CardMedia';
import background from '../static/recipes/background.png'
export default class Introduction extends Component {
    render() {

  





        return (
                <div className="Introduction">
                <CardMedia
                style={{height:'250px'}}
                
                image={background}
                title="background"
              />
              <h1 className="Introduction">Tradycja czy nowoczesność? A może jedno i drugie?</h1>
                   
                   <p>Są dania, których absolutnie nie może zabraknąć na wielkanocnym stole. Nie oznacza to jednak, że tego dnia nie można sobie pozwolić na eksperymenty. Obok tradycyjnych jajek i mazurków mogą pojawić się krem groszkowy albo lekka sałatka z komosą i mozzarellą. Możliwości jest wiele, a w naszej bazie przepisów znajdą coś dla siebie zarówno miłośnicy klasyki jak i nowoczesnej kuchni.</p>
                   <button type="button" onClick={() => window.location.replace("Recipes")}>Sprawdź </button>
                </div>
        )
    }
}
