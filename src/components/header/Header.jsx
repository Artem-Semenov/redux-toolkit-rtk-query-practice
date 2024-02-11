import { BsFillBookmarkHeartFill } from "react-icons/bs";
import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites";
export const Header = () => {
  const favoritesCount = useFavorites().length;
  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill fontSize={20} />
      <span>{favoritesCount}</span>
    </header>
  );
};
