import { Search } from "lucide-react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(keyword);
    }
  };

  return (
    <div className="w-full max-w-2xl flex items-center bg-white border border-slate-300 rounded-full shadow-sm overflow-hidden">
      <input
        type="text"
        placeholder="Search jobs, companies..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1 px-6 py-4 text-lg outline-none"
      />

      <button
        onClick={handleSearch}
        className="h-full px-7 bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition-all duration-200"
      >
        <Search size={22} />
      </button>
    </div>
  );
}

export default SearchBar;
