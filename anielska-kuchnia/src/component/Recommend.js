import React, { Component } from 'react'
import './Recommend.css';
import CardMedia from '@material-ui/core/CardMedia';
import lazania from '../static/recipes/lazania.png'
export default class Recommend extends Component {
    render() {
 




        return (
            
                <div className="Recommend">
                    
               <h1 className="Zapchaj">s</h1>
               <h1 className="Recommends">Polecane przepisy</h1>
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
                
                image={lazania}
                title="lasagneBolognese"
                
              />
 

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
                
                image={lazania}
                title="lasagneBolognese"
              />




               </div>








                </div>
        )
    }
}
