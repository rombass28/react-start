import React from 'react';
import './Header.css';

class Header extends React.Component {

    handleClick() {
        console.log('clicked!')
    }

    render() {
        return(<div className="Header">
            Header
            {/* <button onClick={this.handleClick}>Click me</button> */}
        </div>)
    }
}

export default Header;