import React from 'react';
import './write.css';

export function Write() {
  return (
    <main className="container-fluid bg-white text-center">
    <form method="get" action="post.html">
      <button className="btn btn-danger mb-1 w-100" type="submit">STOP</button>
      <div className="input-group flex-textarea">
        <textarea className="form-control large-textbox" placeholder="Begin typing..."></textarea>
      </div>
    </form>
  </main>
  );
}