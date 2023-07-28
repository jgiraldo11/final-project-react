import { useCallback, useState } from "react"

export default function Cards({mocktailsList}) {

  // const [message, setMessage] = useState("Click a button above to get mocktails")
  
  // const getMocktails = async (type) => {
  //   setMessage(`Loading ${type} mocktails...`)
  //   //setMocktailsList()
  //   const response = await fetch(`http://127.0.0.1:5002/mocktails${type}`)
  //   const data = await response.json()
  //   setMocktailsList(data)
  // }

  return(
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Try Our Sip Savvy Mocktails</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover alcohol-free, flavorful & trendy recipes for a fun day or night out! No need to settle for water or soda at restaurants. Try these 15 delicious options that'll keep everyone happy all night.</p>
        </div>
      <div className="flex flex-wrap -m-4">
        {/* <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="images/dry/Lemongrass Jasmine Iced Tea.jpg"/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">THE SUBTITLE</h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">Shooting Stars</h1>
              <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            </div>
          </div>
        </div> */}
      {mocktailsList && 
      mocktailsList.map((drink, i) => (


      <div key={drink._id} className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img 
            alt="gallery" 
            className="absolute inset-0 w-full h-full object-cover object-center" 
            src={`/${drink.img}`} />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1 uppercase">{drink.type}</h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              {drink.name}</h1>
            <p className="leading-relaxed">
              {drink.ingredients}</p>
          </div>
          </div>
          </div>

      ))}
    </div>
  </div>
  </section>
  );
}