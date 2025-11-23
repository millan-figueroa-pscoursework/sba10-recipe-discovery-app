import { createContext } from "react";
import type { ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type FavoritesProviderProps = {
  children: ReactNode;
};
// context that holds all favorite data and functions
export const FavoritesContext = createContext();

// provider wraps the whole app
export function FavoritesProvider({ children }: FavoritesProviderProps) {
  // empty array is the default
  // useLocalStorage already uses useState internally
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  // add a recipe id if not already saved
  function addFavorite(id: number) {
    if (!favorites.includes(id)) {
      setFavorites((prev: any) => [...prev, id]);
    }
  }

  // remove a recipe id
  function removeFavorite(id: number) {
    setFavorites((prev: any) => prev.filter((favId: any) => favId !== id));
  }

  // check if recipe is in favorites
  function isFavorite(id: number) {
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
