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


function App() {
  let [menuItems, setMenuItems] = useState([])
  console.log(menuItems)
  useEffect(() => {
    async function getMenu() {
      const response = await fetch('https://www.jsonkeeper.com/b/MDXW');
      const menuItemsReturn = await response.json();
      console.log('Menu Items Return: ', menuItemsReturn)
      setMenuItems(menuItemsReturn.map(item => ( 
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p className="text-end"><strong>{item.price}</strong></p>
        </div>
      )))
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
