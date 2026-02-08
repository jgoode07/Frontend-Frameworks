import { useState } from 'react';
import CategoryMenuItem from './CategoryMenuItem';
import './CategoryMenu.css';
import './CategoryMenuItem.css';

export default function CategoryMenu({ categories, onCategorySelected }) {

    // Stores which category is currently selected
    const [selectedCategoryName, setSelectedCategoryName] = useState('');

    // Runs when a CategoryMenuItem is clicked
    function handleItemSelected(categoryName) {
        setSelectedCategoryName(categoryName); // Highlight selected item
        onCategorySelected(categoryName);      // Send selection back to parent
    }

    return (
        <nav className="category-menu" aria-label="Category menu">
            {/* Loop through categories and render a menu item for each */}
            {categories.map((category) => (
                <CategoryMenuItem
                    key={category.name}
                    categoryName={category.name}
                    isSelected={category.name === selectedCategoryName}
                    onSelect={handleItemSelected}
                />
            ))}
        </nav>
    );
}