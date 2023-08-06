// this is used to perform side effects in functional components
// selectively importing the useEffect hook from the React library. 
import { useEffect } from "react"; 

// This is a (function) called 'Navbar'
// It creates a navigation bar for a website

// The 'Navbar' needs two things to work properly:
// 1. A 'setMocktailsList' to create a list of drinks (mocktails)
// 2. A 'setShowModal' to control whether a form is shown
  
export default function Navbar({setMocktailsList, setShowModal}) {
// When someone clicks on a link or button, do something with the 'setMocktailsList' or 'setShowModal'   
  
  // It knows how to get drinks (mocktails) of a specific type
  const getMocktails = async (type) => {

  // (fetch request) to the api to give us the drinks of the specified type
  const respond = await fetch(`https://final-api-jg.web.app/mocktails/${type}`);
  // Wait for the response/reply from the api
  const data = await respond.json()
  // When the response arrives, it will take the information (data) and use the information to fill the list called 'MocktailsList'
  setMocktailsList(data)
  // Show the information 
  console.log(data) // print it to the console
  }

  // fetches a list of mocktails from an API.
  // The hook takes two arguments:
  // The first argument is a callback function that will be executed after the component renders.
  // The second argument is an array of dependencies. If any of the values in the array change, the callback function will be executed again.
  useEffect ( () => {
    getMocktails("")
  }, []) 


  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Sip Savvy Mocktails</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white">
            <button onClick={() => getMocktails("tart")} className="hover:text-sky-500">Tart</button>
          </a>
          <a className="mr-5 hover:text-white">
            <button onClick={() => getMocktails("dry")} className="hover:text-yellow-200">Dry</button>
          </a>
          <a className="mr-5 hover:text-white">
            <button onClick={() => getMocktails("sweet")} className="hover:text-pink-400">Sweet</button>
          </a>
          <a className="mr-5 hover:text-white">
            <button onClick={() => getMocktails("")}>All</button>
          </a>
        </nav>
        

        <div id="bottom-of-page">
        <button 
        onClick= {() => setShowModal(true)}
        // onClick event handler that is used to open a modal. The event handler takes a function as its argument, and this function is called when the button is clicked. The function in this case is setShowModal(true), which sets the showModal state variable to true. This tells the component that the modal should be opened.
        className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-pink-500">
          + Add Mocktail 
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        </div>

      </div>
    </header>
  );
}
  