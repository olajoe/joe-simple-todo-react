import React, {Component} from 'react'

class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {
            onlineTime:0
        }
        setInterval(() => {
            this.setState({
                onlineTime: this.state.onlineTime + 1
            })
        }, 1000)
    }

    render() {
        let {onlineTime} = this.state
        let {onTimerClick} = this.props
        return (
            <div onClick={() => onTimerClick(onlineTime)}>Footer Online Time: {onlineTime}</div>
        )
    }
}

export default Footer