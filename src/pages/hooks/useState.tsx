import { useState } from "react";

function UseStatePage() {
  // Note: when state has changed component will be re-rendered
  const [count, setCount] = useState(0);

  console.log("render");

  return (
    <div>
      <span>count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Increment (+)</button>
      <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
    </div>
  );
}

export default UseStatePage;
