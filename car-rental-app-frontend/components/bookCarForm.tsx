export default function BookCarForm() {
    return (
      <div className="bg-primary text-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Book your car</h2>
        <form>
          <label className="block mb-4">
          <span>Car type</span>
            <select className="bg-secondary mt-1 w-full p-2 rounded text-white">
              <option value="">Select a car</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="hatchback">Hatchback</option>
            </select>
          </label>
          <label className="block mb-4">
          <span>Place of rental</span>
            <select className="bg-secondary mt-1 w-full p-2 rounded text-white">
              <option value="">Select location</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="sf">San Francisco</option>
            </select>
          </label>
          <label className="block mb-4">
          <span>Place of return</span>
            <select className="bg-secondary mt-1 w-full p-2 rounded text-white">
             <option value="">Select location</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="sf">San Francisco</option>
            </select>
          </label>
          <label className="block mb-4">
          <span>Rental date</span>
            <input
              type="date"
              className="bg-secondary mt-1 w-full p-2 rounded text-white input-date-white"
            />
          </label>
          <label className="block mb-4">
          <span>Return date</span>
            <input
                type="date"
                className="bg-secondary mt-1 w-full p-2 rounded text-white input-date-white"
            />
</label>

          <button
            type="submit"
            className="btn-primary w-full text-white py-2 rounded-lg mt-4 hover:bg-orange-600"
          >
            Book now
          </button>
        </form>
      </div>
    );
  }
  