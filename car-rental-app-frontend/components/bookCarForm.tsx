import React from "react";

export default function BookCarForm({
  bgColor = "bg-primary",
  textColor = "text-white",
  inputBgColor = "bg-secondary",
  buttonColor = "btn-primary",
  buttonHoverColor = "hover:bg-orange-600",
}) {
  return (
    <div className={`${bgColor} ${textColor} p-8 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-semibold mb-6">Book your car</h2>
      <form>
        <label className="block mb-4">
          <span>Car type</span>
          <select className={`${inputBgColor} mt-1 w-full p-2 rounded ${textColor}`}>
            <option value="">Select a car</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
          </select>
        </label>
        <label className="block mb-4">
          <span>Place of rental</span>
          <select className={`${inputBgColor} mt-1 w-full p-2 rounded ${textColor}`}>
            <option value="">Select location</option>
            <option value="ny">New York</option>
            <option value="la">Los Angeles</option>
            <option value="sf">San Francisco</option>
          </select>
        </label>
        <label className="block mb-4">
          <span>Place of return</span>
          <select className={`${inputBgColor} mt-1 w-full p-2 rounded ${textColor}`}>
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
            className={`${inputBgColor} mt-1 w-full p-2 rounded ${textColor}`}
          />
        </label>
        <label className="block mb-4">
          <span>Return date</span>
          <input
            type="date"
            className={`${inputBgColor} mt-1 w-full p-2 rounded ${textColor}`}
          />
        </label>

        <button
          type="submit"
          className={`${buttonColor} ${textColor} w-64 h-12 py-2 rounded-lg mt-4 ${buttonHoverColor}`}
        >
          Book now
        </button>
      </form>
    </div>
  );
}
