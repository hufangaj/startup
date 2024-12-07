import React, { useState } from 'react';

export default function CreateCapsule() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createdDate, setCreatedDate] = useState('');
  const [lockedDate, setLockedDate] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const capsuleData = {
      name,
      description,
      createdDate,
      lockedDate,
      file,
    };

    console.log('Creating Capsule:', capsuleData);

    setName('');
    setDescription('');
    setCreatedDate('');
    setLockedDate('');
    setFile(null);
  };

  return (
    <main>
      <h1>Create a New Time Capsule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Capsule Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="createdDate">Creation Date</label>
          <input
            type="date"
            id="createdDate"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="lockedDate">Locked Until</label>
          <input
            type="date"
            id="lockedDate"
            value={lockedDate}
            onChange={(e) => setLockedDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="file">Upload File</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button type="submit">Create Capsule</button>
      </form>
    </main>
  );
}
