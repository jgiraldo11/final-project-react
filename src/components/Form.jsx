{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

export default function Form() {

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

          <address className="mt-2 not-italic">
          Sip, savor, and let your imagination flow! 😊💕"          </address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Mocktail Name:</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Mocktail Name"
              type="text"
              id="Mocktail Name:"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Ingredients:</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Ingredients:"
                type="text"
                id="Ingredients:"
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
              placeholder="Recipe:"
              rows="8"
              id="message"
            ></textarea>
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

