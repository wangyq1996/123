# Modern React with Redux [2020 Update]

-   [Course Notes](#course-notes)

1.  -   [x] Let's Dive In!
2.  -   [x] Building Content with JSX
3.  -   [x] Communicating with Props
4.  -   [x] Structuring Apps with Class-Based Components
5.  -   [x] State in React Components
6.  -   [ ] Understanding Lifecycle Methods
7.  -   [ ] Handling User Input with Forms and Events
8.  -   [ ] Making API Requests with React
9.  -   [ ] Building Lists of Records
10. -   [ ] Using Ref's for DOM Access
11. -   [ ] Let's Test Your React Mastery!
12. -   [ ] Understanding Hooks in React
13. -   [ ] Navigation From Scratch
14. -   [ ] Hooks in Practice
15. -   [ ] Deploying a React App
16. -   [ ] On We Go...To Redux!
17. -   [ ] Integrating React with Redux
18. -   [ ] Async Actions with Redux Thunk
19. -   [ ] Redux Store Design
20. -   [ ] Navigation with React Router
21. -   [ ] Handling Authentication with React
22. -   [ ] Redux Dev Tools
23. -   [ ] Handling Forms with Redux Form
24. -   [ ] REST-Based React Apps
25. -   [ ] Using React Portals
26. -   [ ] Implementing Streaming Video
27. -   [ ] The Context System with React
28. -   [ ] Replacing Redux with Context
29. -   [ ] Important - Do Not Skip
30. -   [ ] Working with Older Versions of React
31. -   [ ] Bonus!

## **Course Notes**

### **Catalog:**

-   [**React Basics**](#react-basics)
    -   [JSX vs HTML](#jsx-vs-html)
    -   [Functional VS Class Components](#functional-vs-class-components)
    -   [Rules of State](#rules-of-state)
    -   [React Lifecyle]($react-lifecyle)

## **React Basics:**

### JSX vs HTML:

-   Inline sytling:

    HTML:

    ```
        <div style="background-color:red;"></div>
    ```

    JSX:

    ```
        <div style={{backgroundColor:'red'}}></div>
    ```

-   class vs className:

    HTML:

    ```
        <div class="test"></div>
    ```

    JSX:

    ```
        <div className="test"></div>
    ```

-   JSX can use JS variables

### Functional VS Class Components:

### Rules of State:

-   Only usable with class components (need React Hooks in function components)
-   'State' is a JS object
-   Updating 'state' on a component causes the component instantly **rerender**
-   'State' can only be updated using 'setState' function
-   Only write the keys needs to be updated (others will stay untouched)

### React Lifecyle:

-   constructor

    **Not reconmended for data loading (like calling API)**
    
    Do it in **componentDidMount**

-   render

    Content show on the screen

-   componentDidMount

    Sit & wait for update

-   componentDidUpdate

    Sit & wait until no longer shown

-   componentWillUnmount
