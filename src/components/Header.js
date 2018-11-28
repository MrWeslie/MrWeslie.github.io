import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>This is Weslie</strong></h1>
                    <p> Welcome to my personal site. </p>
                
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
