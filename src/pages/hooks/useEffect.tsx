import { useState, useEffect } from "react";

function UseEffectPage() {
  const [count, setCount] = useState(0);

  // Run at least once when component is mounted
  useEffect(() => {
    console.log(count);

    // Optional return function
    return () => {
      // Useful to clear timeout or unsubscribe something
      // Can also run when component is unmounted
      console.log("cleanup!");
    };
  }, [count]); // The dependencies array

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default UseEffectPage;
