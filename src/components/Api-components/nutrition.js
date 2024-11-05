import React, { useState } from 'react';

const NutritionComponent = () => {
    const [query, setQuery] = useState(null); // Default query
    const [nutritionData, setNutritionData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchNutritionData = async () => {
        const apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${query}`;
        const apiKey = '86FDGT8ZDTowjh2cPDNKtg==esRZyB4QvUF9F87a'; // Replace with your actual API key

        setLoading(true);
        setError(null); // Clear any previous errors

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setNutritionData(data);
            } else {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchNutritionData();
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Nutrition Information</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Enter food item (Ex:1lb brisket and fries)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                />
                <button type="submit" className="mt-2 bg-blue-500 text-white rounded-lg p-2 w-full">
                    Get Nutrition Info
                </button>
            </form>
            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {nutritionData.length > 0 && (
                <div className="mt-4">
                    {nutritionData.map((item, index) => (
                        <div key={index} className="border-b py-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <p>Calories: {Number(item.calories).toFixed(1)}</p>
                            <p>Serving Size: {Number(item.serving_size_g).toFixed(1)} g</p>
                            <p>Total Fat: {Number(item.fat_total_g).toFixed(1)} g</p>
                            <p>Saturated Fat: {Number(item.fat_saturated_g).toFixed(1)} g</p>
                            <p>Protein: {Number(item.protein_g).toFixed(1)} g</p>
                            <p>Sodium: {Number(item.sodium_mg)} mg</p>
                            <p>Potassium: {Number(item.potassium_mg)} mg</p>
                            <p>Cholesterol: {Number(item.cholesterol_mg)} mg</p>
                            <p>Total Carbohydrates: {Number(item.carbohydrates_total_g).toFixed(1)} g</p>
                            <p>Fiber: {Number(item.fiber_g).toFixed(1)} g</p>
                            <p>Sugar: {Number(item.sugar_g).toFixed(1)} g</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NutritionComponent;
