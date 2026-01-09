
## 📦 Requirements

- **Node.js**: `v20.19.3` or later  
- **npm**: `10.8.2` or later

---

## 📦 Starting Commands
- npm install
- npm run dev

---

## 🛠 Tech Stack

- **React** (Vanilla React)
- **JavaScript (ES6+)**
- **CSS**

---

## 🚀 Features

- Create notes with title, content, and category
- View notes in a responsive grid layout
- Delete notes
- Skeleton loader for better loading experience
- Clean and professional UI (desktop-first)

---

## 📦 State Explanation

- All application state is lifted to the Layout component.

- notes state stores the list of all notes.

- UI-related state such as form visibility is handled locally in the layout.

- Data flows downward via props, and user actions are communicated upward using callback functions.
  This approach ensures predictable, unidirectional data flow and avoids unnecessary duplication of state.

---

## 📦 Component Breakdown

### Layout

- Acts as the main container.

- Holds application state and coordinates data flow between components.

### Header

- Displays page title and note count.

- Contains the “Add New Note” action.

### NoteForm

- Handles creation of new notes.

- Manages form inputs and validation.

- Sends new note data to the parent via callbacks.

### NoteList

- Renders a grid of all notes.

- Handles empty state rendering.

- Passes delete and navigation actions to individual notes.

### SkeletonLoader / Loader

- Handles loading state during initial render.

  ---

## 📦 Assumptions & Limitations

- Notes are stored in memory (and optionally localStorage) for simplicity.

- No backend API or authentication is implemented, as it is explicitly out of scope.

- Styling is kept minimal and custom, without external UI frameworks.

- The application is designed primarily for desktop use.
