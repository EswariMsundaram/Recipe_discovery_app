import { useEffect , useState} from "react"
import { useParams } from "react-router-dom"
import {FavoriteContext} from "/Users/eswar/Desktop/2025-rtt-54/mod10/recipe-discovery-app/src/context/FavoriteContext.tsx"

function RecipeDetailsPage(){

    // const {addFavorite} 
    const {idMeal}=useParams()
    const [recipe,setRecipe]=useState(null)
    useEffect(()=>{
        const fetchRecipe= async()=>{
            try{
                const response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
                const data=await response.json()
                console.log(data)
                setRecipe(data.meals[0])
            }catch(error){
                console.error(error)
            }
        }
        fetchRecipe()
    },[idMeal])

    if(!recipe) return <h2>Loading Recipe...</h2>
    return(
        <>
        <h3>{recipe.strMeal}</h3>
        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
        <h3>Instructions</h3>
        {Object.keys(recipe)
        .filter(key=>key.startsWith("strIngredient")&& recipe[key]).map((key,index)=>{
            console.log(recipe[`strMeasure ${index}`])
            const ingredient=recipe[key]
            const measure=recipe[`strMeasure ${index+1}`]
            return<li>{ingredient} - {measure}</li>
        })}
        <p>{recipe.strInstructions}</p>
        <button onClick={()=>addFavorite(recipe.idMeal)}>Add to Favorites</button>
        </>
    )
}

export default RecipeDetailsPage