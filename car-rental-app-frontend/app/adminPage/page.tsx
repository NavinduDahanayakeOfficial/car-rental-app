"use client";

import { useState } from "react";

const TABS = ["Add Car Brand", "Add Car Model", "Add Car"];

export default function CarManagementPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="min-h-screen p-8 flex flex-col items-center font-sans">
      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-md border p-6 rounded-lg shadow-md bg-white">
        {activeTab === "Add Car Brand" && <AddCarBrandForm />}
        {activeTab === "Add Car Model" && <AddCarModelForm />}
        {activeTab === "Add Car" && <AddCarForm />}
      </div>
    </div>
  );
}

function AddCarBrandForm() {
  return (
    <form className="flex flex-col gap-4">
      <label className="flex flex-col text-gray-900">
        Brand Name:
        <input type="text" className="border p-2 rounded" placeholder="Enter brand name" />
      </label>
      <label className="flex flex-col text-gray-900">
        Country:
        <input type="text" className="border p-2 rounded" placeholder="Enter country" />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

function AddCarModelForm() {
  const brands = ["Toyota", "Nissan", "BMW"]; // Hardcoded brands

  return (
    <form className="flex flex-col gap-4">
      <label className="flex flex-col text-gray-900">
        Model Name:
        <input type="text" className="border p-2 rounded text-gray-900" placeholder="Enter model name" />
      </label>
      <label className="flex flex-col text-gray-900">
        Brand:
        <select className="border p-2 rounded">
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

function AddCarForm() {
  const brands = ["Toyota", "Nissan", "BMW"]; // Hardcoded brands
  const models = ["Model 1", "Model 2", "Model 3"]; // Hardcoded models

  return (
    <form className="flex flex-col gap-4">
      <label className="flex flex-col text-gray-900">
        Car Name:
        <input type="text" className="border p-2 rounded" placeholder="Enter car name" />
      </label>
      <label className="flex flex-col text-gray-900">
        Brand:
        <select className="border p-2 rounded">
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col text-gray-900">
        Model:
        <select className="border p-2 rounded">
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col text-gray-900">
        License Plate Number:
        <input type="text" className="border p-2 rounded" placeholder="Enter license plate number" />
      </label>
      <label className="flex flex-col text-gray-900">
        Color:
        <input type="text" className="border p-2 rounded" placeholder="Enter car color" />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}
