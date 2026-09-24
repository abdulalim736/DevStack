PROJECT NAME: Dev Stack Builder

DESCRIPTION:
Choose your technology add to stack according your need. As a full stack web developer which technology
you need you can choose easily from here.

TECHNOLOGIES ARE USED:
1.React
2.TypeScript
3.Vite
4.Tailwind CSS
5. Daisy UI
6. React Toastify
7.React Icons
8. Font awaysome.

FEATURES:
- Browse development technologies.
- Build a personalized technology stack.
- Add and remove technologies dynamically.

QUESTION AND ANSWER:

1. What is JSX, and why is it used in React?
Answer: JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes React UI development easier.

2.What is the difference between props and state?
Answer: Props are used to pass data from parent to child, while state stores data that can change inside a component.

3. What does the useState hook do, and where did you use it in this project?
Answer: I used useState to manage changing data in my React component, such as search input, selected items, or UI state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: I used useEffect to load JSON data when the component mounts. After fetching the data, I stored it in state using setDevelopers.

5. Why does every item in a .map() list need a unique key prop?
Answer: A unique key helps React identify list items and efficiently update the DOM when the list changes.

6. What is conditional rendering? Give an example from this project.
Answer: Conditional rendering means showing different UI based on a condition. In my project, I can show a loading message while JSON data is loading and display developer cards after the data is loaded.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer: We pass data from parent to child using props. To communicate from child to parent, we pass a callback function as a prop, and the child calls that function to send data back. 
