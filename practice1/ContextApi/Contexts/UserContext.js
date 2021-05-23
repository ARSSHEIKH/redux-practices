import React, { createContext, Component } from "react";
export const UserContext = createContext();

export default class UserContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            password: props.password,
        }
    }
    render() {
        return (

            <UserContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}