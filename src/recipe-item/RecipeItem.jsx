import styles from "./RecipeItem.module.css";

const RecipeItem = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button>Add to favorites</button>
    </div>
  );
};
export default RecipeItem;
