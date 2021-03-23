import React, { Component } from 'react'
import './Hotfood.css';
import CardMedia from '@material-ui/core/CardMedia';
import lazania from '../static/recipes/lazania.png'
export default class Hotfood extends Component {
    render() {
   const date= new Date();
   const dayMonth=date.getDate()
   const day=date.getDay();
   const year=date.getFullYear();
   const month=date.getMonth();


   const dzien=function(day) {
   if(day===1) return "Poniedziałek";
   if(day===2) return "Wtorek";
   if(day===3) return "Środa";
   if(day===4) return "Czwartek";
   if(day===5) return "Piątek";
   if(day===6) return "Sobota";
   if(day===7) return "Niedziela";

   }






        return (
                <div className="Hot">
                    <h1 className="Hot"> Danie dnia </h1>
                    <h3>{dzien(day)}</h3>
                    <h3>{dayMonth+"."+month+"."+year}</h3>
                    <CardMedia
                style={{height:'250px'}}
                
                image={lazania}
                title="lasagneBolognese"
              />
              <h1 className="Hot">lazania bolognese</h1>
            
                </div>
        )
    }
}
