import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="Content">
        <div className="Header">
          <img src="/Assets/back.svg" alt="back_button" className="BackButton" />
          <h3>Tasks</h3>
          <img src="/Assets/bell.svg" alt="bell_icon" />
        </div>
        <div className="Create">
          <h3>CREATE +</h3>
        </div>
        <div className="Selection">
          <h3 className="Active">All</h3>
          <h3>In Progress</h3>
          <h3>Started</h3>
          <h3>Complete</h3>
        </div>
        <div className="Upcoming">
          <h3 className="Label">Upcoming Tasks</h3>
          <h3 className="Tasks">5</h3>
        </div>
        <div className="BoxContainer">
          <div className="Box">
            <h3>Order #890PO90</h3>
            <p>Bryan Williams</p>
            <div className="Progress">
              <p>Progress</p>
              <p>20%</p>
            </div>
            <div className="ProgressBar"></div>
            <div className="ProgressPercent"></div>
            <div className="TimeLeft">1 day left</div>
          </div>
          <div className="Box">
            <h3>Order #890PO91</h3>
            <p>Marcus Klaus</p>
            <div className="Progress">
              <p>Progress</p>
              <p>20%</p>
            </div>
            <div className="ProgressBar"></div>
            <div className="ProgressPercent"></div>
            <div className="TimeLeft">1 day left</div>
          </div>
        </div>

        <div className="Statistics">
          <div className="Header">
            <h3>Statistics</h3>
            <div className="Download">
              <img src="/Assets/download.svg" alt="download_icon.svg" />
              <img src="/Assets/path.svg" alt="path_icon_svg" className="Path" />
            </div>
          </div>
          <div className="StaBoxCntr">
            <table>
              <tr>
                <td>1</td> <td>2</td>
              </tr>
              <tr>
                <td>1</td> <td>2</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
