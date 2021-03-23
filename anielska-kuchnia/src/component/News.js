import React, { Component } from 'react'
import './News.css';
import CardMedia from '@material-ui/core/CardMedia';
import lazania from '../static/recipes/lazania.png'
import jaja from '../static/recipes/jaja_z_farszem.png'
import schab from '../static/recipes/schab_pieczony.png'
import pierogi from '../static/recipes/pierogi.png'
import mega_rollo from '../static/recipes/mega_rollo.png'
export default class News extends Component {
    render() {
 




        return (
            
                <div className="News">
                    
             
               <h1 className="News">{this.props.title}</h1>
               <div>
               <CardMedia className="Rec"
                style={{height:'250px',
                width:'250px'
                }}
                
                image={schab}
                title="schab"
              />


<CardMedia className="Rec"
                style={{height:'250px', 
                width:'250px'
                }}
                
                image={jaja}
                title="lasagneBolognese"
                
              />
 

<CardMedia className="Rec"
                style={{height:'250px',
                width:'250px'
                }}
                
                image={pierogi}
                title="pierogi"
              />

<CardMedia className="Rec"
                style={{height:'250px',
                width:'250px'
                }}
                
                image={mega_rollo}
                title="mega_rollo"
              />

<CardMedia className="Rec"
                style={{height:'250px',
                width:'250px'
                }}
                
                image={lazania}
                title="lasagneBolognese"
              />


               </div>








                </div>
        )
    }
}
