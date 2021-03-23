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
               <div className="Rec">
               <CardMedia 
                style={{height:'250px',
                width:'250px'
                }}
                
                image={schab}
                title="schab"
              />
             <h3>Schab pieczony</h3>
              <button type="button" className="Rec1" onClick={() => window.location.replace("Details")}>Sprawdź </button>
</div>

<div className="Rec">
               <CardMedia 
                style={{height:'250px',
                width:'250px'
                }}
                
                image={jaja}
                title="jaja_z_farszem"
              />
             <h3>Jaja z farszem</h3>
              <button type="button" className="Rec1" onClick={() => window.location.replace("Details")}>Sprawdź </button>
</div>
 

 <div className="Rec">
               <CardMedia 
                style={{height:'250px',
                width:'250px'
                }}
                
                image={pierogi}
                title="pierogi"
              />
             <h3>Pierogi</h3>
              <button type="button" className="Rec1" onClick={() => window.location.replace("Details")}>Sprawdź </button>
</div>

<div className="Rec">
               <CardMedia 
                style={{height:'250px',
                width:'250px'
                }}
                
                image={lazania}
                title="lazania"
              />
             <h3>Lazania</h3>
              <button type="button" className="Rec1" onClick={() => window.location.replace("Details")}>Sprawdź </button>
</div>

<div className="Rec">
               <CardMedia 
                style={{height:'250px',
                width:'250px'
                }}
                
                image={mega_rollo}
                title="mega_rollo"
              />
             <h3>Mega rollo</h3>
              <button type="button" className="Rec1" onClick={() => window.location.replace("Details")}>Sprawdź </button>
</div>


               </div>








                </div>
        )
    }
}
