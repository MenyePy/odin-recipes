import { useState } from "react";
import RecipeList from "./RecipeList";
const Home = () => {
    const [recipes, setRecipe] = useState([
        {title: "Bread", body: "Lorem Ipsum...", author: "Menye", id:1}
    ]);
    return ( 
        <div className="home">
            <RecipeList recipes={recipes} />
        </div>
     );
}
 
export default Home;