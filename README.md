# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Commands to run the app
start a mock REST API server 

json-server --watch db.json --port 3001

### Installation 
npm i 

npm install tailwindcss @tailwindcss/vite

npm install -g json-server

### run the app

npm run dev



## About the App
### Tech Stack:

Frontend: React.js 

Styling: TailwindCSS 

Backend (Mock): json-server 


### Pages:

Home Page: Displays a list of cars with options to filter by brand, fuel type, and price. Users can add cars to wishlist.

Wishlist Page: Shows cars that have been added to the user's wishlist.

Car Details Page: Displays detailed information about a selected car.

### Components:
All components related to the app are located in the src/pages directory.