import React from 'react'
import "./Courier.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    
  } from '@chakra-ui/react'
export const Courier = () => {
    fetch("http://localhost:4000/pins")
    .then((res)=> res.json())
    .then((data)=> { 
    console.log(data)  });
  return (<>
    <div>Courier</div>
    <h1> Enter the weight of Product</h1>
     
    
    <input type = "text" className='weight' />

    <Menu isLazy>
  <MenuButton style={{float:"left"}}>Open menu</MenuButton>
  <MenuList>
    {/* MenuItems are not rendered unless Menu is open */}
    <MenuItem>Forward</MenuItem>
    <MenuItem>Forward & RTO</MenuItem>
   
  </MenuList>
</Menu>
    
    <h1>Delivery Type</h1>
    <input type="text" className='pincode'/>
    <h1>Expected courier charge</h1>
    <input type="text"  className='pincode'/>
</>
  )
}
