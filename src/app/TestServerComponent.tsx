'use client';

import React, { useState } from 'react';
const TestServerComponent = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count++);
  };
  return (
    <>
      {count}
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default TestServerComponent;
