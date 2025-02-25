import React from 'react';
import './post.css';

export function Post() {
  return (
    <main className="container-fluid bg-white text-center">
      <h2>Your text:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
      <div className="button-group">
        <span>
          <button className="btn btn-primary" type="button">Export</button>
        </span>
        <form method="get" action="read.html">
          <button className="btn btn-secondary" type="submit">Post</button>
        </form>
      </div>
    </main>
  );
}