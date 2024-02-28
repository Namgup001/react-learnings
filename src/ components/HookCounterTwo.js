import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrFive = () => {
        for(let i=1;i<=5;i++) {
            setCount(prevCount => prevCount+1)
        }
    }

    return (
		<>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrFive}>Increment 5</button>
		</>
	)
}

export default HookCounterTwo