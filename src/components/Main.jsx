import { useEffect, useState , useRef } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"
import ReactConfetti from "react-confetti"

export default function Main(){
    const [ arrDie , setArrDie ] = useState(() => generateAllNewDice())

    const buttonRef = useRef(null)

    let gameWon;  
    if(    
        arrDie.every(die => die.isHeld) && 
        arrDie.every(die => die.value === arrDie[0].value )
    ){
        gameWon = true
    }else{
        gameWon = false
    }

    useEffect(() => {
        if(gameWon){
            buttonRef.current.focus()
        }
    },[gameWon])

    function generateAllNewDice(){
        return new Array(10)
            .fill(0)
            .map(() => ({ value :  Math.ceil(Math.random() * 6) , 
                isHeld : false,
                id : nanoid()
            }))
    }
  
    function rollDie (){
        if(!gameWon){
        setArrDie(prevDice => prevDice.map(item => {
            return item.isHeld ? 
                item : 
                {...item , value : Math.ceil(Math.random() * 6) }
                
        }))
        }else{
            setArrDie(generateAllNewDice())
        }

    }

    function hold(id){
        setArrDie(prevDice => prevDice.map(item => {
            return item.id === id ? 
                { ...item , isHeld : !item.isHeld} : item
        }))
    }

    const diceElements = arrDie.map(dieObj => 
        <Die 
            
            isHeld = {dieObj.isHeld} 
            key={dieObj.id} 
            value = {dieObj.value} 
            hold={() => hold(dieObj.id)} 
            
        />)

    return(
        <main className="main">
            { gameWon && <ReactConfetti />}
            <div className="center-div">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>
            <div className="die-component">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDie}>{gameWon ? "New Game" : "Roll Dice"}</button>
        </main>
    )
}