import Button from "../Button";
import CartWidget from "../CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="contenedor">
        <div className="botones">
            <Button texto="Home" />
            <Button texto="Contactanos" />
            <Button texto="Registrate" />
        </div>
        <CartWidget />
    </div>
  )
}

export default Navbar;