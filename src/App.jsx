import RecipeItem from "./recipe-item/RecipeItem";

function App() {
  return (
    <div>
      <RecipeItem
        recipe={{
          id: 1,
          name: "lazanya",
        }}
      ></RecipeItem>
      <RecipeItem
        recipe={{
          id: 2,
          name: "plov",
        }}
      ></RecipeItem>
      <RecipeItem
        recipe={{
          id: 3,
          name: "borsh",
        }}
      ></RecipeItem>
      <RecipeItem
        recipe={{
          id: 4,
          name: "sushi",
        }}
      ></RecipeItem>
    </div>
  );
}

export default App;
