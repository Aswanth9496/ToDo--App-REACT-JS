import "./dashbord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, ChangeEvent, FormEvent } from "react";



export default function Dashbord() {
    // State to manage input value
    const [input, setInput] = useState<string>("");

    const [todos, setTodos] = useState<string[]>([]);

    // Function to handle input change
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
   
    };

   
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (input.trim() !== "") {
            setTodos([...todos, input]); 
            setInput("");
        }
    };

   
    const deleteItem = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the clicked item
        setTodos(updatedTodos);
    };


    
    return (
        <div className="Todo-Container">
            <form className="Input-Section" onSubmit={handleSubmit}>
                <h1>Todo App</h1>
                <input
                    type="text"
                    value={input}
                    placeholder="Enter Item..."
                    onChange={handleChange}
                />
            </form>
            <ul>
            {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}{" "}
                        <FontAwesomeIcon
                            icon={faTrash}
                            className="icon-right"
                            onClick={() => deleteItem(index)} // Delete item on click
                        />
                    </li>
                ))}
               
            </ul>
        </div>
    );
}
