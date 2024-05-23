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
      <h3>{item.name}</h3>
      <p><em>{item.description}</em></p>
      <p><strong>${item.price}</strong></p>
      <div id="item-borders"></div>
    </div>
  )  
}
//Main app
function App() {
  const [menuItems, setMenuItems] = useState([]) //Effect hook to fetch menu items when the component forms
  const [appetizers, setAppetizers] = useState([])
  console.log(menuItems)
  useEffect(() => {
    async function getMenu() { //fetching items from API 
      const response = await fetch('http://127.0.0.1:8000/menuitems/');
      const allMenuItemsArray = await response.json();
      setMenuItems(allMenuItemsArray)
      // foodComponents()
      // const allAppetizersArray = allMenuItemsArray.filter(menuItem => menuItem.category_name === 'Appetizer')
      // console.log('Menu Items Return: ', allMenuItemsArray)
      // const anArrayOfFoodComponents = allMenuItemsArray.map(item =>  <Food key={item.id} item={item}/>)
      // setMenuItems(anArrayOfFoodComponents) //Setting the menu items to state variable 
      // const appetizerComponents = allAppetizersArray.map(menuItem => <Food key={}/>)
    }
    getMenu()
  }, [])


  const FoodComponents = ({categoryName}) => {
    const foodArray = menuItems.filter(item => item.category_name === categoryName);
    console.log(foodArray)
    return foodArray.map(item => <Food item={item} key={item.id}/>)
  };  

    
  // {menuItems.filter(menuItem =>  menuItem.category_name === 'Appetizer')}
  return (
    <div className="p-5">
      <Title
      section = {'Appetizers'} />
      <FoodComponents categoryName={'Appetizers'}/>
      {/* {menuItems} */}
      <p className='d-flex justify-content-right'><em>Ask your server about rotating drafts</em></p>
      <div id='menu-layout'>
          <div id="appetizer-layout">
          {/* || Logical OR/ && Logical AND/ OR returns true if at least one operand returns true   */}
          {/* Logical AND returns true if both operands are true */}
        </div>
        
          <Title section = {'Lunch'} />
          <FoodComponents categoryName={'Lunch'}/>
      
          <Title section = {'Dinner'} />
          <FoodComponents categoryName={'Dinner'}/>
          
      </div>
    </div>
  )
}


export default App
