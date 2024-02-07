import React from 'react'

const Filter = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Colors filter */}
      <div>
        <h3 className="text-lg font-semibold">Colors</h3>
        <div className="flex flex-wrap space-x-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">Red</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Blue</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Green</button>
          {/* Add more color buttons as needed */}
        </div>
      </div>

      {/* Material types filter */}
      <div>
        <h3 className="text-lg font-semibold">Material Types</h3>
        <div className="flex flex-wrap space-x-2">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">Metal</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">Wood</button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md">Plastic</button>
          {/* Add more material type buttons as needed */}
        </div>
      </div>

      {/* Flexibility filter */}
      <div>
        <h3 className="text-lg font-semibold">Flexibility</h3>
        <div className="flex space-x-2">
          <input type="checkbox" id="flexible" name="flexible" className="h-5 w-5" />
          <label htmlFor="flexible">Flexible</label>
          <input type="checkbox" id="rigid" name="rigid" className="h-5 w-5" />
          <label htmlFor="rigid">Rigid</label>
        </div>
      </div>

      {/* Construction phase filter */}
      <div>
        <h3 className="text-lg font-semibold">Construction Phase</h3>
        <div className="flex space-x-2">
          <input type="radio" id="phase1" name="constructionPhase" value="phase1" className="h-5 w-5" />
          <label htmlFor="phase1">Phase 1</label>
          <input type="radio" id="phase2" name="constructionPhase" value="phase2" className="h-5 w-5" />
          <label htmlFor="phase2">Phase 2</label>
          <input type="radio" id="phase3" name="constructionPhase" value="phase3" className="h-5 w-5" />
          <label htmlFor="phase3">Phase 3</label>
        </div>
      </div>
    </div>
  );
  
}

export default Filter


