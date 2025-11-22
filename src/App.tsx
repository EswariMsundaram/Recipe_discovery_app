
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import RecipeDetailsPage from './pages/RecipeDetailsPage'
import { FavoritesProvider } from './context/FavoriteContext'
import Navbar from './components/Navbar'
import SearchPage from './pages/SearchPage'
function App() {
 

  return (
    <FavoritesProvider>
      <Navbar/>
      <h1>Recipe App</h1>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/category/:categoryName' element={<CategoryPage/>}/>
        <Route path='/recipe/:idMeal' element={<RecipeDetailsPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </FavoritesProvider>
  )
}

export default App
