'use client';
import { use } from 'react';
import { RecipeStepContext } from '../../contexts/recipe-step-context';
import { RecipeStep } from '..';

export default function RecipeStepList() {
  const { recipeSteps } = use(RecipeStepContext);
  return (
    <ol>
      {Object.entries(recipeSteps).map(([k, v]) => (
        <RecipeStep id={k} step={v.value} />
      ))}
    </ol>
  );
}
