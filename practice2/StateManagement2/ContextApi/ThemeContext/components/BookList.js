import React, {Component} from "react"
import {ThemeContext} from "./../ThemeContext";


export default class BookList extends Component{
    static contextType = ThemeContext;
    render(){
        console.log(this.context)
        return(
            <div className="book-list">
                <h1></h1>
                <ul>
                    <li>Book1</li>
                    <li>Book2</li>
                    <li>Book3</li>
                </ul>
            </div>
        )
    }
}