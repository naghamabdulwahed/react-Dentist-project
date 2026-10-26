🦷 Dentist Clinic Management System

A React-based web application designed to organize dental clinic workflows through dedicated dashboards for administrators, doctors, and receptionists.

The project focuses on building an organized user interface for managing patient information, treatment records, financial information, and clinic operations.

📌 Project Overview

The Dentist Clinic Management System provides role-oriented interfaces to help organize different aspects of dental clinic management.

The application includes a public landing page, authentication-related screens, and separate dashboards for different user roles.

✨ Features

🏠 Landing Page

- Home section introducing the application.
- About section describing the system.
- Frequently Asked Questions (FAQ).
- Contact Us section.
- Account type selection for different user roles.

🔐 Authentication Interfaces

- Login page.
- Forgot password page.
- Verification code page.
- Password reset page.

👨‍💼 Administrator Dashboard

- Dashboard and profile pages.
- Patient management interfaces.
- Doctor and employee management interfaces.
- User management.
- Treatment management.
- Financial management.
- Expense entry.
- Invoice viewing.
- Laboratory management.
- Data tables with pagination, filtering, column visibility, and export functionality where implemented.

🩺 Doctor Dashboard

- Doctor profile.
- Dashboard interface.
- Patient information views.
- Doctor's patient list.
- Treatment-related interface.

🧑‍💻 Receptionist Dashboard

- Reception dashboard.
- Patient information management interfaces.
- Add and edit patient information.
- View individual patient records.
- Payment-related interface.

«Note: The project includes sample JSON data in some areas. Features requiring persistent storage, a live backend, or real authentication should be verified separately.»

🛠️ Technologies Used

- React — Building user interfaces.
- JavaScript — Application logic.
- React Router DOM — Client-side navigation.
- Material UI (MUI) — UI components and styling.
- MUI Data Grid — Interactive data tables.
- Axios — HTTP requests.
- Formik — Form management.
- Yup — Form validation.
- Chart.js / React Chart.js 2 — Data visualization.
- HTML5 and CSS3 — Structure and styling.
- npm — Package management.

📂 Project Structure

The application code is organized into reusable components, layouts, and supporting data files.

react-Dentist-project/
├── public/
├── src/
│ ├── layouts/
│ │ ├── Admin/
│ │ ├── Doctor/
│ │ ├── Reception/
│ │ └── auth/
│ ├── App.js
│ └── ...
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

This is a simplified overview of the project structure.

🚀 Getting Started

Prerequisites

Make sure you have the following installed:

- "Node.js" (https://nodejs.org/)
- npm, which is included with Node.js
- Git

Installation

1. Clone the repository

git clone https://github.com/naghamabdulwahed/react-Dentist-project.git

2. Navigate to the project directory

cd react-Dentist-project

3. Install dependencies

npm install

4. Start the development server

npm start

5. Open the application

Visit "http://localhost:3000" (http://localhost:3000) in your browser.

🏗️ Production Build

To create an optimized production build, run:

npm run build

The generated files will be placed in the "build" directory.

🧪 Testing

To run the available test scripts, use:

npm test

🎯 Project Goals

This project demonstrates frontend development concepts, including:

- Building reusable React components.
- Organizing a multi-page React application.
- Implementing client-side routing.
- Creating role-oriented dashboard layouts.
- Working with interactive data tables.
- Building forms and validation interfaces.
- Organizing application data and UI components.

👩‍💻 Developer

Developed as a React frontend project to demonstrate web application development and dashboard design skills.

📄 License

No license has been specified for this repository yet.
