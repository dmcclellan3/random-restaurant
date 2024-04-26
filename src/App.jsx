import { Link } from "react-router-dom"
import { useEffect, useState } from "react";


const Title = ({section}) => {
  return (
    <h2 className="d-flex justify-content-center mt-5 mb-4">
      {section}
    </h2>
  )
}

function Food({item}){
  return(
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p><em>{item.description}</em></p>
      <p><strong>${item.price}</strong></p>
      <div id="item-borders"></div>
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
      allMenuItemsArray.map(item =>  <Food item={item}/>)
      setMenuItems(allMenuItemsArray)
      
    }
    getMenu()
  }, [])
    
  return (
    <div className="p-5">
      {/* <Link to='/about'>About</Link> */}
      <Title
      section = {'Appetizers'} />
      <div id='menu-layout'>
        <div id="appetizer-layout">
          {menuItems.filter(menuItem =>  menuItem.category === 'Appetizer' || menuItem.cuisine_type === "American" && menuItem.cuisine_type === "Mexican").map(item =>  <Food item={item}/>)}

        </div>
        
          <Title section = {'Lunch'} />
          
        <div id="lunch-layout">
          {menuItems.filter(menuItem =>  menuItem.category === 'Lunch' || menuItem.cuisine_type === "American" && menuItem.cuisine_type === "Mexican").map(item =>  <Food item={item}/>)}
        </div>
          <Title section = {'Dinner'} />
        <div id="dinner-layout">
          {menuItems.filter(menuItem =>  menuItem.category === 'Dinner' || menuItem.cuisine_type === "American" && menuItem.cuisine_type === "Mexican").map(item =>  <Food item={item}/>)}
        </div>
      </div>
    </div>
  )
}


export default App
