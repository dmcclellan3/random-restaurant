import { useEffect, useState } from "react";

//Title rendering
const Title = ({section}) => {
  return (
    <h2 className="d-flex justify-content-center mt-5 mb-4">
      {section}
    </h2>
  )
}
//Component for rendering food items/details
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
//Main app
function App() {
  const [menuItems, setMenuItems] = useState([]) //Effect hook to fetch menu items when the component forms
  console.log(menuItems)
  useEffect(() => {
    async function getMenu() { //fetching items from API 
      const response = await fetch('https://www.jsonkeeper.com/b/MDXW');
      const allMenuItemsArray = await response.json();
      console.log('Menu Items Return: ', allMenuItemsArray)
      allMenuItemsArray.map(item =>  <Food item={item}/>)
      setMenuItems(allMenuItemsArray) //Setting the menu items to state variable 
      
    }
    getMenu()
  }, [])
    
  return (
    <div className="p-5">
      <Title
      section = {'Appetizers'} />
      <div id='menu-layout'>
          <div id="appetizer-layout">
          {menuItems.filter(menuItem =>  menuItem.category === 'Appetizer' || menuItem.cuisine_type === "American" && menuItem.cuisine_type === "Mexican").map(item =>  <Food item={item}/>)}
          {/* || Logical OR/ && Logical AND/ OR returns true if at least one operand returns true   */}
          {/* Logical AND returns true if both operands are true */}
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
