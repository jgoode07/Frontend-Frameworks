// Simulates loading categories from a server with a 2s delay
export function loadCategories() {
    const categories = [
        { name: 'Coffee Gear' },
        { name: 'Car Accessories' },
        { name: 'Gaming Setup' },
        { name: 'Drone Tech' },
        { name: 'Travel Essentials' },
    ];

    return new Promise((resolve) => {
        setTimeout(() => resolve(categories), 2000);
    });
}
