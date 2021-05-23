import React, { Component } from "react";
import { CounterContext } from './ContextApi/ThemeContext/ContextProvider'

export default class CounterComponent extends Component {
    static contextType = CounterContext;

    state = {
        counter: this.context.counter
    }
    render() {
        return (
            <div>
                <h1>With Context Api</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={() => {
                    ++this.context.counter
                    this.setState({ counter: this.context.counter })


                }}>Increase</button>
                <button onClick={() => {
                    --this.context.counter
                    this.setState({ counter: this.context.counter })
                }}>Decrease</button>
            </div>
        )
    }
}