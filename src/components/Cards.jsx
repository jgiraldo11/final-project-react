import { useCallback, useState } from "react";

// It knows how to create cards to show drinks 
// It needs something called 'mocktailsList' to work
// 'mocktailsList' is a list of all the drinks we want to show
export default function Cards({ mocktailsList }) {
    // The code inside this function will run when we use 'Cards'
    // - Create a special card and fill it with the information about the drink
    // - Show the special card to everyone so they can see the drink

  return (
    // className is an attribute used to apply CSS classes 
    <section className="text-gray-400 bg-gray-900 body-font h-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Try Our Sip Savvy Mocktails
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover alcohol-free, flavorful & trendy recipes for a fun day or
            night out! No need to settle for water or soda at restaurants. Try
            these 15 delicious options that'll keep everyone happy all night.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">

          {/* Check if we have a list of drinks */}
          {mocktailsList && // If we have the list of drinks,then for each drink in the list, do the following:
            mocktailsList.map((drink, i) => ( 
            // Get the information about the current drink. Show the information about the current drink. 
            // Then, move to the next drink in the list and repeat the process
               
              <div key={drink._id} className="lg:w-1/3 sm:w-1/2 p-4"> 
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute  max-h-[300px] min-h-[300px] inset-0 w-full h-full object-cover object-center drink-image"
                    src={`${drink.img}`} // this is a prop.
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1 uppercase">
                      {drink.type} 
                      {/* this is a prop */}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {drink.name}
                      {/* this is a prop */}
                    </h1>
                    <h2>INGREDIENTS: </h2>
                    <ul>
                      <li className="leading-relaxed">{drink.ingredients}</li> {/* this is a prop */}
                    </ul>
                    <h2>RECIPE: </h2>
                    <p className="leading-relaxed">{drink.recipe}</p> {/* this is a prop */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
