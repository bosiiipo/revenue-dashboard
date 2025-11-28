import { Filter } from "lucide-react";
import Empty from '../../assets/empty.svg?react';

const NoResults = ({ onClear }) => {
  return (
    <div className="w-full flex justify-center py-10">
      <div className="flex flex-col max-w-md w-full">

        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <Empty />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3 text-start">
          <span>No matching transaction found</span> 
          <br />
          <span>for the selected filter</span>
        </h2>

        <p className="text-gray-500 mb-8 text-start">
          <span>Change your filters to see more results, or add a new </span>
          <br />
          <span>product.</span>
        </p>

        <button
          onClick={onClear}
          className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-gray-200 transition w-fit"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default NoResults;
