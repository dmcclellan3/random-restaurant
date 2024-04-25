import { Link } from "react-router-dom"
import { useEffect, useState } from "react";


// const response = fetch('https://www.jsonkeeper.com/b/MDXW')
// console.log(response)
// response.then(data => console.log (data.json()))


const Title = () => {
  return (
    <h2>
      We got what you want
    </h2>
  )
}

function Food({item}){
  return(
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>{item.category}</p>
      <p className="text-end"><strong>${item.price}</strong></p>

    </div>
  )  
}

function App() {
  const [menuItems, setMenuItems] = useState([])
  const [appetizers, setAppetizers] = useState([])
  console.log(menuItems)
  useEffect(() => {
    async function getMenu() {
      const response = await fetch('https://www.jsonkeeper.com/b/MDXW');
      const allMenuItemsArray = await response.json();
      console.log('Menu Items Return: ', allMenuItemsArray)
      const americanFoodArray = allMenuItemsArray.filter(menuItem => menuItem.cuisine_type === 'American' || menuItem.cuisine_type === 'Mexican'|| menuItem.cuisine_type === 'Italian' || menuItem.category === 'breakfast')
      const americanFoodComponents = americanFoodArray.map(item =>  <Food item={item}/>)
      // const appetizersFoodArray = allMenuItemsArray.filter(menuItem => menuItem.category === 'Breakfast')
      // const appetizersFoodComponents = appetizersFoodArray.map(item => <Food item={item}/>)
      setMenuItems(americanFoodComponents)
      // setMenuItems(appetizersFoodComponents)
    }
    getMenu()
  }, [])
    
  return (
    <div className="p-5">
      {/* <Link to='/about'>About</Link> */}
      <Title />
      {menuItems}
    </div>
  )
}


export default App
