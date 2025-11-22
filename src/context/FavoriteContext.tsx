import { createContext,useContext}from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const FavoriteContext=createContext()// creating a new context object contains <FavoriteContext.Provider> and useContext(FavoriteContext)

export function FavoritesProvider({children}){
    const[favorites,setFavorites]=useLocalStorage("favorites",[])

    //add a favorite
    function addFavorite(recipe){
        if(!favorites.find(fav=>fav.idMeal===recipe.idMeal)){
             setFavorites([...favorites,recipe])
        }
    }

    //remove a favorite
    function removeFavorite(idMeal){
        setFavorites(favorites.filter(fav=>fav.idMeal!==idMeal))
     }
    // // is it a favorite
     function isFavorite(idMeal){
        return favorites.some(fav=>fav.idMeal===idMeal)
     }

    return(
        <FavoriteContext.Provider value={{favorites, addFavorite,removeFavorite,isFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}


export function useFavorites(){
    return useContext(FavoriteContext)//returns the data of what FavoriteContext Provider shares
}