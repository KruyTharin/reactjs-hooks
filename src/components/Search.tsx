import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}

const Search = memo(({ onChange }: SearchProps) => {
  console.log("Search rendered!");

  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
});

export default Search;
