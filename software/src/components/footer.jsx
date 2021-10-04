import 'styles/footer.css';
import { Link } from 'react-router-dom';
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id='footerMain'>
                <div className="containerfinal">
                    <div className="menufinal">
                        <ul>
                            <li id='contacto'><Link to='/main-page'>Contacto</Link></li>
                            <li><a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store"
                                target="_blank">Github</a></li>
                            <li><b>|</b></li>
                            <li><a href="https://trello.com/b/UvFvhLkZ/desarrollo-web" target="_blank">Trello</a></li>
                            <li id='copyright'><Link to='/main-page'>@Copyright Fanta-Stick</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;