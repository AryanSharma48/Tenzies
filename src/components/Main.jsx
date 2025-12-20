import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function Main(){

    const [ arrDie , setArrDie ] = useState(generateAllNewDice())



    function generateAllNewDice(){
        return new Array(10)
            .fill(0)
            .map(() => ({ value :  Math.ceil(Math.random() * 6) , 
                isHeld : false,
                id : nanoid()
            }))
    }

    
    function rollDie (){
        setArrDie(generateAllNewDice)
    }

    const diceElements = arrDie.map(dieObj => <Die key={dieObj.id} value = {dieObj.value} />)


    return(
        <main className="main">
            <div className="die-component">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDie}>Roll Dice</button>
        </main>
    )
}