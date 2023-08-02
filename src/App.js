import { useState } from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Form from "./components/Form";
import './styles/App.css';


function App() {
  const [mocktailsList, setMocktailsList] = useState()
  const [ showModal, setShowModal] = useState(false)
  
  return(
    <>
    <Navbar setMocktailsList={setMocktailsList} setShowModal={setShowModal} />
    <Cards mocktailsList={mocktailsList} />
    {showModal && <Form setMocktailsList={setMocktailsList}/>}
    <Footer />
    </>
  )
  
}

export default App;
