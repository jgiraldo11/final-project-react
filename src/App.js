import { useState } from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Form from "./components/Form";
import './styles/App.css';

// Declare mocktailsList and setMocktailsList as State Variables
// Declare showModal and setShowModal as State Variables
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
// Call Navbar component with setMocktailsList and setShowModal as props
// Call Cards component with mocktailsList as a prop
// If showModal is true, call Form component with setMocktailsList as a prop
// Call Footer component

export default App;
