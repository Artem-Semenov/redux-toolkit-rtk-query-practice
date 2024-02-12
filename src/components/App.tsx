import { useState } from "react";
import { useGetRecipesQuery } from "../store/api/api";
import { CreateRecipe } from "./createRecipe/CreateRecipe";
import { Header } from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
import User from "./user/user";

const userId = 1;

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [queryTerm, setQueryTerm] = useState<string>("");

  const { isLoading, data } = useGetRecipesQuery(
    queryTerm /* , {
    skip: !userId,
  } */
  );

  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };

  return (
    <section>
      <Header />
      {/* <User /> */}
      <CreateRecipe />
      <div style={{ padding: 10 }}>
        <p>Try to find by name</p>
        <input
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>search</button>
      </div>
      <div>
        {isLoading
          ? "Loading items..."
          : data
          ? data.map((el) => <RecipeItem recipe={el} key={el.id} />)
          : "no items found"}
      </div>
    </section>
  );
}

export default App;
