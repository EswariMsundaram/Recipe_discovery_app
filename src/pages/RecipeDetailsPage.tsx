import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { useFavorites } from "../context/FavoriteContext"


function RecipeDetailsPage(){
    const {idMeal}=useParams()
    const {addFavorite, removeFavorite, isFavorite}=useFavorites() 
   const [recipe,setRecipe]=useState(null)
   const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const fetchRecipe= async()=>{
            try{
                setLoading(true)
                const response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)

                const data=await response.json()
                setRecipe(data.meals[0])
            }catch(error){
                console.error(error)
            }finally{
                setLoading(false)
            }
        }
        fetchRecipe()
    },[idMeal])

    if(loading) return <h2>Loading Recipe...</h2>
    if(!recipe) return <h2>Recipe not found</h2>

    //Extract ingredients and measures
    const ingredients = []
    for(let i=1;i<=20;i++){
        const ingredient=recipe[`strIngredient${i}`]
        const measure=recipe[`strMeasure${i}`]

        //Add only if not empty
        if(ingredient && ingredient.trim()!==""){
            ingredients.push(`${ingredient} - ${measure}`)
        }
    }

    return(
        <>
        <h3>{recipe.strMeal}</h3>
        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
        <h3>Ingredients</h3>
        <ul>
            {ingredients.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        <h3>Instructions</h3>
        <p>{recipe.strInstructions}</p>
        <button onClick={()=>
            isFavorite(recipe.idMeal) ?
            removeFavorite(recipe.idMeal) :
            addFavorite({idMeal:recipe.idMeal, strMeal: recipe.strMeal, strMealThumb: recipe.strMealThumb})} 
        >
            {isFavorite(recipe.idMeal)?"Remove from Favorites" : "Add to Favorites"}
        </button>
        </>
    )
}

export default RecipeDetailsPage