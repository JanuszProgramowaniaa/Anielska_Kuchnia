import React from 'react'
import Hotfood from './Hotfood'
import Introduction from './Introduction'
import Recommend from './Recommend'
import News from './News'

export default function Main() {
    return (
        <div>
        <Hotfood/>
        <Introduction/>
        <Recommend title="Polecane przepisy"/>
        <News title="Nowe przepisy"/>
        </div>
    )
}
