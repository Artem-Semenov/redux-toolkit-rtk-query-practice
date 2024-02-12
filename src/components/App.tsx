import { useGetRecipesQuery } from "../store/api/api";
import { CreateRecipe } from "./createRecipe/CreateRecipe";
import { Header } from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
import User from "./user/user";

const userId = 1;

function App() {
  const { isLoading, data } = useGetRecipesQuery(null, {
    skip: !userId,
  });

  console.log(isLoading, data);
  return (
    <section>
      <Header />
      <CreateRecipe />
      {/* <User /> */}
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
