import React, {Component} from "react"
import {ThemeContext} from "./../ThemeContext";

export default class Navbar extends Component{
    static contextType = ThemeContext;
    render(){
        console.log(this.contextType)
        // const {isLightTheme, light, dark} = this.context
        return( 
            <nav>
                <h1>Context Api</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}
