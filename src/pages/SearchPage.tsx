import { useEffect,useState } from "react";
import { useLocation, Link } from "react-router-dom";

function useQuery(){
    return new URLSearchParams(useLocation().search)
}
function SearchPage(){
    const query=useQuery()
    const searchTerm=query.get("query")||""
    const[results,setResults]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        const fetchResults=async()=>{
            if(!searchTerm) return;
            try{
                setLoading(true)
                const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
                const data=await response.json()
                setResults(data.meals||[])
            
            }catch(error){
                console.error(error);
            }finally{
                setLoading(false)
            }
        }
        fetchResults()
    },[searchTerm])

    if(loading) return <h2>Loading search results...</h2>
    if(!results.length)return <p>No results found for "{searchTerm}"</p>

    return(
        <div>
            <h2>Search results for "{searchTerm}"</h2>
            {
                results.map(recipe=>(
                    <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
                        <h3>{recipe.strMeal}</h3>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} width="150"/>
                    </Link>
                ))
            }
        </div>
    )
}

export default SearchPage;