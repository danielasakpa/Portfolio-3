# My Portfolio

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![React](https://img.shields.io/badge/React-Latest-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Latest-blueviolet)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Latest-blue)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-brightgreen)

Welcome to the repository for my personal portfolio website! This project serves as an online showcase of my skills, projects, and experiences as a developer.

## Screenshots
<br/>

<p align="center">
  <img src="https://i.ibb.co/PmQ3Jgk/portfolio-3.png" alt="Alt Text">
</p>

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Learnings](#learnings)
- [Challenges and Solutions](#challenges-and-solutions)
- [Tools and Technologies](#tools-and-technologies)

## Features
- Modern and responsive design
- Dynamic sections for projects, skills, about me, and contact
- Smooth animations powered by Framer Motion
- Integration with Email.js for handling contact form submissions
- Easy customization for personal information, projects, and skills

## Getting Started

### Prerequisites
- Node.js: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/danielasakpa/Portfolio-3
   cd Portfolio-3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### Customize your portfolio:
   - Update personal information in `src/components/About.jsx`.
   - Add your projects in `src/assets/projectItem.js`.
   - Edit your skills in `src/components/Skills.jsx`.
   - Adjust the content of other sections in the corresponding files.
  
### Setting Up Email.js
To enable the contact form functionality, you'll need to set up your Email.js public API key. Follow these steps:

1. Get Your Email.js Public API Key:
   - Visit the [Email.js website](https://www.emailjs.com/).
   - Sign in to your account or create a new one.
   - Once logged in, go to your [Email.js dashboard](https://dashboard.emailjs.com/) and select your email service.
   - Navigate to the "Integration" section to find your public API key.

2. Add Your API Key to the Project:
   - Create a new file named `.env` in the root directory of your project.
   - Inside the `.env` file, add the following line:
     ```
     REACT_EMAIL_API_KEY=your-email-js-public-api-key
     ```
     Replace `your-email-js-public-api-key` with the actual public API key you obtained from Email.js.

For more detailed instructions on getting your Email.js public API key and using it with the portfolio contact form, refer to the [Email.js documentation](https://www.emailjs.com/docs/).

### Run the development server:
   ```bash
   npm start
   ```

 Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Contributing
If you're interested in contributing to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please adhere to the existing code style and make sure your changes align with the project's goals. Additionally, provide a clear description of your pull request.

## Learnings
Throughout the development of this project, I gained valuable insights into the following areas:

- Responsive web design principles
- Effective use of React.js for building dynamic user interfaces
- Implementation of smooth animations using Framer Motion
- Integrating third-party services, such as Email.js, for form handling
- Customization and configuration of a personal portfolio template

## Challenges and Solutions
During the development process, I encountered several challenges, including:

- **Responsive Design**: Ensuring a consistent user experience across various devices and screen sizes.
  - *Solution*: Utilized media queries and flexbox/grid layout for responsive design.

- **Integration with Email.js**: Setting up and integrating Email.js for the contact form.
  - *Solution*: Followed the Email.js documentation for React integration, handling form submissions.

- **Managing Project Data**: Organizing and managing project data in a clean and maintainable way.
  - *Solution*: Utilized separate data files (`src/assets/projectItem.js`) and mapped data dynamically.

## Tools and Technologies
This portfolio website was built using the following tools and technologies:

- **React.js**: JavaScript library for building user interfaces.
- **Framer Motion**: Animation library for React.
- **Email.js**: Service for sending emails directly from the client side.
- **Node.js**: JavaScript runtime for server-side development.
- **npm**: Package manager for Node.js packages.
- **Git and GitHub**: Version control and collaboration platform.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Replace the placeholders like `your-username` and `your-portfolio` with your actual GitHub username and repository name. Adjust the sections based on your project structure and features.
