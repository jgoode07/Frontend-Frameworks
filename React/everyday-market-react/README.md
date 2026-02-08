# Everyday Market App – React Front-End Frameworks  
**Author: Joe Goode**

This repository contains the **Everyday Market App**, developed using **modern React with Vite**. The project demonstrates core front-end framework concepts including functional components, state management with hooks, component communication, and dynamic UI rendering.

---

## Project Overview

The Everyday Market App is a simple React application that displays a list of categories in a sidebar menu. When a category is selected, the main content panel updates to show preview items related to that category.

The application focuses on clean component structure, reusable design, and modern React practices.

---

## Features Implemented

### Functional Component Architecture
The project uses **React functional components** along with modern hooks for state and lifecycle management.

### Component Structure
The application is organized into logical folders:

- `Components/Common/` – Global UI components (Header)
- `Components/Market/` – Category and product-related components

### Components Built

#### Header
A global header visible on all pages.

**Features:**
- Custom branding and title
- Custom logo integration
- Styled layout and spacing

---

#### ProductsPage
The main content page that holds the category menu and preview display area.

**Features:**
- Loads category data from a service
- Uses `useState` to manage category and selection state
- Uses `useEffect` to simulate fetching categories with a delay
- Displays dynamic preview cards based on selected category
- Logs selected category to the console as required

---

#### CategoryMenu
A container component responsible for rendering the list of category menu items.

**Features:**
- Receives category data via props
- Uses `map()` to dynamically render items
- Maintains internal selected state for highlighting
- Sends selected category back to the parent via callback props

---

#### CategoryMenuItem
Represents an individual clickable category.

**Features:**
- Receives category name via props
- Handles click events
- Applies selected styling conditionally

---

#### marketService
A simple service file used to simulate backend data.

**Features:**
- Returns a Promise containing five hard-coded categories
- Includes a 2-second delay using `setTimeout` to simulate loading

---

## React Concepts Demonstrated

- Functional components
- `useState` for state management
- `useEffect` for lifecycle behavior
- Component communication using props and callback functions
- Conditional rendering
- Dynamic rendering with `map()`
- Basic service abstraction for data loading

---

## Styling

The application layout includes:

- Custom branded header with logo
- Sidebar category navigation
- Dynamic preview card layout
- Responsive grid for product previews
- Clean spacing and visual hierarchy

Styles were written using plain CSS and organized per component.

---

## Technologies Used

- React (with Vite)
- JavaScript (ES6+)
- HTML5
- CSS3

---

## Testing

The application was tested using:

- `npm run dev` to run the development server
- `npm run lint` to verify code quality
- `npm run build` to ensure successful production build
- Browser interaction testing to verify:
  - Categories load after delay
  - Category selection updates preview content
  - Console logs appear on selection
  - Component communication works correctly

  *See testing images in the TESTING.md file*