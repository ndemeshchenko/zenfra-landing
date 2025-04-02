# Zenfra Landing page


## Getting Started Locally

To run this project on your local machine, follow these steps:

1.  **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) and npm installed. Using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) is recommended.

2.  **Clone the repository:**
    ```sh
    # Replace <YOUR_GIT_URL> with the actual Git URL
    git clone <YOUR_GIT_URL> 
    # Replace <YOUR_PROJECT_DIRECTORY> with the directory name
    cd <YOUR_PROJECT_DIRECTORY> 
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```
    *Note: If you prefer using bun (a `bun.lockb` file exists), you can use `bun install`.*

4.  **Start the development server:**
    ```sh
    npm run dev
    ```
    *Note: If you prefer using bun, you can use `bun dev`.*

    This will start the Vite development server, usually available at `http://localhost:5173` (the port might vary). The application will automatically reload when you make changes to the code.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the codebase using ESLint.
*   `npm run preview`: Serves the production build locally.

## Technologies Used

*   [Vite](https://vitejs.dev/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [React](https://reactjs.org/)
*   [shadcn/ui](https://ui.shadcn.com/)
*   [Tailwind CSS](https://tailwindcss.com/)
