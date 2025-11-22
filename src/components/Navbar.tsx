import {useState} from "react"
import { useNavigate } from "react-router-dom"

function Navbar(){
    const [query,setQuery]=useState("")
    const navigate=useNavigate()

    const handleSubmit= (e)=>{
        e.preventDefault()
        if(query.trim()!=""){
            navigate(`/search?query=${query}`)
            setQuery("")
        }
    }

    return(
        <nav>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for recipes" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </nav>
    )
}
export default Navbar