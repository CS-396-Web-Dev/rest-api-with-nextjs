'use client';
import { useState } from 'react';

export default function RecipeStep({ id, step }) {
  const [isDone, setIsDone] = useState(false);
  return (
    <li key={id}>
      <label
        style={{
          // TODO: Add styling conditional
          textDecoration: isDone ? 'line-through' : 'none',
        }}
      >
        {step}
      </label>
      <input
        type="checkbox"
        // TODO: Update checked conditional
        checked={isDone}
        onChange={() => {
          // TODO: add checked change handler
          // and modify state
          setIsDone(!isDone);
        }}
      ></input>
    </li>
  );
}
