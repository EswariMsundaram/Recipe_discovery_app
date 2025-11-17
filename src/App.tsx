
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import RecipeDetailsPage from './pages/RecipeDetailsPage'
function App() {
 

  return (
    <>
      <h1>Recipe App</h1>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:categoryName' element={<CategoryPage/>}/>
        <Route path='/recipe/:idMeal' element={<RecipeDetailsPage/>}/>
      </Routes>
    </>
  )
}

export default App
