import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const response = fetch('https://www.jsonkeeper.com/b/MDXW')
// console.log(response)
// response.then(data => console.log (data.json()))


const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}


function App() {
  let [menuItems, setMenuItems] = useState([])
  console.log(menuItems)
  useEffect(() => {
    async function getMenu() {
      const response = await fetch('https://www.jsonkeeper.com/b/MDXW');
      const menuItemsReturn = await response.json();
      setMenuItems(menuItemsReturn.map(item => ( 
        <p key={item.id}>{item.title}</p> 
        )))
      }
      getMenu()
    }, [])
    
    return (
      <div className="p-5">
        <Link to='/about'>About</Link>
        <Title />
        {menuItems}
      </div>
    );
    }
    
export default App
