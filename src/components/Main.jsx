import Die from "./Die"

export default function Main(){

    let value 
    function valueGenerate(){
        const dieArr = [1,2,3,4,5,6]
        value = dieArr[Math.floor(Math.random() * dieArr.length )]
        console.log(value)
    }
    valueGenerate()

    return(
        <main className="main">
            <div className="die-component">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={2} />
                <Die value={3} />
                <Die value={2} />
                <Die value={4} />
                <Die value={2} />
            </div>
        </main>
    )
}