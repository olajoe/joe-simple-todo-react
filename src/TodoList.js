import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component{
    render(){

        let {items} = this.props

        return (
            <div>
            <ul>
                { 
                    items.map((item, index) => 
                    <li key={index}> 
                        <TodoItem text={item}/> 
                    </li>)
                }
            </ul>
            </div>
        )
    }
}

export default TodoList