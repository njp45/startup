import React from 'react';
import './about.css';

export function About() {
  return (
    <main>
      <h3>What is Erasr?</h3>
      <p>
        Erasr is a simple web application that allows users to write and export text.
        The catch? Users can only stop writing for a certain amount of time before their text begins
        to be deleted. The goal is to encourage users to write as much as they can in a short amount
        of time, and to see what they can come up with in the process.
      </p>
      <p>
        Once users have finished writing, they can post their text to the site for others to read.
        They also have the option to export the text to an external document for them to continue
        editing. Erasr does not allow users to revise their text in-app, as the goal is to encourage
        productivity in the rough drafting process.
      </p>
      <p>
        For more information, see the README file in the GitHub repository below.
      </p>
      <h3>FAQ</h3>
      <p>We have yet to be asked any questions.</p>
    </main>
  );
}