'use client';

import { use, useState } from 'react';
import { SubmitButton } from '../atoms';
import { RecipeStepContext } from '../../contexts/recipe-step-context';

export default function RecipeStepForm() {
  const [input, setInput] = useState('');
  const { recipeSteps, setRecipeSteps } = use(RecipeStepContext);

  return (
    <form
      id="recipe-step-form"
      onSubmit={(e) => {
        e.preventDefault();

        const id = `item-${Math.floor(Math.random() * Date.now())}`;

        // Add new recipe step to state
        setRecipeSteps({
          ...recipeSteps,
          [id]: { value: input, isDone: false },
        });

        // Clear input text
        setInput('');
      }}
    >
      <fieldset>
        <label htmlFor="recipe-step">Add Recipe Step</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          id="recipe-step"
          name="recipe-step"
          rows={3}
        />
      </fieldset>
      <SubmitButton id="submit-recipe-step" buttonText="Add" />
    </form>
  );
}
