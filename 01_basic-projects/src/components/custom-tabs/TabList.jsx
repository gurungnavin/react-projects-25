import React from 'react'
import Tabs from './Tabs'

export default function TabList(){
  const tabs = [
    {
      label: 'Frontend',
      content: (
        <div>
          <p>
            Frontend development is a crucial aspect of modern web and application development. It focuses on creating the visual and interactive elements that users directly engage with. The primary goal of frontend development is to ensure an intuitive, responsive, and visually appealing user interface (UI) that enhances the overall user experience (UX). 
          </p>
          <p>
            Frontend developers work with core technologies such as HTML, CSS, and JavaScript. HTML (HyperText Markup Language) provides the structure of a webpage, CSS (Cascading Style Sheets) is used for styling and layout, and JavaScript adds interactivity and dynamic behavior. Beyond these foundational technologies, developers often use frameworks and libraries like React, Angular, or Vue.js to streamline development and manage complex UI components efficiently.
          </p>
          <p>
            A significant aspect of frontend development is ensuring cross-browser compatibility and responsiveness. This means that websites and applications should function seamlessly across different browsers (e.g., Chrome, Firefox, Safari) and devices (e.g., desktops, tablets, smartphones). Tools like CSS media queries and frameworks like Bootstrap help achieve this goal.
          </p>
          <p>
            Frontend development also involves optimizing performance to ensure fast loading times and smooth interactions. Techniques such as lazy loading, code splitting, and image optimization are commonly employed. Additionally, accessibility is a critical consideration, ensuring that applications are usable by people with disabilities. This includes adhering to standards like WCAG (Web Content Accessibility Guidelines) and using semantic HTML.
          </p>
        </div>
      ),
    },
    {
      label: 'Backend',
      content: (
        <div>
          <p>
            Backend development is the backbone of any web or mobile application. It focuses on the server-side logic, databases, and APIs that power the functionality of an application. While frontend development deals with what users see and interact with, backend development ensures that everything works seamlessly behind the scenes.
          </p>
          <p>
            Backend developers work with server-side programming languages such as Node.js, Python, Ruby, PHP, or Java. These languages are used to write the logic that processes user requests, interacts with databases, and returns the appropriate responses. For example, when a user submits a form on a website, the backend processes the data, stores it in a database, and provides feedback to the user.
          </p>
          <p>
            Databases are a critical component of backend development. They store and manage the data that applications rely on. Common database systems include relational databases like MySQL and PostgreSQL, as well as NoSQL databases like MongoDB and Cassandra. Backend developers design and optimize database schemas to ensure efficient data storage and retrieval.
          </p>
          <p>
            APIs (Application Programming Interfaces) are another essential aspect of backend development. They allow different parts of an application to communicate with each other and enable integration with third-party services. RESTful APIs and GraphQL are popular approaches for building APIs.
          </p>
          <p>
            Security is a top priority in backend development. Developers implement measures such as data encryption, authentication, and authorization to protect sensitive information and prevent unauthorized access. Scalability is also a key consideration, ensuring that applications can handle increasing traffic and data loads as they grow.
          </p>
        </div>
      ),
    },
    {
      label: 'Full Stack',
      content: (
        <div>
          <p>
            Full Stack development is a comprehensive approach to web and application development that combines both frontend and backend skills. Full Stack developers are versatile professionals who can handle the entire development process, from designing user interfaces to implementing server-side logic and managing databases.
          </p>
          <p>
            On the frontend, Full Stack developers work with technologies like HTML, CSS, and JavaScript, along with frameworks such as React, Angular, or Vue.js. They create responsive and visually appealing user interfaces that provide an excellent user experience. On the backend, they use server-side languages like Node.js, Python, Ruby, or Java to build the logic that powers the application. They also work with databases, designing schemas and writing queries to store and retrieve data efficiently.
          </p>
          <p>
            Full Stack developers often use tools and frameworks that streamline the development process. For example, they might use MERN (MongoDB, Express.js, React, Node.js) or MEAN (MongoDB, Express.js, Angular, Node.js) stacks to build applications. These stacks provide a cohesive set of technologies that work well together.
          </p>
          <p>
            One of the key advantages of Full Stack development is the ability to understand and manage the entire application. This holistic perspective allows developers to identify and resolve issues more effectively, as they have a deep understanding of how different parts of the application interact.
          </p>
          <p>
            Full Stack developers are also well-suited for working in agile environments, where they can contribute to multiple aspects of a project. Their versatility makes them valuable team members who can adapt to changing requirements and take on diverse tasks.
          </p>
          <p>
            In summary, Full Stack development is about mastering both frontend and backend technologies to create complete, end-to-end applications. It requires a broad skill set, adaptability, and a deep understanding of the entire development process.
          </p>
        </div>
      ),
    },
    {
      label: 'Mobile Development',
      content: (
        <div>
          <p>
            Mobile development focuses on creating applications specifically designed for mobile devices, such as smartphones and tablets. With the increasing use of mobile devices, mobile development has become a critical area of software engineering, enabling businesses to reach users on the go.
          </p>
          <p>
            Mobile applications can be developed using native, cross-platform, or hybrid approaches. Native development involves building applications specifically for a particular platform, such as iOS or Android. For iOS, developers use Swift or Objective-C, while for Android, they use Kotlin or Java. Native apps offer the best performance and access to platform-specific features but require separate codebases for each platform.
          </p>
          <p>
            Cross-platform development allows developers to create applications that run on multiple platforms using a single codebase. Frameworks like React Native, Flutter, and Xamarin are popular choices for cross-platform development. These frameworks save time and resources while still delivering a near-native experience.
          </p>
          <p>
            Hybrid development combines elements of native and web development. Hybrid apps are built using web technologies like HTML, CSS, and JavaScript and are wrapped in a native container. Tools like Apache Cordova and Ionic are commonly used for hybrid development.
          </p>
          <p>
            Mobile development also involves considerations such as performance optimization, battery efficiency, and user experience design. Developers must ensure that applications run smoothly on devices with varying screen sizes, hardware capabilities, and operating systems.
          </p>
          <p>
            In conclusion, mobile development is about creating applications that provide a seamless and engaging experience on mobile devices. It requires a deep understanding of mobile platforms, development frameworks, and user behavior.
          </p>
        </div>
      ),
    },
    {
      label: 'Data Science',
      content: (
        <div>
          <p>
            Data science is an interdisciplinary field that focuses on extracting insights and knowledge from data. It combines elements of statistics, computer science, and domain expertise to analyze and interpret complex datasets. Data science plays a crucial role in decision-making across various industries, including healthcare, finance, marketing, and technology.
          </p>
          <p>
            The data science process typically involves several steps, starting with data collection. Data can come from various sources, such as databases, APIs, sensors, or web scraping. Once collected, the data is cleaned and preprocessed to remove inconsistencies, handle missing values, and prepare it for analysis.
          </p>
          <p>
            Exploratory data analysis (EDA) is a key step in data science. It involves visualizing and summarizing the data to identify patterns, trends, and anomalies. Tools like Python's Pandas and Matplotlib, or R's ggplot2, are commonly used for EDA.
          </p>
          <p>
            Machine learning is a core component of data science. It involves building models that can make predictions or uncover patterns in data. Popular machine learning algorithms include linear regression, decision trees, and neural networks. Frameworks like TensorFlow, PyTorch, and Scikit-learn are widely used for implementing machine learning models.
          </p>
          <p>
            Data visualization is another important aspect of data science. It involves creating charts, graphs, and dashboards to communicate insights effectively. Tools like Tableau, Power BI, and Python's Seaborn are commonly used for data visualization.
          </p>
          <p>
            In summary, data science is about leveraging data to gain insights and drive decision-making. It requires a combination of technical skills, analytical thinking, and domain knowledge to solve complex problems and uncover valuable insights.
          </p>
        </div>
      ),
    }
  ]

  // const handleTabClick = (index) => {}
  return (
    <Tabs tabContent = {tabs} />
  )
}

