import React,{Component} from 'react';
import './hello.css'
import './hello.scss'

let style={
    backgroundColor:'blue'
}

export default class hello extends Component {
    render(){
        return(
            <div>
                <h1 style={style}>welcome to my......</h1>
                <br/>
                <img/>
            </div>
        )
    }
}

