import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import UlubionyStyles from './Ulubiony.module.css';
import lazania from '../static/recipes/lazania.png'


export default function Ulubiony() {
    // return (
    //     <div>
            
    //         <Baner title="Details"/>
    //     </div>
    // )

    return (

        <div className={UlubionyStyles.ulubiony}>
            <span className={UlubionyStyles.spanClass}> Najczęściej wybierane przepisy przez użytkowników</span>
            <div class="grid-container">
                <div className={UlubionyStyles.kafel}>
                    <CardMedia
                        style={{height:'250px'}}
                        
                        image={lazania}
                        title="lasagneBolognese"
                    />
                    <span className={UlubionyStyles.opisUlubiony}>
                        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
                    </span>
                    <button className={UlubionyStyles.more_info}>Zobacz więcej</button>
                </div>
                <div className={UlubionyStyles.kafel}>
                    <CardMedia
                        style={{height:'250px'}}
                        
                        image={lazania}
                        title="lasagneBolognese"
                    />
                    <span className={UlubionyStyles.opisUlubiony}>
                        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
                    </span>
                    <button className={UlubionyStyles.more_info}>Zobacz więcej</button>
                </div>
                <div className={UlubionyStyles.kafel}>
                    <CardMedia
                        style={{height:'250px'}}
                        
                        image={lazania}
                        title="lasagneBolognese"
                    />
                    <span className={UlubionyStyles.opisUlubiony}>
                        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
                    </span>
                    <button className={UlubionyStyles.more_info}>Zobacz więcej</button>
                </div>
                <div className={UlubionyStyles.kafel}>
                    <CardMedia
                        style={{height:'250px'}}
                        
                        image={lazania}
                        title="lasagneBolognese"
                    />
                    <span className={UlubionyStyles.opisUlubiony}>
                        Lazania wbrew pozorom jest bardzo prostym daniem. Ta doskonała uczta kulinarna smakuje prawie każdemu. Nie wymaga wielkich zdolności kulinarnych, wystarczy trzymać się przepisu. Co więcej - po odgrzaniu smakuje równie dobrze, więc z powodzeniem możemy ją zabrać do pracy.
                    </span>
                    <button className={UlubionyStyles.more_info}>Zobacz więcej</button>
                </div>
            </div>
        </div>
        
    )

}