import styles from "./RecipeItem.module.css";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

const RecipeItem = ({ recipe }) => {
  const { toggleFavorites } = useActions();
  const favorites = useFavorites();
  const isFavorite = favorites.some((el) => el.id === recipe.id);

  const onBtnClick = () => {
    toggleFavorites(recipe);
  };

  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.name} width={100} height={100} />
      <h3>{recipe.name}</h3>
      <button onClick={onBtnClick}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};
export default RecipeItem;
