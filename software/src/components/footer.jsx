import 'styles/footer.css';

function Footer() {
    return (
        <footer id='footerMain'>
            <div className="containerfinal">
                <div className="menufinal">
                    <ul>
                        <li id='contacto'><a href="#">Contacto</a></li>
                        <li><a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store"
                            target="_blank">Github</a></li>
                        <li><b>|</b></li>
                        <li><a href="https://trello.com/b/UvFvhLkZ/desarrollo-web" target="_blank">Trello</a></li>
                        <li id='copyright'><a href="#">@Copyright Fanta-Stick</a></li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}

export default Footer;