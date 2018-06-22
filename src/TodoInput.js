import React, {Component} from 'react'

class TodoInput extends Component{

    constructor(props) {
        super(props)
        this.state = {
            newTodo: ""
        }
        this.addClicked = this.addClicked.bind(this)
    }

    addClicked() {
        let {onNewTodo} = this.props
        onNewTodo(this.state.newTodo)
        this.setState({
            newTodo: ""
        })

    }

    render(){
        let {newTodo} = this.state
        return (
            <div>
            <input value={newTodo} onChange={(event) => this.setState({newTodo: event.target.value})}/>
            <button onClick={this.addClicked}>Add Todo</button>
            </div>
        )
    }
}

export default TodoInput