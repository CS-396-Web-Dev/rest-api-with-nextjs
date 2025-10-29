import { createContext, useState } from 'react';

export const RecipeStepContext = createContext();

export function RecipeStepContextProvider({ children }) {
  const [recipeSteps, setRecipeSteps] = useState({});

  return (
    <RecipeStepContext value={{ recipeSteps, setRecipeSteps }}>
      {children}
    </RecipeStepContext>
  );
}
