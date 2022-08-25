import React, { useState } from "react";

export default function Todolist() {
	const [todoInputText, setTodoInputText] = useState("")
	const [todos, setTodos] = useState([
		// {
		// 	todo: "making a video",
		// 	complete: true
		// },
		// {
		// 	todo: "making a website",
		// 	complete: false
		// },
		// {
		// 	todo: "making a car",
		// 	complete: false
		// }
	])

	// onKeyDownHandler = e => {
	// 	if (e.keyCode === 13) {
	// 		this.sendMessage();
	// 	}
	// };

	// const enter = document.getElementById("input")

	// enter.addEventListener("keypress", (event) => {
	// 	if (event.keyCode === 13) {
	// 		handleAddTodo()
	// 	}
	// }) 

	function handleAddTodo() {
		if (todoInputText.length > 0) {
			setTodos([...todos, { todo: todoInputText, complete: false }])
		}
		document.querySelector("#input").value = "";
	}
	

	function handleTodoClicks(e, index) {
		switch (e.detail) { //detail to detect single click or double click
			case 1:
				//complete => true
				const newArr = []
				todos.map((item, i) => {
					if (i === index) {
						newArr.push({
							todo: item.todo,
							complete: !item.complete
						})
					} else {
						newArr.push(item)
					}
				})

				setTodos(newArr)
				break;
			case 2:
				setTodos(todos.filter((item, iy) => iy !== index))
				break;

			default:
				break;
		}
	}

	return (
		<div className="todo-container">





			<div className="header">

				<h1 id="title">TASKEO</h1>
				<h4 id="subtitle">THE TASK TRACKER</h4>
				
			</div>



			<div className="input-div">

				<input onChange={e => setTodoInputText(e.target.value)} className="input-todo-text" id="input" type="text" placeholder="something you need to do" />

				<button onClick={
					() => handleAddTodo()
					} className="add-todo-button">add</button>

			</div>



			<div className="display-todo-container">

				<div className="instructions">
					<p>Click on the task to mark as completed/incomplete.</p>
					<p>Double click on the task to delete.</p>
				</div>


				{todos.map((todo, index) => (
					
					<h2 style={
						{ 
							textDecoration: todo.complete ? "line-through" : "none", 
							color: todo.complete ? "#637884ac" : null,
							filter: todo.complete ? "none" : null,
							border: todo.complete ? "1px solid rgba(84, 106, 151, 0.18)" : null,
							background: todo.complete ? "#161c1c" : null,
						}
					} onClick={e => handleTodoClicks(e, index)} className="todo-item-text">{todo.todo}</h2>

				))}

			</div>





		</div>
	)
}