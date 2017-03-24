# Project 2: jQuery SPA


## The task

In pairs, your task is to build a JSON API with data of your choosing, and a single page application on the client-side. It can use any data you choose. Extra creativity is always welcome. It should include the following requirements: 

### Backend
 - should be built with Node, Express and Mongoose for the database
 - should serve one single page ejs file on which your front end single page app can function
 - should have two models with a unidirectional relationship
 - one model should have the CRUD actions, the other only requires creation 
 - should have an API structure that uses JSON to interact with the frontend
 - should follow the rMVC design pattern
 - should have all necessary middleware to serve both the index page for the single page app, and any other routes and endpoints needed for accessing the data in your backend and from the public API
 - should be fully tested using Mocha & Chai

Your backend should be as RESTful as possible but doesn't need all seven routes if they're not utilised by your application. You should configure your router and controllers as you need to to build your own app.

### Frontend
 - should use jQuery showing and hiding to navigate between "pages"
 - should all run from one single page, the `index.html` static file served from the Node app
 - should request data from your API using Ajax
 - _[optional]_ May use CSS framework like Bootstrap, MDL, etc

### Other
 - the project must be git tracked and stored remotely on Github. There **MUST** be sufficient git commits to show this has been done well.
 - the project must be well documented with a `README.md`
 - you must pair program efficiently
 - the code should be well commented and well formatted so it's clear what each section is doing
 - it must be presented to the class as a professional demonstration highlighting the app's features and any key successes and struggles faced during the project

## Before you start

- speak to me
- if it's too easy, I'll help you increase the scope
- likewise, if the scope is too great, we can reduce it
- plan your approach:
    - design the API **first**!
    - challenge: write the tests before implementing the code
    - only start to build the UI once you have a fully-functioning API and suite of tests

## Example

> **NOTE:** this is an example only, so you can't use it for your actual project :-)

For example, we could have Game and Player app:

- your app will allow a new Game to be created, edited, shown and deleted (CRUD)
- the home page could show a list of all games
- clicking on an individual game shows more detail for that game, and allows:
  - CRUD operations on the game itself
  - one or more Players to be added to the Game
  - for the MVP, no further actions need be available for a Player

## Deliverables

- complete by end of day Monday 26 March
- ready for presentation on Tuesday 27 March at 10:00am
- github codebase containing all source
- all API routes need to be tested using **Mocha** and **Chai**
- deployed game on a Heroku app
- a well-written `README.md` for the project, describing how to:
    - build it
    - run it
    - run the tests
- external libraries (JS & CSS) must be included via `bower` and/or `npm` (you may not distribute the library source code or use CDN versions of libraries)
- must conform to `eslint` rules

