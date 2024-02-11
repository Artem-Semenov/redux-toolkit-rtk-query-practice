import { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

export const CreateRecipe = () => {
  const initialState = {
    name: "",
    image: "",
  };

  const [recipe, setRecipe] = useState(initialState);

  const [createRecipe, result] = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
    createRecipe(recipe).then(() => {
      setRecipe(initialState);
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <button type="submit">create</button>
      </form>
    </div>
  );
};
