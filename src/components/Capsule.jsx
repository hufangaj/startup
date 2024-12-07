import React from 'react';

export default function Capsule({ created, locked, remaining, unlocked }) {
  return (
    <div className="capsule">
      <div>⏳</div>
      <p>Time Capsule Created: {created}</p>
      {unlocked ? (
        <h1>
        <a href="/" style={{ color: 'green', textDecoration: 'none' }}>UNLOCKED</a>
      </h1>
      ) : (
        <>
          <p>Time Capsule Locked Until: {locked}</p>
          <p>Time Remaining: {remaining}</p>
        </>
      )}
    </div>
  );
}
