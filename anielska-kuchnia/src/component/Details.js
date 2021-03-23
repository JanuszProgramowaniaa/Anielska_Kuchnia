import React from 'react'
import lazania from '../static/recipes/lazania.png'
import CardMedia from '@material-ui/core/CardMedia';
import './Details.css';


export default function Details() {
    // return (
    //     <div>
            
    //         <Baner title="Details"/>
    //     </div>
    // )

    return (
        <div className="details">
            <h1 className="details"> Szczegółowy opis </h1>
            <h2 className="details_2"> Lazania bolognese</h2>
            <CardMedia
        style={{height:'250px'}}
        
        image={lazania}
        title="lasagneBolognese"
        />
            <span className="description">Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu.
             Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu.
             Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.</span>

            <h1 className="details"> Składniki </h1>
            <ul>
                <li>15 płatów lasagne</li>
                <li>150 g tartego parmezanu</li>
            </ul>

            <div className="content"><h1>SOS BOLOŃSKI</h1></div>
            <ul>
                <li>3 łyżki oliwy</li>
                <li>1 cebula</li> 
                <li>2 łodygi selera naciowego</li> 
                <li>1 marchewka</li> 
                <li>150 g boczku wędz. lub gotowanego</li> 
                <li>500 g mielonego mięsa wieprzowo-wołowego</li> 
                <li>1 szklanka białego lub czerwonego wina</li> 
                <li>4 łyżki koncentratu pomidorowego</li> 
                <li>1 szklanka gorącego bulionu</li> 
                <li>400 g passaty pomidorowej</li> 
            </ul>
            <div className="content"><h1>SOS BESZAMELOWY</h1></div>
            <ul>
                <li>4 łyżki masła</li>
                <li>3 łyżki mąki</li>
                <li>650 ml mleka</li>
                <li>szczypta gałki muszkatołowej</li>
            </ul>

        </div>
    )

}
