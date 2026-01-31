# Everyday Market App – Angular Front-End Frameworks  
**Author: Joe Goode**

This repository contains the **Everyday Market App**, developed using **modern Angular (v17+) standalone components**. The project demonstrates core front-end framework concepts including component architecture, data binding, event communication, and Angular’s new control flow syntax.

---

## Project Overview

The Everyday Market App is a simple Angular application that displays a list of categories in a sidebar menu. When a category is selected, an alert is shown and the main content panel updates to reflect the user’s selection.

The application focuses on clean component design, reusable structure, and modern Angular practices.

---

## Features Implemented

### Standalone Component Architecture
The project uses Angular’s **standalone components** instead of NgModules. Each component explicitly imports its dependencies.

### Component Structure
The application is organized into logical folders:

- `shared/` – Global UI components (Header)
- `market/` – Product-related components and models

### Components Built

#### HeaderComponent
A global header visible on all pages.

**Features:**
- Custom branding and title
- Custom background styling
- Logo/favicon integration

---

#### ProductsPageComponent
The main content page that holds the category menu and content display area.

**Features:**
- Hard-coded list of five personal interest categories
- Uses property binding to pass data to child components
- Displays a confirmation message when a category is selected
- Uses Angular 17+ control flow (`@if`) to dynamically update the UI

---

#### CategoryMenuComponent
A container component responsible for rendering the list of category menu items.

**Features:**
- Receives category data from parent via `@Input()`
- Uses Angular’s modern `@for` syntax to loop through categories
- Listens for events from child components
- Emits selected category back to the parent using `@Output()` and `EventEmitter`

---

#### CategoryMenuItemComponent
Represents an individual clickable category.

**Features:**
- Receives category name via `@Input()`
- Emits click events using `@Output()`
- Demonstrates event binding between child and parent components

---

## Angular Concepts Demonstrated

- Standalone components
- Component communication with `@Input()` and `@Output()`
- EventEmitter for upward data flow
- Property binding
- Event binding
- Angular 17+ control flow syntax (`@for`, `@if`)
- Basic state management inside a parent component

---

## Styling

The application layout includes:

- A custom branded header
- Sidebar category navigation
- Dynamic content panel
- Google Fonts integration
- Responsive spacing and layout structure

Styles were written using plain CSS and organized per component.

---

## Technologies Used

- Angular 17+ (Standalone Components)
- TypeScript
- HTML5
- CSS3

---

## Testing

The application was tested using:

- `ng serve` to run the development server
- Browser interaction testing
- Verifying:
  - Category menu renders correctly
  - Clicking a category triggers an alert
  - Selected category displays in the content panel
  - Component communication works properly