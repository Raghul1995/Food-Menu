import './App.css';
import React, {useState} from 'react'
import menu from "./components/ItemsData"
import MenuItems from './components/MenuItems';
import Categories from "./components/Categories"

const uniqCat =  ["all", ...new Set(menu.map(menuList => menuList.category))] // new Set method to get the unique value and use map function to get the category.
function App() {

  const [newMenu, setNewMenu] = useState(menu); // we get the menu here and then destrucuture the items in the menuItems
  const [categories, setCategories] = useState(uniqCat) // we get "uniqcat" to get all the unique value even when the state is updated, or we can have an empty array and update the catogeries manually wverytime the state updates.

  const filterItems=(category)=>{

    if(category === "all"){ // condition to display all the items in the menu
      return setNewMenu(menu) 
    }
    const newItems = menu.filter(menCategory => menCategory.category === category ) // filter items from the menu based on catogry from meny compnent
    setNewMenu(newItems)
  }
  return (
    <main>
      <div className="menu section">
        <div className="title">
          <MenuItems items = {newMenu}/>
          <Categories categories={categories} filterItems={filterItems}/>
        </div>
      </div>
    </main>
  )
}

export default App

