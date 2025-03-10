"use client";


import { useState } from "react";
import React, {  useEffect } from "react";






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
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
 
    try {
      const response = await fetch("http://localhost:5198/api/Brand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ brandName }),
      });
 
      if (!response.ok) {
        throw new Error("Failed to add brand.");
      }
 
      const data = await response.json();
      alert(`Brand added successfully: ${data.brandName}`);
      setBrandName(""); // Clear the input field after submission
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };
 


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col text-gray-900">
        Brand Name:
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Enter brand name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          required
        />
      </label>


      {error && <p className="text-red-500">{error}</p>}


      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}






interface Brand {
  id: number;
  brandName: string;
}


interface ModelDTO {
  ModelName: string;
  BrandId: number;
}


function AddCarModelForm() {
  const [brands, setBrands] = useState<Brand[]>([]); // Initialize with an empty array
  const [error, setError] = useState<string>("");
  const [modelName, setModelName] = useState<string>(""); // For model name input
  const [selectedBrand, setSelectedBrand] = useState<number | string>(""); // For selected brand


  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("http://localhost:5198/api/Brand", {
          method: "GET",
        });
        if (!response.ok) throw new Error("Failed to fetch brands");
        const brandsData: Brand[] = await response.json();
        setBrands(brandsData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    };


    fetchBrands();
  }, []);


  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


    const modelDto: ModelDTO = {
      ModelName: modelName,
      BrandId: Number(selectedBrand), // Convert the selected brand to a number
    };


    try {
      const response = await fetch("http://localhost:5198/api/model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modelDto),
      });


      if (!response.ok) {
        throw new Error("Failed to submit model");
      }


      // Optionally handle the response (e.g., redirect or show success message)
      alert("Model added successfully!");


      // Reset form inputs
      setModelName("");
      setSelectedBrand("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };


  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label className="flex flex-col text-gray-900">
        Model Name:
        <input
          type="text"
          className="border p-2 rounded text-gray-900"
          placeholder="Enter model name"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)} // Update model name
        />
      </label>
      <label className="flex flex-col text-gray-900">
        Brand:
        <select
          className="border p-2 rounded"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)} // Update selected brand
        >
          <option value="">Select a brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.brandName}
            </option>
          ))}
        </select>
      </label>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
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
