import { useState } from "react"


function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counterContainer">

            <p className="displayCounter">{count}</p>

            <button className="counterButtons" onClick={decrement}>Decrement</button>
            <button className="counterButtons" onClick={reset}>Reset</button>
            <button className="counterButtons" onClick={increment}>Increment</button>



        </div>
    )

}

export default Counter