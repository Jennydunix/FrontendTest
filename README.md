# FrontendTest

## Description

FrontendTest is a React application that showcases card-based content. The project demonstrates the use of React, Redux for state management, and Redux Persist to maintain state across page refreshes. The project also includes routing using react-router-dom and state analytics using Redux.

## Features

- Card-based layout with click tracking
- State persistence using Redux PersistRouting with react-router-dom
- Analytics page showing click counts for each card
- Modal for displaying detailed card information

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
│   │   ├── AnalyticsTable.tsx 
│   │   ├── AnalyticsTable.css
│   │   ├── Card.tsx
│   │   ├── Card.css
│   │   ├── CardList.tsx 
│   │   ├── CardList.css
│   │   ├── Modal.tsx
│   │   ├── Modal.css
│   │   ├── NavBar.tsx 
│   │   ├── NavBar.css
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Analytics.tsx
│   │   └── ...
│   │
│   ├── store/
│   │   ├── index.ts
│   │   ├── cardSlice.ts
│   │   ├── persistConfig.ts
│   │   └── ...
│   │
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
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

