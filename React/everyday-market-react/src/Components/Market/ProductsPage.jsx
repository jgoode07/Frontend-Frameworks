import { useEffect, useState } from 'react';
import { loadCategories } from './marketService';
import './ProductsPage.css';

export default function ProductsPage() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Runs once when component loads
    useEffect(() => {
        loadCategories()
            .then((data) => setCategories(data))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <section className="products">
            <h2 className="products__title">Categories</h2>

            {isLoading ? (
                <p className="products__status">Loading categories...</p>
            ) : (
                <ul className="products__list">
                    {categories.map((c) => (
                        <li key={c.name} className="products__item">
                            {c.name}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
