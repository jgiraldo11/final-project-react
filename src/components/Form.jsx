// This is a (function) to create a form 'setMocktailsList'
// It needs something called 'setMocktailsList' to work properly.
export default function Form({ setMocktailsList }) {

  // This is a (function) to add a new drink 
  // It needs (event 'e') to work
  const addNewMocktail = (e) => {
    e.preventDefault();
    // Stop doing anything else while we make this drink (prevent the usual behavior)
    // (e.g., don't let the page refresh when you click a button)
    
    let typeChecked = "";
    // Prepare a section called 'typeChecked' for the new drink
    // We'll fill it later with the right type of mocktail
    
    console.log(e.target.option1.checked);
    // Listen and pay attention to what the person does (event 'e')
    // When they do something (like clicking a checkbox or button), check if 'option_' is checked (selected)
    // If 'option_' is checked (selected), fill the empty drink type called 'typeChecked' with 'type selected'
    // Show the contents of the drink type 'typeChecked' to everyone (print its value)
    if (e.target.option1.checked) {
      typeChecked = "sweet";
    }
    if (e.target.option2.checked) {
      typeChecked = "dry";
    }
    if (e.target.option3.checked) {
      typeChecked = "tart";
    }

    console.log({ typeChecked });

    const newMocktail = {
      name: e.target.name.value,
      recipe: e.target.recipe.value,
      img: e.target.image.value,
      type: typeChecked,
      ingredients: e.target.ingredients.value,
      // Get the name, recipe, image, and ingrediants of the new drink from the person (input field '')
      // Fill the 'type' of the new drink with 'typeChecked'
      // Get the ingredients of the new drink (input field 'ingredients')
      // Store all the gathered information in the 'newMocktail'
      // The 'newMocktail will have the name, recipe, image, type, and ingredients of the new drink 
    };

    // Send a request to api
    // API knows how to handle new drink request
    // So, we tell the api that we want to 'POST' (make) a new one
    fetch("https://final-api-jg.web.app/mocktails", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // We say that the message is in a special language called 'JSON' and include the 'newMocktail'
        // The api needs to know how to understand the message
        // So, we include a note (header) saying the message is in the 'application/json' format
      },
      body: JSON.stringify(newMocktail),
      // Now, we send the message to the api and wait for it to do its magic
      // The api will take the information from the 'newMocktail' and make the new drink 
    })

      // Wait for a response from api after sending a request
      // When the response arrives, take the information from the response (data)
      // and use it to fill a list called 'MocktailsList'
      // This list will now have all the drinks the api knows about
      // If something goes wrong (an error happens), then show an alert message
      .then((response) => response.json())
      .then((data) => setMocktailsList(data))
      .catch(alert)
      .finally(() => {
        e.target.name.value = "";
        e.target.recipe.value = "";
        e.target.image.value = "";
        e.target.option1.checked = false;
        e.target.option2.checked = false;
        e.target.option3.checked = false;
        e.target.ingredients.value = "";
        // No matter what happens, make sure to do the following things at the end:
        // - Empty the '' input field
        // - Uncheck the 'option_' checkbox
        // It's like cleaning up after making a new drink and getting everything ready for the next one
      });
  };

  return (
    <section className="text-gray-400 bg-gray-800 body-font">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              "✨Welcome to our Sip Savvy Drink Library! Where delightful
              flavors are never-ending.✨"
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600">
                Add your creative drink here to join our wonderful collection 🍹
              </a>

              <p className="mt-2 not-italic">
                Sip, savor, and let your imagination flow! 😊💕
              </p>

              <br></br>

              <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF5ZnhncjBpb2ZiZHYzeHg3ZjJ4dmIwdTJ4c2NqNnY4Ym9neHprMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuvr7aX6JMlN28/giphy.gif" />
            </div>
          </div>

          <div
            className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
            id="mocktail-form"
          >
            <form onSubmit={addNewMocktail} className="space-y-4">
              {/*  This is like a special piece of paper (form) where we can create a new pretend drink (mocktail) 
          When someone fills out the form and clicks a special button (submit),we want to do something special (onSubmit) and make a new pretend drink (mocktail)
          So, we have a special recipe (function) called 'addNewMocktail'
          This recipe knows how to take the information from the form and create a new pretend drink (mocktail)
          We tell the form to listen and watch for someone to click the special button (submit)
          When that happens, we'll use the 'addNewMocktail' recipe to make the new pretend drink (mocktail)
          It's like saying, "Hey, form, when the button is clicked, please follow the 'addNewMocktail' recipe to create a new drink for us!" */}
              <div>
                <label className="sr-only" htmlFor="name">
                  Mocktail Name:
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Mocktail Name"
                  type="text"
                  id="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Ingredients:
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Ingredients"
                    type="text"
                    id="ingredients"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="peer sr-only"
                    id="option1"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option1"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> 🍓 Sweet </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option2"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option2"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> 🍋 Dry </span>
                  </label>
                </div>

                <div>
                  <input
                    className="peer sr-only"
                    id="option3"
                    type="radio"
                    tabIndex="-1"
                    name="option"
                  />

                  <label
                    htmlFor="option3"
                    className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                    tabIndex="0"
                  >
                    <span className="text-sm"> 🫐 Tart </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Recipe
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Recipe"
                  rows="8"
                  id="recipe"
                  required
                ></textarea>
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Image:
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Image:"
                  type="text"
                  id="image"
                  required
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  🍹 Add Mocktail
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
