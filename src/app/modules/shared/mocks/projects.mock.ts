import { ProjectInterface } from "../interfaces/project.interface";

export const PROJECTS_MOCK: ProjectInterface[] = [
  {
    id: 1,
    title: 'Payeer',
    subtitle: 'E-wallet',
    description: 'Payeer is an e-wallet that offers a comprehensive solution for managing both cryptocurrencies and fiat currencies, with a built-in payment exchange system that supports popular payment systems such as MasterCard, VISA, and PayPal. The application was created according to a large design system to ensure a seamless user experience. Our dedicated team is constantly working to improve the platform, including ongoing efforts to redesign and migrate from JQuery to Vue3 for even better performance and functionality.',
    tech: 'We\'re in the process of migrating the application to the Vue framework and our team is dedicated to writing clean and readable code on the front-end. We recognize that the project has a complex database, so we\'re collaborating closely with our backend team to ensure excellent results. By working together, we aim to create an efficient application that meets the needs of our users.',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'BEM', 'Vue3', 'Composition API', 'pinia', 'REST API', 'axios', 'i18n', 'npm', 'Git', 'Figma'],
    mainPreview: 'https://images.unsplash.com/photo-1556900253-f2ddf15183cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    images: ['payeer_1', 'payeer_2', 'payeer_3'],
    links: []
  },
  {
    id: 2,
    title: 'NFT art',
    subtitle: 'NFT collection',
    description: 'This project is for a client who specializes in NFT creation. I implemented the layouts in accordance with the client\'s design, and I collaborated closely with both a designer and the customer to develop the animations. By working together, we were able to create a visually stunning and engaging project that met the client\'s needs and exceeded their expectations.',
    tech: 'The application was built using the React library. One of the main challenges I faced was implementing the complex animation on the main screen, which I accomplished by leveraging the requestAnimationFrame function. Throughout the project, I applied the most common programming principles to ensure a high-quality codebase that is easy to read, understand, and maintain. By following best practices, I was able to deliver a robust and reliable application that met the client\'s needs.',
    skills: ['JavaScript', 'HTML', 'CSS', 'BEM', 'React', 'React Hooks', 'react-router', 'npm', 'Git', 'Figma'],
    mainPreview: 'https://images.unsplash.com/photo-1556900253-f2ddf15183cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    images: ['nft_1', 'nft_2', 'nft_3'],
    links: [
      {
        url: 'https://mlichlundia.github.io/nft-art/#/home',
        type: 'blank'
      }
    ]
  },
  {
    id: 3,
    title: 'Scrum Board',
    subtitle: 'Project management system',
    description: 'Scrum Board is a project management system that was inspired by the popular Jira app. Like Jira\'s little brother, Scrum Board is designed to help teams organize their work and track progress over time. The platform enables users to create custom columns and tasks, and easily move tasks from one column to another as they are completed. By providing an intuitive and user-friendly interface, Scrum Board could helps teams stay on top of their work and collaborate more effectively.',
    tech: 'This system was built using the React library and its hooks, along with several third-party libraries to enable HTTP requests, drag-and-drop functionality, and other key features. By leveraging these tools, I was able to deliver a high-quality application that is both robust and user-friendly. Throughout the development process, I followed the design to ensure that the final product was both visually appealing and easy to use. Overall, the result is a versatile and reliable system that meets the needs of users and supports their workflow.',
    skills: ['JavaScript', 'HTML', 'CSS', 'BEM', 'React', 'React Hooks', 'REST API', 'axios', 'immer', 'react-router', 'react-hook-form', 'react-beautiful-dnd', 'npm', 'Git', 'Figma'],
    mainPreview: 'https://images.unsplash.com/photo-1556900253-f2ddf15183cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    images: ['scrum_1', 'scrum_2', 'scrum_3'],
    links: [
      {
        url: 'https://mlichlundia.github.io/scrum_board/#/login',
        type: 'blank'
      }
    ]
  },
]
