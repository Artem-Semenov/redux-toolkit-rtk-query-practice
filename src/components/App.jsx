import { useGetRecipesQuery } from "../store/api/api";
import { Header } from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";
import User from "./user/user";

function App() {
  const { isLoading, data } = useGetRecipesQuery();
  console.log(isLoading, data);
  return (
    <section>
      <Header />
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
