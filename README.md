# Front-End Developer Task

This project is a simplified version of a feature for a React TypeScript application. The objective of this task is to integrate basic UI components and functionality, demonstrating skills in React, TypeScript, and the ability to translate design concepts into functional application components.

## Features

1. **Radio Selection Buttons**
    - A set of radio buttons allowing the user to select between three options ("Option A", "Option B", "Option C").
    - The selected option is stored in the application's state.

2. **Text Box for Discount Code Entry**
    - A text box for users to enter a discount code.
    - Basic validation checks if the entered text follows a simple pattern (e.g., "DISCOUNT2024").

3. **Button to Simulate Discount Code Generation**
    - A button that generates a mock discount code (e.g., "NEWCODE123") when clicked and displays it to the user.
    - The generated code is displayed but not stored.

4. **Basic Note Field**
    - A text box for users to enter notes or comments.
    - The entered text is accessible in the application's state.

## Technologies Used

- **React** for UI development
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **TypeScript** for type checking
- **Eslint and Prettier** for syntax
- **React Use Forms** for forms
- **Joi** for forms validation
- **Docker** for containerization

## Setup and Running the Application

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x.x)
- npm (>=6.x.x) or yarn (>=1.x.x)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ivanus-Volodymyr/d_c_entry
    ```

2. Navigate to the project directory:

    ```bash
    cd f_c_entry
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the application, run:

```bash
npm start
# or
yarn start
```

The application should now be running on http://localhost:3000.

#
### Running an application in Docker
Follow these steps to get your project started with Docker:
1. Make sure that Docker is installed on your PC. This can be done with the `docker -v` command.
   If you don't have Docker installed, do it here [install Docker](https://docs.docker.com/engine/install/).
2. Make sure you have Docker running.
3. Make sure you are in the root folder of the project.


To run an application in Docker run the command:
### `docker-compose up --build`
The application should now be running on http://localhost:3000.

#
### File Structure
frontend-developer-task/
```
├── public/
│   ├── index.html
│   └── ...
├── src/
|   ├── pages/
│   ├── components/
│   │   ├── RadioButtons.tsx
│   │   ├── DiscountCodeInput.tsx
│   │   ├── GenerateCodeButton.tsx
│   │   ├── NoteField.tsx
│   │   └── ...
│   ├── hooks/
│   │   └── useGenerateDiscountCode.ts
│   ├── store/
│   │   ├── slices/
│   │   │   └── discountSlice.ts
│   │   └── store.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tailwind.config.js
└── ...
```
