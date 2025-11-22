import { useFavorites } from "../context/FavoriteContext"
import {Link} from "react-router-dom"

function FavoriteList(){
    const {favorites,removeFavorite}=useFavorites()
    if (favorites.length===0) return <p> Favorite list is Empty. Browse to add your Favorite recipe.</p>
    
    return(
        <>
        <h2>Favorites List</h2>
        {favorites.map(recipe=>(
            <div key={recipe.idMeal} style={{marginBottom: "10px"}}>

                {/* creates a clickable link to the recipe detail page */}
                <Link to ={`/recipe/${recipe.idMeal}`}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} width="100"/>
                <span>{recipe.strMeal}</span>
                </Link>
                \<button onClick={()=>removeFavorite(recipe.idMeal)}>Remove</button>
            </div>
        )
        )}
        </>
    )
}

export default FavoriteList