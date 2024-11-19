import React from 'react';

function Capsules() {
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
                <h1 className="capsule-title">Capsules!</h1>
                <div className="capsule-container">
                    <div className="capsule">
                        <div>⏳</div>
                        <p>Time Capsule Created: 02/04/99</p>
                        <p>Time Capsule Locked Until: 04/04/04</p>
                        <p>Time Remaining: 05 Years, 2 Months, 0 Days</p>
                    </div>
                    <div className="capsule">
                        <div>⏳</div>
                        <p>Time Capsule Created: 01/01/01</p>
                        <p>Time Capsule Locked Until: 02/02/02</p>
                        <p>Time Remaining: 01 Year, 1 Month, 1 Day</p>
                    </div>
                    <div className="capsule">
                        <div>⏳</div>
                        <p>Time Capsule Created: 05/07/02</p>
                        <p>Time Capsule Locked Until:</p>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li><a href="index.html"><h1>UNLOCKED</h1></a></li>
                        </ul>
                        <p>Time Remaining: 0 Years, 0 Months, 0 Days</p>
                    </div>
                </div>

                <br /><br />
                <div style={{ textAlign: 'center' }}>
                    <a href="createCapsule.html" style={{ textDecoration: 'none' }}>
                        <button type="button">Create New Capsule</button>
                    </a>
                </div>
            </main>

            <footer>
                <hr />
                <div className="footer-content" style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="text-reset">Author Name(s)</span>
                    <a href="https://github.com/hufangaj/startup/tree/main/timeCapsule-html" style={{ marginLeft: '10px' }}>GitHub</a>
                    <img 
                        src="https://img.freepik.com/premium-psd/time-capsule-transparent-background_274326-2502.jpg" 
                        alt="Time Capsule" 
                        className="responsive-image" 
                        style={{ marginLeft: '10px', height: '50px' }} 
                    />
                </div>
            </footer>
        </div>
    );
}

export default Capsules;
