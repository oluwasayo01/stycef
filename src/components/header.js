import React from 'react'
import { ThemeContext } from './ThemeContext'


const Header = () => {
    return(
        <ThemeContext.Consumer>
            {({background, color}) => {

            return (<div>
                <h1 style={{backgroundColor: background, color: color}}>stYce</h1>
            </div>)
            }}

        </ThemeContext.Consumer>

    )
}


export default Header;