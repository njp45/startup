import React from 'react';

export function Create() {
  return (
    <main className="container-fluid bg-white text-center">
    <h2>Create Account</h2>
    <form method="get" action="write.html">
      <div className="input-group mb-1">
        <input className="form-control" type="text" placeholder="Username" required />
      </div>
      <div className="input-group mb-1">
        <input className="form-control" type="text" placeholder="Password" required />
      </div>
      <div className="input-group mb-1">
        <input className="form-control" type="text" placeholder="Confirm Password" required />
      </div>
      <button className="btn btn-primary" type="submit">Create</button>
    </form>
  </main>
  );
}