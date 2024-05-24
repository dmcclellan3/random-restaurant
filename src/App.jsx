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
  console.log(menuItems)
  useEffect(() => {
    async function getMenu() { //fetching items from API 
      const response = await fetch('http://127.0.0.1:8000/menuitems/');
      const allMenuItemsArray = await response.json();
      setMenuItems(allMenuItemsArray)
      
    }
    getMenu()
  }, [])


  const FoodComponents = ({categoryName}) => {
    const foodArray = menuItems.filter(item => item.category_name === categoryName);
    console.log(foodArray)
    return foodArray.map(item => <Food item={item} key={item.id}/>)
  };  

    
  return (
    <div className="p-5" id='food-item'>
      <div id='menu-layout'>
      <Title section = {'Appetizers'} />
      <p><em>Ask your server about rotating drafts</em></p>
      <div id='appetizer-layout'>
      <FoodComponents categoryName={'Appetizers'}/>
      </div>
      <br />
          <Title section = {'Lunch'} />
        <div id='lunch-layout'>
          <FoodComponents categoryName={'Lunch'}/>
        </div>
          <Title section = {'Dinner'} />
        <div id='dinner-layout'>
          <FoodComponents categoryName={'Dinner'}/>
        </div>

      </div>
    </div>
  )
}


export default App
