import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const greeting = [
    "Somos la tienda online mas visitada en la web, contamos con el mas amplio stock en todos los talles, todos los medios de pago y las mejores promociones. "
  ]
  return (
    <div className='container'>
      <Navbar />
      <h1 className='titulo'>Tienda Online</h1>
      <ItemListContainer greeting={greeting} />
    </div>
  )
}

export default App
