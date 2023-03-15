import "./button.css"

function Button(props) {
    return (
        <button className="boton">{props.texto}</button>
    )
}

export default Button