import { Link } from "react-router-dom"
import { useEffect, useState } from "react";


const Title = () => {
  return (
    <h2 className="d-flex justify-content-center">
      Appetizers
    </h2>
  )
}

function Food({item}){
  return(
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {/* <p>{item.category}</p> */}
      <p className="text-end" id="price"><strong>${item.price}</strong></p>

    </div>
  )  
}

function App() {
  const [menuItems, setMenuItems] = useState([])
  console.log(menuItems)
  useEffect(() => {
    async function getMenu() {
      const response = await fetch('https://www.jsonkeeper.com/b/MDXW');
      const allMenuItemsArray = await response.json();
      console.log('Menu Items Return: ', allMenuItemsArray)
      const appetizerFoodComponents = allMenuItemsArray.map(item =>  <Food item={item}/>)
      setMenuItems(allMenuItemsArray)
      
    }
    getMenu()
  }, [])
    
  return (
    <div className="p-5">
      {/* <Link to='/about'>About</Link> */}
      <Title />
      <div id='menu-layout'>
        <br />
        <div>
          {menuItems.filter(menuItem =>  menuItem.category === 'Appetizer' || menuItem.cuisine_type === "American" && menuItem.cuisine_type === "Mexican").map(item =>  <Food item={item}/>)}
          <h2 className="d-flex justify-content-center">Lunch</h2>
        </div>
        <br />
        <div id="lunch-layout">
          {menuItems.filter(menuItem =>  menuItem.category === 'Lunch' || menuItem.cuisine_type === "American" && menuItem.cuisine_type === "Mexican").map(item =>  <Food item={item}/>)}
        </div>
        <br />
        <div>
          <h2 className="d-flex justify-content-center">Dinner</h2>
          {menuItems.filter(menuItem =>  menuItem.category === 'Dinner' || menuItem.cuisine_type === "American" && menuItem.cuisine_type === "Mexican").map(item =>  <Food item={item}/>)}
        </div>
      </div>
    </div>
  )
}


export default App
