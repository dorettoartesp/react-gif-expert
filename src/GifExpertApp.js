import { useState, useEffect } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"


const GifExpertApp = () => {

    
    const [categories,setCategories] = useState([
        'One punch',
        'Samurai X',
        'Dragon Ball',
        'Remind me',
    ])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <div className="grid">
                {categories.map(cat => (
                    <GifGrid key={cat} category={cat} />
                ))}
            </div>
        </>
    )
}

export default GifExpertApp