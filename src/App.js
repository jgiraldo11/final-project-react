// import Test from './components/Card/test';
import { useState } from "react";
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './styles/App.css';


function App() {
  const [mocktailsList, setMocktailsList] = useState()
  return(
    <>
    <Navbar setMocktailsList={setMocktailsList} />
    <Cards mocktailsList={mocktailsList} />
    <Footer />
    </>
  )
  
}

export default App;
