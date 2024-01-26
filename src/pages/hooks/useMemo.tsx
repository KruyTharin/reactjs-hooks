import { useState, useMemo } from "react";

const UseMemoPage = () => {
  const initialValue = new Array(1000001).fill(0).map((_, i) => {
    return {
      id: i,
      isSelected: i === 1000000,
    };
  });

  const [count, setCount] = useState(0);
  const [items] = useState(initialValue);

  // No need to re computed, unless items is different
  // It's only run when items is changed (isSelected is true)
  const selectItems = useMemo(() => {
    console.log("running selectItems...");
    const selectedItem = items.find((item) => item.isSelected);
    return selectedItem;
  }, [items]);

  console.log(selectItems);

  return (
    <div>
      <h1>Selected Item: {selectItems?.id}</h1>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
};

export default UseMemoPage;
