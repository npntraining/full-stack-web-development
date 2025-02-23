function App() {
    const handleClick = () => {
      alert('Button clicked!');
    };
  
    return (
      <>
        <h1>My First Vite React App</h1>
        <button onClick={handleClick}>Click Me!</button>
      </>
    );
  }
  
  export default App;
  