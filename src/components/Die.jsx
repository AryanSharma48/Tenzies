export default function Die(props){

    const styles = {
        backgroundColor : props.isHeld ? "#4CDF87" : "white"
    }

    return(
        <button 
            onClick={props.hold} 
            style = {styles} 
            className="dices"
        >{props.value}</button>
    )
} 