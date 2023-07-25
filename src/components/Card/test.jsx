import { useEffect, useState } from "react"

export default function Test() {
const [data, setData] = useState()

useEffect(() => {
  fetch("http://127.0.0.1:5002/mocktails") // this is getting info from api "mocktails"
  .then(res => res.json())
  .then(setData)
  .catch(err => alert(err.message))
  .finally(console.log(data)) 
}, [])

  return (
    <>
    {!data
    ? <p>hello</p>
    : data.map((info) => (
      <>
      <img src={info.img} />
      <p>{info.name}</p>
      </>
    ))
}
    </>
  )
}