# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


# Expense Tracker (React)

A simple expense tracking application built with React and Vite.

## Features

- Add and delete transactions
- Calculate total balance
- Track income and expenses
- Persistent data storage using localStorage
- Responsive design

## Technologies Used

- React 18
- Vite
- CSS for styling
- Context API for state management

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

## Project Structure

- `src/components/` - React components
- `src/context/` - Global state management
- `src/App.jsx` - Main application component

## Contributing

Feel free to submit issues and pull requests.

## License

MIT

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
