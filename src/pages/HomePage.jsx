import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomColor } from "../lib/utils";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setError(null); // Reset errors
    setRecipes([]);

    const options = {
      method: "POST",
      url: "https://recipe-generator-create-custom-recipes-from-your-ingredients.p.rapidapi.com/recipe",
      headers: {
        "x-rapidapi-key": "6810f41d95mshaafa795a18fbb35p1f270fjsnb0e2400be9a5", 
        "x-rapidapi-host": "recipe-generator-create-custom-recipes-from-your-ingredients.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        ingredients: searchQuery,
        strict: 2,
        diet: "vegan",
      },
    };

    try {
      const response = await axios.request(options);
      setRecipes(response.data.recipes); 
      console.log(response.data); 
    } catch (error) {
      if (error.response) {
        if (error.response.status === 429) {
          setError("You have hit the API rate limit. Please try again later.");
          console.log("Error 429: Too many requests.");
        } else if (error.response.status === 403) {
          setError("Forbidden: Your API key might be invalid or you don't have permission to access this endpoint.");
          console.log("Error 403: Forbidden.");
        } else {
          setError("An error occurred while fetching recipes.");
        }
      } else {
        setError("Network error: Unable to reach the server.");
      }
      console.error("Error fetching recipes:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("two potatoes and one carrot also 100ml of coconut cream"); 
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value); 
  };

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular choices</p>

       
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                title={recipe.title}
                image={recipe.image}
                {...getRandomColor()}
              />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
