import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="container-fluid bg-white text-center">
      <h2>Log In</h2>
      <form method="get" action="write.html">
        <div className="input-group mb-1">
          <input className="form-control required-placeholder" type="text" placeholder="Username" required />
        </div>
        <div className="input-group mb-1">
          <input className="form-control" type="password" placeholder="Password" required />
        </div>
        <button className="btn btn-primary" type="submit">Log In</button>
      </form>
      <div>Don't have an account? <a href="create.html">Create one.</a></div>
    </main>
  );
}