import React from 'react';

function CreateCapsule() {
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
                <h2>Upload a New Capsule Here!</h2>
                <form action="/upload" method="post" encType="multipart/form-data">
                    <label htmlFor="fileUpload">Choose a file:</label>
                    <input type="file" id="fileUpload" name="fileUpload" required />
                    <br /><br />
                    <button type="submit">Upload</button>
                </form>
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

export default CreateCapsule;

