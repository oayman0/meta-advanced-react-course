import { useReducer , useRef } from "react";
import useConsoleLog from "./useConsoleLog";
import App1 from "./lab-w2/App";
function reducer(state, action) {
    //reducer function here
    switch (action.type) {
        case 'buy': {
            return { money: state.money - 10 }
        }
        case 'sell': {
            return { money: state.money + 10 }
        }
    }
}
function LemonApp() {

    const initialVal = { money: 100 }
    const [state, dispatch] = useReducer(reducer, initialVal)
    useConsoleLog(state)
    const handleBuy = () => {
        dispatch(
            { type: 'buy' }
        )
    }
    const handleSell = () => {
        dispatch(
            { type: 'sell' }
        )
    
    }

    const textRef = useRef(null)
    const handleClick=()=>{ 
        textRef.current.focus()

    }


    return (
        <>
            <h1>Hello World</h1>
            <h1>Balance : {state.money}</h1><br />
            <button onClick={handleBuy}>Buy(-10)</button>
            <button onClick={handleSell}>Sell (+10) </button>


                {/* useRef */}
            <div>
            <h1>useRef use Case</h1>
            <input type="text" ref={textRef}></input>
            <button onClick={handleClick}>Type Some</button>
            </div>

            <App1/>
            
        </>
    )
}
export default LemonApp; 