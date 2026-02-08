import { useEffect, useState } from 'react';
import { loadCategories } from './marketService';
import CategoryMenu from './CategoryMenu';
import './ProductsPage.css';

export default function ProductsPage() {
    // Stores categories loaded from the service
    const [categories, setCategories] = useState([]);

    // Controls loading message
    const [isLoading, setIsLoading] = useState(true);

    // Stores the category the user clicks
    const [selectedCategoryName, setSelectedCategoryName] = useState('');

    // Runs once when component loads
    useEffect(() => {
        loadCategories()
            .then((data) => setCategories(data))
            .finally(() => setIsLoading(false));
    }, []);

    // Runs when a category is clicked
    function handleCategorySelect(categoryName) {
        console.log('Selected category:', categoryName); // Assignment requirement
        setSelectedCategoryName(categoryName);           // Updates message on screen
    }

    return (
        <section className="products">
            <h2 className="products__title">Categories</h2>

            {isLoading ? (
                <p className="products__status">Loading categories...</p>
            ) : (
                <>
                    {/* Category buttons */}
                    <CategoryMenu
                        categories={categories}
                        onCategorySelected={handleCategorySelect}
                    />

                    {/* Shows selected category */}
                    {selectedCategoryName && (
                        <p className="products__selected">
                            You picked <strong>{selectedCategoryName}</strong>.
                        </p>
                    )}
                </>
            )}
        </section>
    );
}
