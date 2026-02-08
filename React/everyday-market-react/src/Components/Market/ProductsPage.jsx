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
            { title: 'French Press', note: 'Quick and easy brew', tag: 'Best seller', price: '$24.99' },
            { title: 'Grinder', note: 'Better flavour, fresh grounds', tag: 'New', price: '$39.99' },
            { title: 'Travel Mug', note: 'Hot for the drive', tag: 'On sale', price: '$14.99' },
            { title: 'Beans Sampler', note: 'Try a few roasts', tag: 'Limited', price: '$19.99' },
        ],
        'Car Accessories': [
            { title: 'Detail Kit', note: 'Microfibres + spray', tag: 'Starter', price: '$18.99' },
            { title: 'Phone Mount', note: 'Clean dash setup', tag: 'Popular', price: '$16.99' },
            { title: 'Air Compressor', note: 'Quick top-ups', tag: 'Must-have', price: '$29.99' },
            { title: 'Car Fragrance', note: 'Not the cheap kind', tag: 'Fresh', price: '$7.99' },
        ],
        'Gaming Setup': [
            { title: 'Headset Stand', note: 'Desk stays clean', tag: 'Clean setup', price: '$12.99' },
            { title: 'Mouse Pad XL', note: 'More control', tag: 'Smooth', price: '$22.99' },
            { title: 'Controller Dock', note: 'Always charged', tag: 'Handy', price: '$27.99' },
            { title: 'LED Strip', note: 'Mood lighting', tag: 'RGB', price: '$15.99' },
        ],
        'Drone Tech': [
            { title: 'Extra Props', note: 'Always have spares', tag: 'Backup', price: '$11.99' },
            { title: 'ND Filters', note: 'Crisper footage', tag: 'Pro', price: '$34.99' },
            { title: 'Carry Case', note: 'Grab-and-go', tag: 'Travel', price: '$29.99' },
            { title: 'Landing Pad', note: 'Cleaner takeoffs', tag: 'Outdoor', price: '$17.99' },
        ],
        'Travel Essentials': [
            { title: 'Packing Cubes', note: 'Organised bag', tag: 'Organise', price: '$21.99' },
            { title: 'Power Bank', note: 'No dead phone', tag: 'Charged', price: '$24.99' },
            { title: 'Neck Pillow', note: 'Actually comfy', tag: 'Comfort', price: '$13.99' },
            { title: 'Daypack', note: 'Light carry', tag: 'Everyday', price: '$34.99' },
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
        console.log('Selected category:', categoryName); // Assignment requirement
        setSelectedCategoryName(categoryName);           // Updates UI
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
                    <div className="products__right-inner">
                        {selectedCategoryName ? (
                            <div className="preview">
                                <h3 className="preview__title">{selectedCategoryName}</h3>
                                <div className="preview__grid">
                                    {(previewData[selectedCategoryName] || []).map((item) => (
                                        <div key={item.title} className="preview-card">
                                            <div className="preview-card__top">
                                                <h4 className="preview-card__title">{item.title}</h4>
                                                <p className="preview-card__note">{item.note}</p>
                                            </div>

                                            <div className="preview-card__meta">
                                                <span className="preview-card__tag">{item.tag}</span>
                                                <span className="preview-card__price">{item.price}</span>
                                            </div>

                                            <button className="preview-card__btn" type="button">
                                                Add to cart
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : ( // Else case when no category is selected
                            <div className="preview preview--empty">
                                <p>Select a category to see a preview.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}