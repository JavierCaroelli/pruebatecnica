import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="Content">
        <div className="Header">
          <img src="/Assets/back.svg" alt="back button" />
          <h3>Tasks</h3>
          <img src="/Assets/bell.svg" alt="back button" />
        </div>
        <div className="Create">
          <h3>CREATE +</h3>
        </div>
        <div className="Selection">
          <h3>All</h3>
          <h3>In Progress</h3>
          <h3>Started</h3>
          <h3>Complete</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
