import { useState } from "react"
import Die from "./Die"

export default function Main(){

    const [ arrDie , setArrDie ] = useState(generateAllNewDice())



    function generateAllNewDice(){
        const value = []
        for(let i = 0 ; i <= 9 ; i++ ){
            value[i] = Math.floor(Math.random() * 6) + 1 
        }
           return value
    }

    const diceElements = arrDie.map(num => <Die value = {num} />)

    function rollDie (){
        setArrDie(generateAllNewDice)
    }

    return(
        <main className="main">
            <div className="die-component">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDie}>Roll Dice</button>
        </main>
    )
}