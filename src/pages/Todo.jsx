import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '../actions/todoActions'

const Todo = () => {
    const [userResponse, setUserResponse] = useState({
        task: "dont learn react",
        priority: 1
    })
    const handleChange = e => {
        setUserResponse({ ...userResponse, [e.target.name]: e.target.value })
    }
    const callAction = useDispatch()
    const { todos } = useSelector(state => state.myTodo)
    return <>
        <input
            value={userResponse.task}
            onChange={handleChange}
            name='task'
            type="text" />
        <br /><br />
        <select
            value={userResponse.priority}
            onChange={handleChange}
            name='priority'
        >
            <option selected>Open this select menu</option>
            <option value="1">high</option>
            <option value="2">medium</option>
            <option value="3">low</option>
        </select>
        <br /><br />
        <button onClick={e => callAction(createTodo(userResponse))}>add</button>
        <pre> Hello Anir {JSON.stringify(todos, null, 2)}</pre>
    </>
}

export default Todo