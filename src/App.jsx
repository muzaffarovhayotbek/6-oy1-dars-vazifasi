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
          <div className="container section__container">
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
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <article className="article">
          <div className="container article__container">
            <div className="article-title">
              <h2>
                Delivering real results for top companies. Some of our{' '}
                <span>success stories.</span>
              </h2>
            </div>
            <div className="article-main">
              <div className="article-main-first">
                <p>
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <h2>Kady Baker</h2>
                <h3>Product Manager at Bookmark</h3>
              </div>

              <div className="article-main-two">
                <p>
                  “We needed to automate our entire onboarding process. The team
                  came in and built out the whole journey. Since going live,
                  user retention has gone through the roof!”
                </p>
                <h3>Aiysha Reese</h3>
                <h4>Founder of Manage</h4>
              </div>
              <div className="article-main-three">
                <p>
                  “Amazing. Our team helped us build an app that delivered a new
                  experience for hiring a physio. The launch was an instant
                  success with 100k downloads in the first month.”
                </p>
                <h2>Arthur Clarke</h2>
                <h3>Co-founder of MyPhysio</h3>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
