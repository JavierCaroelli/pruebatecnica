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
              <img src="/Assets/Path.svg" alt="path_icon_svg" className="Path" />
            </div>
          </div>
          <div className="StaBoxCntr">
            <div className="StaBox" style={{ borderRight: "1px solid #30353d" }}>
              <div className="StaCard" style={{ borderBottom: " 1px solid #30353d" }}>
                <img src="/Assets/menu.svg" alt="menu.svg" style={{ width: "20px" }} />
                <div className="StaText">
                  <h3>50</h3>
                  <p>Total Projects</p>
                </div>
              </div>
              <div className="StaCard">
                <img src="/Assets/flash.svg" alt="flash.svg" />
                <div className="StaText">
                  <h3>10</h3>
                  <p>In Progress</p>
                </div>
              </div>
            </div>
            <div className="StaBox">
              <div className="StaCard" style={{ borderBottom: " 1px solid #30353d" }}>
                <img src="/Assets/checked.svg" alt="checked.svg" />
                <div className="StaText">
                  <h3>15</h3>
                  <p>Completed</p>
                </div>
              </div>
              <div className="StaCard">
                <img src="/Assets/clock.svg" alt="clock.svg" />
                <div className="StaText">
                  <h3>2</h3>
                  <p>Delayed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="LastChart">
          <div className="Period">
            <h3>Day</h3>
            <h3>Week</h3>
            <h3 className="Active">Month</h3>
            <h3>Year</h3>
          </div>
          <div className="Money">
            <p style={{ fontWeight: "bold" }}>$</p>
            &nbsp;
            <h1>13,543</h1>
          </div>
          <div className="Graphic">
            <img src="/Assets/curve.png" alt="curve.png" style={{ width: "100%" }} />
          </div>
          <div className="Point"></div>
          <div className="Line"></div>
          <div className="Months">
            <h3>Jun</h3>
            <h3>Jul</h3>
            <h3>Aug</h3>
            <h3>Sep</h3>
            <h3 className="Active">Oct</h3>
            <h3>Nov</h3>
          </div>
        </div>

        <div className="Finish">
          <img src="/Assets/indicator.png" alt="indicator.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
