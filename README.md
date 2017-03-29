# Sparta Global Webdev4 Project 2: Restaurants and Foods
Team member on projects:    Mohammed Yafii

The projects goal was to put into practice the recent Node.js and express work we have covered. From this we had to have to models in a 1 to many relationship, so we choose one restaurant to its many foods on the menu. We though this could be neat trick to put your favourite local restaurant with its menu in one place, this could then be sent to people as some options if you are meting up at a later date.

We used Jquery to link the database to the front end and to also make the website a single page application(SPA), which was a new concept for us

##Getting started with npm installs and bower
> this is for you to fill in! how to:
> - install

This app contains JQuery from bower, also various web host packages in package.json, you can install both with this simple command.



```
$ npm install

```
This install will also cover
- body-parser,
- mongoose and mongodb,
- chai and mocha.
  as we did not pursue  extensive testing you can use any testing package you would prefer.
> - build



this app needs mongoose, mongo and mongod to host the back end for our rMVC project, it would be advised to open terminal and preceed to open two new tabs by pressing command  + T, in those tabs you can set up the data base by typing;

```
$ mongod

```
and the other

```
$ mongo

```


> - run

To run the app you must have nodemon running as this creates the server on the local host and will update it every time you save. The best way to do this is to
- go to the first terminal
- path to ying-and-yang repository
- use the command;

```
$ npm run nodemon

```

A live demo on heroku at : https://ying-and-yang.herokuapp.com/
