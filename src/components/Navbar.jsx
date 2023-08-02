import { useEffect } from "react";

export default function Navbar({setMocktailsList, setShowModal}) {
  
  // const [message, setMessage] = useState("Click a button above to get mocktails")
  
  const getMocktails = async (type) => {
  const respond = await fetch(`https://final-api-jg.web.app/mocktails/${type}`);
  const data = await respond.json()
  setMocktailsList(data)
  console.log(data)
  }

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
  