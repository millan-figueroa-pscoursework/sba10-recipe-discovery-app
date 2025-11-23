import { createContext } from "react";
import type { ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// describe what the context provides
type FavoritesContextType = {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

// context that holds all favorite data and functions
// provide a default that matches the type, with stubbed functions
export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: (id: string) =>
    console.warn("no favorites provider (addFavorite)", id),
  removeFavorite: (id: string) =>
    console.warn("no favorites provider (removeFavorite)", id),
  isFavorite: (id: string) => {
    console.warn("no favorites provider (isFavorite)", id);
    return false;
  },
});

type FavoritesProviderProps = {
  children: ReactNode;
};

// provider wraps the whole app
export function FavoritesProvider({ children }: FavoritesProviderProps) {
  // empty array is the default
  // useLocalStorage already uses useState internally
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // add a recipe id if not already saved
  function addFavorite(id: string) {
    if (!favorites.includes(id)) {
      setFavorites((prev: any) => [...prev, id]);
    }
  }

  // remove a recipe id
  function removeFavorite(id: string) {
    setFavorites((prev: any) => prev.filter((favId: any) => favId !== id));
  }

  // check if recipe is in favorites
  function isFavorite(id: string) {
    return favorites.includes(id);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
