import { SearchIcon } from "./Icons";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2">
      <SearchIcon width={14} height={14} stroke="#8a8a8a" />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent outline-none py-1"
      />
    </div>
  );
};

export default TableSearch;
