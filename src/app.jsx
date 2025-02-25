import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="body bg-light text-dark">
    <header>
      <nav className="navbar bg-light navbar-light">
        <a className="navbar-brand" href="#">
          <h2>Erasr</h2>
        </a>
        <menu className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="write.html">Write</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="post.html">Post</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="read.html">Read</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
        </menu>
      </nav>
    </header>

    <main className="container-fluid bg-white text-center">
      App content goes here
    </main>

    <footer className="bg-white">
      <hr />
      <span className="ghlink">Site <a href="https://github.com/njp45/startup" target="_blank"
          rel="noopener noreferrer">GitHub <i className="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></a></span>
    </footer>
  </div>;
}