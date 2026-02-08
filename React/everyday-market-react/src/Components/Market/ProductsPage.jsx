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

    const previewData = {
        'Coffee Gear': [
            { title: 'French Press', note: 'Quick and easy brew' },
            { title: 'Grinder', note: 'Better flavour, fresh grounds' },
            { title: 'Travel Mug', note: 'Hot for the drive' },
            { title: 'Beans Sampler', note: 'Try a few roasts' },
        ],
        'Car Accessories': [
            { title: 'Detail Kit', note: 'Microfibres + spray' },
            { title: 'Phone Mount', note: 'Clean dash setup' },
            { title: 'Air Compressor', note: 'Quick top-ups' },
            { title: 'Car Fragrance', note: 'Not the cheap kind' },
        ],
        'Gaming Setup': [
            { title: 'Headset Stand', note: 'Desk stays clean' },
            { title: 'Mouse Pad XL', note: 'More control' },
            { title: 'Controller Dock', note: 'Always charged' },
            { title: 'LED Strip', note: 'Mood lighting' },
        ],
        'Drone Tech': [
            { title: 'Extra Props', note: 'Always have spares' },
            { title: 'ND Filters', note: 'Crisper footage' },
            { title: 'Carry Case', note: 'Grab-and-go' },
            { title: 'Landing Pad', note: 'Cleaner takeoffs' },
        ],
        'Travel Essentials': [
            { title: 'Packing Cubes', note: 'Organised bag' },
            { title: 'Power Bank', note: 'No dead phone' },
            { title: 'Neck Pillow', note: 'Actually comfy' },
            { title: 'Daypack', note: 'Light carry' },
        ],
    };

    // Runs once when component loads
    useEffect(() => {
        loadCategories()
            .then((data) => setCategories(data))
            .finally(() => setIsLoading(false));
    }, []);

    // Runs when a category is clicked
    function handleCategorySelect(categoryName) {
        console.log('Selected category:', categoryName); // assignment requirement
        setSelectedCategoryName(categoryName);           // updates UI
    }


    return (
        <section className="products">
            <div className="products__layout">
                <div className="products__left">
                    <h2 className="products__title">Categories</h2>

                    {isLoading ? (
                        <p className="products__status">Loading categories...</p>
                    ) : (
                        <CategoryMenu
                            categories={categories}
                            onCategorySelected={handleCategorySelect}
                        />
                    )}
                </div>

                <div className="products__right">
                    {selectedCategoryName ? (
                        <div className="preview">
                            <h3 className="preview__title">{selectedCategoryName}</h3>
                            <div className="preview__grid">
                                {(previewData[selectedCategoryName] || []).map((item) => (
                                    <div key={item.title} className="preview-card">
                                        <h4 className="preview-card__title">{item.title}</h4>
                                        <p className="preview-card__note">{item.note}</p>
                                        <button className="preview-card__btn" type="button">
                                            Add to cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="preview preview--empty">
                            <p>Select a category to see a preview.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}