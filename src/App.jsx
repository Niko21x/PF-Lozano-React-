
import './App.css'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div>
      <Header/>
      <ItemListContainer greeting="¡Bienvenido a mi tienda!" title="Ofertas Especiales" description="Descubre nuestras increíbles ofertas para productos sostenibles." />

    </div>
  )
}

export default App
