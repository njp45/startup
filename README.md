# Erasr

[My Notes](notes.md)

A brief description of the application here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Erasr is an online writing service with the goal of helping writers be more productive. The site will feature a text box with a prompt to begin writing. Once the user begins writing in the text box, they must continue to do so without stopping. If they stop for more than a certain amount of time, the site will begin to slowly delete what they have written. 

Once they are done writing, the site will offer them the ability to export what they have written to a file type of their choice, with the goal being that they may now work on revision.

### Future Potential

The basic design of Erasr offers many future avenues of improvement. The site could be updated to allow users to share their Erasr text with one another, to offer feedback, to form Erasr-based writing groups, or even to work on a single Erasr block collaboratively.

The site could also incorporate the usage of generative artificial intelligence to further assist writers in the productivity of their rough draft stage.

### Design

![Design image](IMG_9097.jpg)

Site will feature two main pages, one home page for logging in and one with the text box.

### Key features

- Login page
- Real time display of how many words have been written using Erasr
- Text box with the erasing feature
- Buttons to stop the erasing and to export the text
- Ability to save text blocks to account

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Structure of the home/login page and the textbox page
- **CSS** - Styling and animation of the live updates as well as the erasing process
- **JS/React** - Reactivity for the textbox functionality and the buttons on the main page
- **Service** - Use of API to convert .txt file to type of the user's choice
- **DB/Login** - Collection of data on the amount each user has written.
- **WebSocket** - Rendering of how much has been written using Erasr

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.erasr.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Login, create, read, write, and post pages.
- [x] **Proper HTML element usage** - Self explanatory.
- [x] **Links** - Used links for the nav bar and the create account option.
- [x] **Text** - Text in the about page and placeholder text on the read page.
- [x] **3rd party API placeholder** - Placeholder for exporting converted file.
- [ ] **Images** - I did not complete this part of the deliverable.
- [x] **Login placeholder** - Login page with required fields for username and password.
- [x] **DB data placeholder** - Placeholder for how many words have been written by all users.
- [x] **WebSocket placeholder** - Placeholder for how many words have been written by all users.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - Header navbar, footer github link, and main content by page.
- [x] **Navigation elements** - Plain styled navbar with active link functionality.
- [x] **Responsive to window resizing** - Flexbox behavior where necessary and media queries to drop the header when necessary.
- [x] **Application elements** - Textbox and button on the write page.
- [x] **Application text content** - Plain styled user text posting.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
