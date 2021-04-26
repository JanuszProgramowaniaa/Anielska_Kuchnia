import React from 'react'
import MainStyles from './Main.module.css';
import Hotfood from './Hotfood'
import Introduction from './Introduction'
import Recommend from './Recommend'
import News from './News'

export default function Main() {
    return (
        <div className={MainStyles.Container}>
        <Hotfood/>
        <Introduction/>
        <div className={MainStyles.lineBreak}></div>
        <Recommend title="Polecane przepisy"/>
        <News title="Nowe przepisy"/>
        </div>
    )
}
