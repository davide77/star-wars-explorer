# Star Wars Character Explorer

A React application that fetches and displays Star Wars character data from SWAPI (Star Wars API) with filtering capabilities and responsive design.

![Star Wars Explorer Screenshot](screenshot.png)

## 🚀 Features

- **Data Fetching**: Real-time data from SWAPI
- **Search Functionality**: Filter characters by name
- **Gender Filter**: Filter characters by gender
- **Responsive Design**: Mobile-first approach
- **Loading States**: Smooth loading experience
- **Error Handling**: User-friendly error messages

## 🛠️ Technical Stack

### Core Technologies
- React 18
- SASS/SCSS
- Star Wars API (SWAPI)

### Architecture & Patterns
- Custom Hooks for data fetching
- Component-based architecture
- BEM methodology for CSS
- Mobile-first responsive design

### Project Structure
```
src/
├── components/
│   ├── SearchInput/
│   ├── GenderFilter/
│   └── CharacterList/
├── hooks/
│   └── useStarWarsData.js
├── styles/
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _functions.scss
│   │   └── _mixins.scss
│   ├── base/
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   └── components/
│       ├── _search.scss
│       ├── _filter.scss
│       └── _character-card.scss
└── App.jsx
```

## 💡 Key Implementation Details

### Custom Hook for Data Fetching
```javascript
const useStarWarsData = () => {
  // Manages state and data fetching logic
  // Handles pagination, loading states, and errors
  // Returns characters, loading state, error state, and pagination controls
};
```

### SCSS Architecture
```scss
// Modular SCSS with functions and mixins
@function get-color($key, $subkey: null) {
  // Manages color system
}

@mixin respond-to($breakpoint) {
  // Handles responsive design
}
```

### Component Example
```jsx
const CharacterList = ({ characters }) => {
  return (
    <div className="character-grid">
      {characters.map(character => (
        <div className="character-card">
          // Character information
        </div>
      ))}
    </div>
  );
};
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Small: 576px
  - Medium: 768px
  - Large: 992px
  - Extra Large: 1200px

## 🎨 Styling Architecture

### BEM Methodology
```scss
.character-card {
  &__name { }
  &__detail { }
}
```

### Design System
- Consistent spacing scale
- Typography system
- Color system
- Component-specific styles

## 🚦 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## 🔍 Code Highlights

### Error Handling
```jsx
{error ? (
  <div className="error">{error}</div>
) : (
  // Main content
)}
```

### Responsive Grid
```scss
.character-grid {
  display: grid;
  gap: fn.get-spacing('4');
  grid-template-columns: 1fr;

  @include mix.respond-to('md') {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Filter Implementation
```jsx
const filteredCharacters = characters.filter(character => {
  const matchesSearch = character.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesGender = filterGender === 'all' || character.gender === filterGender;
  return matchesSearch && matchesGender;
});
```

## 🎯 Key Learning Points

1. **Modern React Practices**
   - Custom hooks
   - Component composition
   - State management

2. **SCSS Best Practices**
   - Modular architecture
   - Function and mixin usage
   - BEM methodology

3. **API Integration**
   - Async data fetching
   - Error handling
   - Loading states

4. **Responsive Design**
   - Mobile-first approach
   - Grid system
   - Flexible components

## 🔄 Future Improvements

1. Add pagination or infinite scroll
2. Implement caching
3. Add more filter options
4. Enhance error handling
5. Add unit tests
6. Add animation effects

## 📝 Notes

- The project uses the public SWAPI API
- Development focused on clean code and maintainability
<<<<<<< HEAD
<<<<<<< HEAD
- Emphasis on modular and reusable components
=======
- Emphasis on modular and reusable components
>>>>>>> 66f1a928f2d5fb42398014dd53e8e88fb268db66
=======
- Emphasis on modular and reusable components
>>>>>>> 66f1a928f2d5fb42398014dd53e8e88fb268db66
