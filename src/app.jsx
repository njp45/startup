import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Write } from './write/write';
import { Post } from './post/post';
import { Read } from './read/read';
import { About } from './about/about';
import { Create } from './create/create';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-light text-dark">
        <header>
          <nav className="navbar bg-light navbar-light">
            <NavLink className="navbar-brand" to="/">
              <h2>Erasr</h2>
            </NavLink>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="write">Write</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="post">Post</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="read">Read</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">About</NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/write" element={<Write />} />
          <Route path="/post" element={<Post />} />
          <Route path="/read" element={<Read />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
        </Routes>

        <footer className="bg-white">
          <hr />
          <span className="ghlink">Site <NavLink to="https://github.com/njp45/startup" target="_blank"
            rel="noopener noreferrer">GitHub <i className="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></NavLink></span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}