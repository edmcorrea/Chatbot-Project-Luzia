# Chatbot Project - Lexart Labs

<!-- - Css `Fazer o css da página` -->
<!-- - Construir o `README` -->
- Correção do new date() `utilizar a ideia do .lenght para alimentar o cvsData`
- hospedar no vercel
<!-- - corrigir os nomes das funções em ingles `ex.: OptionApplyLoan >> ApplyLoanOption` -->
- limpar comentarios e consoles: ``
- refatorar o código: `action provider muito grande`
- Collapse: `implementar uma função para esconder o chatbot`
-implement localStorage config state
- corrigir o setData(username:'' e password:'') em `handleGoodbyeOption`
- desenvolver os `testes`


<!-- Insert Image -->


This is my solution for designing a chatbot (Luzia) with interactive features and user validation functionality. Luzia was designed to deliver personalized messages to each user. In addition, she has specific knowledge related to loan.

<br>

## Technologies Used:
---

- Frontend: Vite + React.js
- Other Libraries: React-Hooks, React-Chatbot-Kit, React-CSV, Jest, React-Testing-Library (RTL).

<br>

## Luzia Bot - Creation process:
---

During the process of creating the project, some steps were taken to meet the main objectives and needs proposed in the challenge. The following story recounts the development of the project, from the initial understanding to the end of the project.

<details>

<summary><strong>Click for more details</strong></summary>

- Reading and Understanding the Project:
After receiving the Full Stack Developer Review challenge, a thorough reading of the presented requirements was carried out. This included understanding expected functionality such as the need to interpret terms for conversation initiation, require a username, password and your validations, display buttons, export the historic conversation, and other. This step was essential to define the direction of development.

- Use of new technologies: The challenge proposes the creation of a chatbot. Initially then, I dedicated time to learning related technologies, through tutorials, documentation and code examples to acquire the necessary knowledge to implement the project. Finally, I decided to implement the `react-chatbot-kit` and `React-csv` library for its construction, since it presented what was necessary for the development of the project.

- Creation of the MVP: Once the design decisions were finalized, an MVP (Minimum Viable Product) was created. In this phase, the basic components of the frontend application were developed to guarantee a functional code.

- Review of Components and Functionalities: With the basic functionality implemented, a review of the developed components was carried out. Code improvements, style adjustments and refactorings were made to ensure the quality and usability of the chatbot.

- Creating Tests: To ensure the quality and stability of the code, tests were developed using the Jest and React Testing Library.

</br>

</details>

<br>

## Luzia Bot - Features
---
- `User Input`: Users need to login to your account using your name and password.

- `Login Validations`: The user is only allowed access to Luzia Bot after validation of the access data

- `Full Access after Login`: After login, all chatbot functionality is released.

- `Interactive Chat`: the chatbot talks with users and has personalized responses to each customer's question

- `Service options`: During the conversation with Luzia Bot, the user has access to options with relevant information and a link for reference.

- `End of conversation`: The chat with Luzia Bot is only ended after the user says "Goodbye".

- `Download History`: After the user says “Goodbye”, it is possible to download the entire conversation history in a csv file.

<br>

## Luzia Bot - Getting Started
---

### To run the project locally:

1. Clone this repository: `git clone git@github.com:edmcorrea/Lexart-Test-Chatbot.git`
2. Navigate to the project directory: `cd luzia-chatbot/`
3. Install the required dependencies using `npm install`.
4. Start the application using `npm run dev`.
5. O projeto estará sendo executado em `http://localhost:5173/`.

<br>

## External Documentation

- React-Chatbot-Kit: `https://fredrikoseberg.github.io/react-chatbot-kit-docs/`
- React CSV: `https://www.npmjs.com/package/react-csv`
