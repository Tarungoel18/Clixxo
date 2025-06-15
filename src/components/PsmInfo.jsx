import React, { useState } from 'react';
import {PCM_FIELDS} from "../constants/PsmInfoConstants"


const getInitialFormData = () => {
  return PCM_FIELDS.reduce((acc, field) => {
    acc[field.key] = field.defaultValue;
    return acc;
  }, {});
};

const PcmInfo = () => {
  const [formData, setFormData] = useState(getInitialFormData());
  const [currentField, setCurrentField] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleResetCurrent = () => {
    if (currentField) {
      setFormData(prev => ({
        ...prev,
        [currentField]: '0'
      }));
    }
  };

  const handleResetAll = () => {
    const resetData = PCM_FIELDS.reduce((acc, field) => {
      acc[field.key] = '0';
      return acc;
    }, {});
    setFormData(resetData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-100 border border-gray-400 font-sans text-sm">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-300 to-blue-400 px-4 py-2 border-b border-gray-400 flex justify-between items-center">
        <span className="text-gray-800 font-medium">PCM Info</span>
        <select className="bg-white border border-gray-400 px-2 py-1 text-xs">
          <option>PCM0</option>
        </select>
      </div>

      {/* Content Area */}
      <div className="bg-gray-200 p-6">
        <div className="space-y-3">
          {PCM_FIELDS.map((field) => (
            <div key={field.key} className="flex items-center justify-between">
              <label className="text-gray-700 w-80">{field.label}</label>
              <input
                type="text"
                value={formData[field.key]}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                onFocus={() => setCurrentField(field.key)}
                className={`w-60 px-2 py-1 border border-gray-400 bg-white text-center ${
                  currentField === field.key ? 'ring-2 ring-blue-400' : ''
                }`}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handleResetCurrent}
            disabled={!currentField}
            className={`px-6 py-2 bg-gradient-to-b border border-gray-400 text-gray-800 font-medium rounded shadow-sm transition-colors ${
              currentField 
                ? 'from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500' 
                : 'from-gray-300 to-gray-400 cursor-not-allowed opacity-60'
            }`}
          >
            Reset Current
          </button>
          <button
            onClick={handleResetAll}
            className="px-6 py-2 bg-gradient-to-b from-blue-300 to-blue-400 border border-gray-400 text-gray-800 font-medium rounded shadow-sm hover:from-blue-400 hover:to-blue-500 transition-colors"
          >
            Reset All
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcmInfo;