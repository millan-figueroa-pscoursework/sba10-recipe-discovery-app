# Barebones MVP Todo List

This is the minimum required to complete the project correctly and on time.

---

## 1. Core Hooks

- [ ] **Create `useFetch` hook**

  - [ ] Accepts a callback that returns a Promise.
  - [ ] Manages: `data`, `loading`, `error`.
  - [ ] Returns `{ data, loading, error }`.

- [ ] **Create `useLocalStorage` hook**
  - [ ] Wraps `useState`.
  - [ ] Syncs values to `localStorage` whenever they change.

---

## 2. Favorites Context (Global State)

- [ ] **Create `FavoritesContext`**
  - [ ] Holds `favoriteIds: string[]`.
  - [ ] `addFavorite(id)`
  - [ ] `removeFavorite(id)`
  - [ ] `isFavorite(id)`
- [ ] Use `useLocalStorage` internally so favorites persist.
- [ ] Wrap the app with `FavoritesProvider`.

---

## 3. Routing & Required Pages

- [ ] Add routes:
  - [ ] `/` → **HomePage**
  - [ ] `/category/:categoryName` → **CategoryPage**
  - [ ] `/recipe/:recipeId` → **RecipeDetailPage**
  - [ ] `/favorites` → **FavoritesPage**
  - [ ] `/search` → \*\*SearchResultsPage`(reads`query` from URL params)

---

## 4. Minimal Pages Implementation

### **Home Page**

- [ ] Fetch categories with `useFetch`.
- [ ] Display grid/list of categories.
- [ ] Each links to `/category/{categoryName}`.

### **Category Page**

- [ ] Fetch recipes for category.
- [ ] Display list of recipes.
- [ ] Each links to `/recipe/{id}`.

### **Recipe Detail Page**

- [ ] Fetch full recipe details.
- [ ] Show name, image, ingredients, instructions.
- [ ] Button:
  - [ ] “Add to Favorites” or “Remove from Favorites”
  - [ ] Uses `FavoritesContext`.

### **Favorites Page**

- [ ] Read `favoriteIds` from context.
- [ ] If none → show “No favorites yet.”
- [ ] Otherwise → fetch recipe info for each favorite + display.

### **Search Results Page**

- [ ] Read `query` via `useSearchParams`.
- [ ] Fetch recipes based on query.
- [ ] Render results or “No results”.

---

## 5. Minimal Components

- [ ] **Navbar**

  - [ ] Links: Home, Favorites.
  - [ ] Search bar → navigates to `/search?query=input`.

- [ ] **RecipeCard**

  - [ ] Shows image + title.
  - [ ] Links to recipe detail.

- [ ] **Spinner** (simple)
- [ ] **ErrorMessage** (simple)

---

## 6. Basic UI Requirements

- [ ] Use Tailwind for quick layout & spacing.
- [ ] Make grids responsive (2–4 columns).
- [ ] Ensure loading + error states show cleanly on every page.

---

## 7. Final Checks

- [ ] Favorites persist after page refresh.
- [ ] All pages load with `useFetch` working.
- [ ] Search → navigate → see results.
- [ ] No TypeScript errors.
