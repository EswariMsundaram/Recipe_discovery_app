import { useContext } from "react"
import { FavoriteContext } from "../context/FavoriteContext"

function FavoriteList(){
    const favorites=useContext(FavoriteContext)
    console.log(favorites)
    return(
        <>
        <h2>Favorites List</h2>
        {favorites.length===0 && <p>No favorites yet...:</p>}
        </>
    )
}

export default FavoriteList