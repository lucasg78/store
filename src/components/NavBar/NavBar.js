import "./NavBar.scss"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header className="header">
            <div className="header_container">
                <h1 className="header_logo">Home</h1>
                <nav className="header_navbar">
                    <p className="header_navlink">Enlace 1</p>
                    <p className="header_navlink">Enlace 2</p>
                    <p className="header_navlink">Enlace 3</p>
                    <CartWidget />
                </nav>
            </div>
        </header>
    )
}

export default NavBar