import { useState, useEffect, useRef } from "react"
import { fadeSlideAnimation } from "./Header"
export default function Coffees() {
    const [coffeeList, setCoffeeList] = useState()
    const [message, setMessage] = useState('Click a button above to get coffees')
    const [allCoffeeChecked, setAllCoffeeChecked] = useState(false)
    const [hotCoffeeChecked, setHotCoffeeChecked] = useState(false)
    const [icedCoffeeChecked, setIcedCoffeeChecked] = useState(false)
    const elementRef = useRef(null)
    const getCoffee = async (type) => {
        if (type === "hot") {
            /*
            If it looks like this [] all [x]hot [] iced
            then exit the function. We already have the hot coffee.
            no need to fetch again
            */
            if (hotCoffeeChecked && !allCoffeeChecked) return
            setHotCoffeeChecked(true)
            setIcedCoffeeChecked(false)
        } else {
            if (icedCoffeeChecked && !allCoffeeChecked) return
            setHotCoffeeChecked(false)
            setIcedCoffeeChecked(true)
        }
        setAllCoffeeChecked(false)
        setMessage(`Loading ${type} coffees...`)
        //setCoffeeList()
        const response = await fetch(`https://api.sampleapis.com/coffee/${type}`);
        const data = await response.json()
        setCoffeeList(data)
    }
    const getAllCoffee = async () => {
        if (allCoffeeChecked) return
        setAllCoffeeChecked(true)
        setHotCoffeeChecked(false)
        setIcedCoffeeChecked(false)
        setMessage(`Loading coffees...`)
        const respond = await fetch(`https://api.sampleapis.com/coffee/hot`);
        const data = await respond.json()
        const respond2 = await fetch(`https://api.sampleapis.com/coffee/iced`);
        const data2 = await respond2.json()
        setCoffeeList([...data, ...data2])
    }
    useEffect(
        () => {
            !coffeeList && getAllCoffee()
            fadeSlideAnimation(elementRef)
        },
        // eslint-disable-next-line
        []
    )
    //^ automatically getAllCoffee generated when clicking on menu.
    return (
        <main className="main-container scroll-animation" ref={elementRef}>
            <div className="button-container" ref={elementRef}>
                <h3>Our Coffee</h3>
                <h2 className="menu">Menu</h2>
                <div className="coffee-select-btns">
                    <button className={`${allCoffeeChecked ? 'is-checked' : 'button-all'} w-inline-block w--current`} type="checkbox" onClick={() => getAllCoffee('all')}>All</button>
                    <hr />
                    <button className={`${hotCoffeeChecked ? 'is-checked' : 'button-hot'} w-inline-block w--current`} type="checkbox" onClick={() => getCoffee('hot')}>Hot</button>
                    <button className={`${icedCoffeeChecked ? 'is-checked' : 'button-iced'} w-inline-block w--current`} type="checkbox" onClick={() => getCoffee('iced')}>Iced</button>
                </div>
            </div>
            <div className="coffee-list">
                {!coffeeList //if coffee list is undefined
                    ? <p className="message">{message}</p> //then
                    //:<p>Coffee List</p>//otherwise
                    : coffeeList.map((coffee, i) => (
                        <div key={`coffee-card-${i}`} className="coffeeCard">
                            <div className="coffeeCardImage"
                                style={{ backgroundImage: `url(${coffee.image})` }}
                            />
                            <h2>{coffee.title}</h2>
                            {/* <p>{coffee.description}</p> */}
                            {<ul>
                                {
                                    coffee?.ingredients?.map((ing, i) => (
                                        <li key={`coffee-ing-${i}`}
                                        // style={{listStyle: 'none'}}
                                        >{ing}</li>
                                    ))
                                }
                            </ul>}
                        </div>
                    ))
                }
            </div>
        </main >
    )
}