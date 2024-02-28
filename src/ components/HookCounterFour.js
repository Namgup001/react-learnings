import React, { useState } from 'react'

function HookCounterFour() {
	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1
			}
		])
	}
	// console.log(items)
	return (
		<div>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>value = {item.value} , id = {item.id}</li>
				))}
			</ul>
		</div>
	)
}

export default HookCounterFour
