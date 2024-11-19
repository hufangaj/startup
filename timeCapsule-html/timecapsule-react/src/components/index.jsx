import React from 'react';

function Index() {
  return (
    <div>
      <header>
        <h1 className="title">Mobile Time Capsule</h1>
        <nav>
          <ul className="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="capsules.html">Capsules</a></li>
            <li><a href="createCapsule.html">Create Capsule</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1 className="welcome-title">Welcome to the Mobile Time Capsule</h1>
        <form method="get" action="play.html">
          <div>
            <span>UserID</span>
            <input type="text" placeholder="Julia Hufanga" />
          </div>
          <div>
            <span>🔒</span>
            <input type="password" placeholder="password" />
          </div>
          <a href="capsules.html" style={{ textDecoration: 'none' }}>
            <button type="button">Login</button>
          </a>
          <button type="submit">Create</button>
        </form>
      </main>

      <footer>
        <hr />
        <div className="footer-content" style={{ display: 'flex', alignItems: 'center' }}>
          <span className="text-reset">Author Name(s)</span>
          <a href="https://github.com/hufangaj/startup/tree/main/timeCapsule-html" style={{ marginLeft: '10px' }}>GitHub</a>
          <img src="https://img.freepik.com/premium-psd/time-capsule-transparent-background_274326-2502.jpg" alt="Time Capsule" className="responsive-image" style={{ marginLeft: '10px', height: '50px' }} />
        </div>
      </footer>
    </div>
  );
}

export default Index;

