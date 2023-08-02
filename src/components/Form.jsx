
export default function Form({setMocktailsList}) {


const addNewMocktail = (e) => {
  e.preventDefault()
let typeChecked = ''
console.log(e.target.option1.checked)
if (e.target.option1.checked){
typeChecked = 'sweet'
}
if (e.target.option2.checked){
  typeChecked = 'dry'
}
if (e.target.option3.checked){
  typeChecked = 'tart'
}
console.log({typeChecked})
const newMocktail = {
  name: e.target.name.value,
  recipe: e.target.recipe.value,
  img: e.target.image.value,
  type: typeChecked,
  ingredients: e.target.ingredients.value,
}
fetch('https://final-api-jg.web.app/mocktails', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(newMocktail)
})
.then(response => response.json())
      .then(data => setMocktailsList(data))
      .catch(alert)
      .finally(() => {
        e.target.name.value = ''
        e.target.recipe.value = ''
        e.target.image.value = ''
        e.target.option1.checked = false
        e.target.option2.checked = false
        e.target.option3.checked = false
        e.target.ingredients.value = ''
      })

}

return (
    
<section className="text-gray-400 bg-gray-800 body-font">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        "✨Welcome to our Sip Savvy Drink Library! 
        Where delightful flavors are never-ending.✨"
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-pink-600">
          Add your creative drink here to join our wonderful collection 🍹
          </a>

          <p className="mt-2 not-italic">
          Sip, savor, and let your imagination flow! 😊💕 </p>
          <br></br>
          <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTF5ZnhncjBpb2ZiZHYzeHg3ZjJ4dmIwdTJ4c2NqNnY4Ym9neHprMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRuvr7aX6JMlN28/giphy.gif"/>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12" id="mocktail-form">
        <form onSubmit={addNewMocktail} className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Mocktail Name:</label>
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
              <label className="sr-only" htmlFor="email">Ingredients:</label>
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
            <label className="sr-only" htmlFor="message">Recipe</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Recipe"
              rows="8"
              id="recipe"
              required
            ></textarea>
          </div>

          <div>
          <label className="sr-only" htmlFor="email">Image:</label>
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
  )
}

