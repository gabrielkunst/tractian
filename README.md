# 🚀 Tractian Challenge - Tree View Application

## Overview

This project is a Tree View Application developed to display the hierarchy of a company's assets, including locations, assets, and components. The application allows users to efficiently explore and manage assets through a dynamic tree structure.

<div align="center">
   <img src="https://github.com/gabrielkunst/tractian/.github/showcase.gif" alt="Live demo" />
   <p>
      <a href="https://tractian-tree.vercel.app">🚀 Click here to access the live demo!</a>
   </p>
</div

---

## Features

### Dynamic Tree Visualization 🌳

- Displays a hierarchical structure of locations, assets, and components.

### Filtering Capabilities 🔍

- **Text Search**: Allows searching for specific components, assets, or locations within the tree.
- **Energy Sensors**: Filters and isolates energy sensors in the tree.
- **Critical Sensor Status**: Highlights assets with critical sensor statuses.

### Responsive Design 📱

- The application adapts to different screen sizes, ensuring an optimized user experience.

## Project Structure

The application is structured around three main entities:

1. **Locations/Sub-Locations** 📍

   - Represent the places where assets are situated.
   - Can contain sub-locations to maintain an organized hierarchy.

2. **Assets/Sub-Assets** 🛠️

   - Represent assets within a location.
   - Can contain sub-assets or components.

3. **Components** 🔩

   - Constituent parts of an asset.
   - Can be linked to assets or locations.

## Example Structure

```plaintext
- Root
  ├── Location A
  │   ├── Asset 1
  │   │   ├── Component A1
  │   │   ├── Component A2
  │   ├── Asset 2
  │       ├── Component B1
  │       ├── Component B2
  ├── Location B
  │   ├── Sub-Location C
  │   │   ├── Asset 3
  │   │   │   ├── Component C1
  │   │   │   ├── Component C2
  │   │   ├── Component D1
  └── Component X
```

## Technologies

- **React** ⚛️: JavaScript library for building user interfaces.
- **TypeScript** 🦕: Superset of JavaScript that adds static types.
- **React Query** 📊: Data fetching library for React applications.
- **Tailwind CSS** 🏗️: Utility-first CSS framework for rapid UI development.

## Folder Structure

The project follows a feature-based folder structure to organize code and assets related to specific features. The main folders are as follows:

```plaintext
public/
src/
   assets/
   components/
   features/
      assets/
         api/
         components/
         contexts/
         hooks/
         reducers/
         types/
         utils/
      company/
         api/
         components/
         contexts/
         hooks/
         screens/
         types/
   lib/
types/
```

## Future Improvements

- **Better Tree Algorithms** 🚀: Improve the algorithms for tree creation and filtering to boost performance with large datasets.
- **List Virtualization** 📜: Implement list virtualization to render only the visible nodes, reducing DOM load.
- **Use Web Workers** 🛠️: Offload tree creation and filtering to Web Workers to keep the UI responsive.
- **Accessibility** ♿: Ensure the tree structure is fully accessible, including proper ARIA roles and keyboard navigation support.
- **Testing** 🧪: Include tests for edge cases in tree creation and filtering using Jest for unit tests and Cypress for end-to-end testing.
