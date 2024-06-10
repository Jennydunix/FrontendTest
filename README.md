# FrontendTest

## Description

This project is a React application that displays a list of cards. Users can click on the cards to view more details in a modal. The application also tracks the number of times each card has been clicked, using Redux for state management. An analytics page provides a table view of the card click statistics.

## Features

- Display cards with title, content, image, and author details.
- Click on a card to open a modal with more details.
- Track the number of times each card has been clicked.
- Analytics page to view the card click statistics.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Approach](#approach)
- [Key Decisions](#key-decisions)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Deployment](#deployment)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/FrontendTest.git.
```

2. Navigate to the project directory:

```bash
cd FrontendTest
```

3. Install the dependencies:

```bash
npm install
```

## Usage
1. Start the development server:
   
```bash
npm start
```
2. Open your browser and go to http://localhost:3000.

3. Navigate between the home page and analytics page using the navigation links.

## Approach
a. Project Structure: The project is structured with components, pages, and a store for managing the application state. The main components are Card, CardList, Modal, and AnalyticsTable.

b. State Management: The application uses Redux for state management, specifically the Redux Toolkit to simplify the process of creating slices and reducers.

c. Fetching Data: Data is fetched from a mock API using the fetch API in the useEffect hook. The data is then stored in the component state and used throughout the application.

d. Styling: CSS is used for styling the components. The styles are written in separate CSS files for each component to keep the styles modular and maintainable.

e. Routing: React Router is used to manage the navigation between the home page and the analytics page.


## Key Decisions
a. Redux Toolkit: Chose Redux Toolkit for state management due to its simplicity and ease of use for this project.

b. Date-fns: Used date-fns for date formatting due to its lightweight nature and ease of use.

c. CSS for Styling: Decided to use CSS for styling to keep the project simple and avoid the complexity of CSS-in-JS solutions.

d. Fetch API: Used the native fetch API for data fetching to avoid additional dependencies.

e. Adding Redux Persist: To maintain the state of the application across page refreshes, Redux Persist was integrated. This ensures that the click counts for each card are not lost when the page is reloaded.

## Implementation
I.Install Redux Persist:

```bash
 install redux-persist
```
II. Configure Redux Persist:Create a persistConfig and configure the store with Redux Persist.

```bash
 
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import cardReducer from './cardSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cardReducer);

const store = configureStore({
  reducer: {
    cards: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
 ```
III. Wrap the App with PersistGate:
```bash
 // index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

```
## Project Structure
```bash
FrontendTest/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── CardList.tsx
│   │   ├── Modal.tsx
│   │   └── AnalyticsTable.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Analytics.tsx
│   │   └── ...
│   │
│   ├── store/
│   │   ├── index.ts
│   │   ├── cardSlice.ts
│   │   └── ...
│   │
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
│
├── package.json
├── README.md
└── ...

```

## Screenshots
*HomePage*
![homepage](https://github.com/Jennydunix/FrontendTest/assets/88034429/6b1788c3-765c-411f-8a04-a9a98a9fe647)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*Analytics Page*
![Analytics](https://github.com/Jennydunix/FrontendTest/assets/88034429/c8113668-5e19-4d99-ac72-970c9c26782f)

## Deployment
This project is deployed and hosted on [Vercel](https://vercel.com/). You can access the live version [here] https://frontend-test-wine-zeta.vercel.app/).

