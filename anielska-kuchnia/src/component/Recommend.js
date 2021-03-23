import React, { Component } from 'react'
import './Recommend.css';
import CardMedia from '@material-ui/core/CardMedia';
import lazania from '../static/recipes/lazania.png';
import salatka_meksykanska from '../static/recipes/salatka_meksykanska.png';
import salatka_makaronowa from '../static/recipes/salatka_makaronowa.png';
import zapiekanka_z_bagietki from '../static/recipes/zapiekanka_z_bagietki.png';



export default class Recommend extends Component {
    render() {
 




        return (
            
                <div className="Recommend">
                    
               <h1 className="Zapchaj">s</h1>
               <h1 className="Recommends">{this.props.title}</h1>
               <div>
               <CardMedia className="Rec"
                style={{height:'250px',
                width:'320px'
                }}
                
                image={lazania}
                title="lasagneBolognese"
              />


<CardMedia className="Rec"
                style={{height:'250px', 
                width:'320px'
                }}
                
                image={salatka_meksykanska}
                title="salatka_meksykanska"
                
              />
 

<CardMedia className="Rec"
                style={{height:'250px',
                width:'320px'
                }}
                
                image={salatka_makaronowa}
                title="salatka_makaronowa"
              />

<CardMedia className="Rec"
                style={{height:'250px',
                width:'320px'
                }}
                
                image={zapiekanka_z_bagietki}
                title="zapiekanka_z_bagietki"
              />




               </div>








                </div>
        )
    }
}
