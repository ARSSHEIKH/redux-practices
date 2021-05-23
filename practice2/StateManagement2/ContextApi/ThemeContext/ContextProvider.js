import React, {createContext, Component} from "react";

export const CounterContext = createContext()

export default class CounterContextProvider extends Component{
  state = {
    counter : 0
  }
  render(){
    return(
      <CounterContext.Provider value={{...this.state}}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}