import React from "react";
import { Download } from "lucide-react";

const DownloadRow = ({ title, size }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50 mb-3 hover:bg-blue-50 transition-colors">
      <div className="flex items-center gap-4 mb-3 sm:mb-0">
        <div className="bg-white border border-gray-200 text-red-600 p-2 rounded shadow-sm">
          <Download size={20} />
        </div>
        <div>
          <p className="font-bold text-gray-900 leading-tight">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{size}</p>
        </div>
      </div>

      <button className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded text-sm font-bold hover:bg-blue-700 active:bg-blue-800 transition-colors">
        Download
      </button>
    </div>
  );
};

export default DownloadRow;
