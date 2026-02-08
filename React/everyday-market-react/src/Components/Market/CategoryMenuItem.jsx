export default function CategoryMenuItem({ categoryName, isSelected, onSelect }) {
    function handleClick() {
        onSelect(categoryName);
    }

    return (
        <button
            type="button"
            className={`menu-item ${isSelected ? 'menu-item--selected' : ''}`}
            onClick={handleClick}
        >
            {categoryName}
        </button>
    );
}
