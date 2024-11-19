import './App.css';
import './assets/images/header-icon.svg';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container header__container">
          <div className="logo">
            <h3>myteam</h3>
            <ul className="header-ul">
              <li className="header-li">
                <a href="#">home</a>
              </li>
              <li className="header-li">
                <a href="#">about</a>
              </li>
            </ul>
          </div>

          <div className="auth">
            <button>contact us</button>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container main__container">
          <div className="main-title">
            <h2>
              Find the best <span className="span">talent</span>
            </h2>
            <div className="main-nav">
              <button className="btn"></button>
              <p>
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div>
        <section className="section">
          <div className="section-title">
            <h2 className="section-title-title">
              Build & manage distributed teams like no one else.
            </h2>
          </div>
          <div className="section-main">
            <div className="section-main-first">
              <h2>Experienced Individuals</h2>
              <p>
                Our network is made up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>

            <div className="section-main-two">
              <h2>Easy to Implement</h2>
              <p>
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
            <div className="section-main-three">
              <h2>Enhanced Productivity</h2>
              <p>
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
