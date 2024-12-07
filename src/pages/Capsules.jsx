import React from 'react';
import Capsule from '../components/Capsule';  // Import Capsule component

export default function Capsules() {
  const capsules = [
    { created: '02/04/99', locked: '04/04/04', remaining: '5 Years, 2 Months, 0 Days' },
    { created: '01/01/01', locked: '02/02/02', remaining: '1 Year, 1 Month, 1 Day' },
    { created: '05/07/02', unlocked: true },
  ];

  return (
    <main>
      <h1>Capsules</h1>
      <div className="capsule-container">
        {capsules.map((capsule, index) => (
          <Capsule key={index} {...capsule} />  // Passing capsule data to Capsule component
        ))}
      </div>
    </main>
  );
}


