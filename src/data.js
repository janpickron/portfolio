// src/data.js
import blog_shot from './blog_app_screenshot.png'
import calc_shot from './calc_shot.png'
import todo_shot from './todo_shot.png'
import exp_tracker_shot from './exp_tracker_shot.png'

export const projects = [
    {
      title: "Full Stack Blog App",
      subtitle: "MERN Stack",
      description:
        "The Full-Stack Blog Application is a web-based platform that allows users to create, read, update, and delete blog posts. The application is built using JavaScript, utilizing React for the frontend and Node.js with Express for the backend.",
      image: blog_shot,
      link: "https://mern-blog-app-jan.web.app/",
    },
    {
      title: "Expense Tracker",
      subtitle: "Javascript and React",
      description:
        "This is a simple expense tracker app built with React that allows you to track your expenses and sort them by date. The app uses localStorage to save your expenses, so you won't lose your data even if you close the browser.",
      image: exp_tracker_shot,
      link: "https://react-expense-tracker-cgigznkxp-janpickron.vercel.app/",
    },
    {
      title: "To Do List",
      subtitle: "Javascript, HTML, CSS",
      description:
        "A simple to-do list application implemented with JavaScript, HTML, and CSS.",
      image: todo_shot,
      link: "https://javascript-todolist-xi.vercel.app/",
    },
    {
      title: "My Calculator App",
      subtitle: "Javascript",
      description:
        "This is a simple calculator web app built using JavaScript, HTML, and CSS. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      image: calc_shot,
      link: "https://javascript-calc-jan.web.app/",
    },
  ];