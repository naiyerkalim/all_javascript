///React: A javascript library for building user interfaces.
//Components are independent and reusable bits of code. 
//They serve the same purpose as JavaScript functions, but work in isolation and return HTML
//component always returns a single element.

///Npm is a tool that use to install packages. Npx is a tool that use to execute packages.
/// If you wish to run package through npm then you have to specify that package in your package.json and install it locally.
// A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.
///ReactDom.render(): It controls the content of the container node you pass in.  

///JSX stands for JavaScript XML. JSX allows us to write HTML in React.

///Babel is ja compiler. it converts the JSX to vanilla JavaScript. 
//You can view babel as an intermediate step between your code and "executable" code. 
//React also uses ES6, which is not supported by most of the browsers. 
//Babel converts the ES6 code to a code which is compatible with the browsers.

//Webpack is a popular module bundling system built on top of Node. js. 
//It can handle not only combination and minification of JavaScript and CSS files, 
//but also other assets such as image files (spriting) through the use of plugins.

///Props are arguments passed into React components. 
//Props are passed to components via HTML attributes. props stands for properties.

///Components are independent and reusable bits of code. 

//for reactjs we need minimum 2 files: need to import 2 
//<1>. react and
//<2>. react-dom
//render(): show up.
//ReactDOM.render('what to show', 'where to show', callback function)
//in js we use DOM for getting id from html page.

//ReactDom return single parent element.
//js expression can be defined in jsx but not js initialization.
// An attribute is a property of an element used to provide access to additional data required for that specific element to process the output.
//In React, all DOM properties and attributes (including event handlers) should be camelCased.

///useState
//What is a Hook? A Hook is a special function that lets you “hook into” React features. 
//example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

//use of react constructor:
//1: initializing the local state by assigning an object to this.state.
//2: Binding event handler methods to an instance.

////React Life Cycle methods:
//It is the series of events that happens from the berth of the react component till its end.
//Every react component goes through 3 phases..
//1. Mounting: when react mounts or inserts component to DOM.
//2. Updating: When reacts updates its component whenever there is change of states or props.
//3. Unmounting: when react removes components from its DOM tree.

//Mounting phase: 
 //Constructor():
  //the constructor for a react component is called before it is mounted.
 //render():
  //it renders html to DOM
 //componentDidMount()
  //this mothi=od id called after your component is mounted and resdy.
  //in this method you can initiates the api call, load data from remote endpoint and also use setState() method.
//Updating phase:
 //componentDidUpdate() is invoked immediately after updating occures. this method is not called for the initial renders.

//Unmounting phase:
//this lifecycle method is called just before the component is unmounted and destryed.
//Re-rendering
//A second or subsequent render to update the state is called as re-rendering.
//Life Cycle methods
  //componentDidMount()
  //shouldComponentUpdate(nextProps, nextSates): let react know whether render should be triggered or not.
  //componentDidUpdate(prev prpos, prev states, snapshot)
  //componentWillUnmount()
  //getDerivedStatefromProps(props, state)// it gives a chance to copy any value from props//copy props into states
  //getSnapshotBeforeUpdate(): it called before render() and is use for capture some prperties which is not stored in the state
    //before we re-render that component.

///React Hooks:
 //react hooks provide a concept called context.
 //react context api allows you to easily access data at different levels of the component tree, without paasing props to every level.

 //when you need to paas only data around then use useContext instead redux.

 //useeffect
  //What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. 
  //React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

//useReducer
 //The useReducer hook is used for complex state manipulations and state transitions

//State in React
 //The state is a built in react object that is used to contain data or information about the comoponet.

//Q. How to prevent re-render in react component.
//useMemo: its returns memoized value.
//useCallback: It returns memoized function.
//Memoization using useMemo() and UseCallback() Hooks. 
//Memoization enables your code to re-render components only if there's a change in the props. 
//With this technique, developers can avoid unnecessary renderings and reduce the computational load in applications.




