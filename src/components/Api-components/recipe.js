import React, { useState } from 'react';

const RecipeComponent = () => {
    const [query, setQuery] = useState(null); // Default query
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchRecipes = async () => {
        const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${encodeURIComponent(query)}`;
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
                setRecipes(data);
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
        fetchRecipes();
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Recipe Information</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Enter recipe name (Ex:'italian wedding soup')"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                />
                <button type="submit" className="mt-2 bg-blue-500 text-white rounded-lg p-2 w-full">
                    Get Recipe Info
                </button>
            </form>
            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {recipes.length > 0 && (
                <div className="mt-4">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="border-b py-2">
                            <h3 className="font-semibold text-lg">{recipe.title}</h3>
                            <p><strong>Servings:</strong> {recipe.servings}</p>
                            <p><strong>Ingredients:</strong> {recipe.ingredients.split('|').join(', ')}</p>
                            <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecipeComponent;
