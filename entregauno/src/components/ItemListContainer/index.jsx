import "./item.css"

const ItemListContainer = (props) => {
  return (
    <div className="contItem">
        <p className="item">{props.greeting}</p>
    </div>
  )
}

export default ItemListContainer