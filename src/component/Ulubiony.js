import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import './Ulubiony.css';
import lazania from '../static/recipes/lazania.png'


export default function Ulubiony() {
    // return (
    //     <div>
            
    //         <Baner title="Details"/>
    //     </div>
    // )

    return (

        <div className="ulubiony">
            <span> Najczęściej wybierane przepisy przez użytkowników</span>
            <div class="grid-container">
                <div class="kafel">
                    <CardMedia
                        style={{height:'250px'}}
                        
                        image={lazania}
                        title="lasagneBolognese"
                    />
                    <span className="opisUlubiony">
                        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
                    </span>
                    <button className="more_info">Zobacz więcej</button>
                </div>
                <div class="kafel">
                     <CardMedia
                        style={{height:'250px'}}
                        
                        image={lazania}
                        title="lasagneBolognese"
                    />       
                    <span className="opisUlubiony">
                        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
                    </span>    
                    <button className="more_info">Zobacz więcej</button>         
                </div>
                <div class="kafel">
                    <CardMedia
                        style={{height:'250px'}}
                        
                        image={lazania}
                        title="lasagneBolognese"
                    /> 
                    <span className="opisUlubiony">
                        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
                    </span>
                    <button className="more_info">Zobacz więcej</button>
                </div>
                <div class="kafel">
                    <CardMedia
                        style={{height:'250px'}}
                        
                        image={lazania}
                        title="lasagneBolognese"
                    />
                    <span className="opisUlubiony">
                        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
                    </span>
                    <button className="more_info">Zobacz więcej</button>
                </div>
            </div>
        </div>
        
    )

}