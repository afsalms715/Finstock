import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  search: string | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  OnSearchSubmit: (e: SyntheticEvent) => void;
}

const SearchBox: React.FC<Props> = ({search,handleChange,OnSearchSubmit,}): JSX.Element => {
  return (
    <div className="w-full mt-3 mb-3">
      <form onSubmit={OnSearchSubmit} className="relative w-full min-w-[200px] h-10">
        <div className="flex md:w-[70%] w-full mx-auto ">
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-blue-gray-400 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 "
            placeholder="Search"
            value={search}
            onChange={(e) => handleChange(e)}
          />
          <button
            className="select-none ml-3 hover:text-blue-600  text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75   disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  hover:h-7 transition  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
