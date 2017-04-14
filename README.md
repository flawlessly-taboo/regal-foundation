# regal-foundation
Website for clothing storefront.

# About Bootstrap

This site was built with [Bootstrap 4.0.0](https://v4-alpha.getbootstrap.com/).

# Using Gulp and Node

Gulp allows us to run a few fun processes, namely a simple webserver to help render our pages as they would in the final product. Node runs the server in question, which we'll need to install.

Install Node [here](https://nodejs.org/en/) using the "Recommended For Most Users" option. This installs Node and a packaging program called ["npm"](https://www.npmjs.com/) that handles installation of Gulp and its related packages.

Once installed, open a command prompt window and type in:

> npm install gulp-cli -g
> npm install gulp -D

Gulp is now installed! We can then open a new command prompt inside our project repo and take gulp for a spin! Run:

> npm install
> gulp

And you'll see a few things going on, namely that a web server is now running. This is our website! Go to a web browser and go to `localhost://3000` to access the webpage. 

If there are further problems, submit an issue report.

# Gulp Commands

Default Task
------------

    gulp

Running the default task automatically watches your project folders for any changes and runs the accompanying task. For example, if you've elected to run tasks on your JavaScript, anytime you change a JavaScript file gulp will automatically run those tasks, including a browser refresh if you've included BrowserSync.

CSS
---
    gulp styles

Running the gulp styles task will run your selected CSS tasks once. (Currently does nothing)

JavaScript
----------

    gulp scripts

Running the gulp scripts task will run your selected JavaScript tasks once. (Currently does nothing)

Images
------

    gulp images

Running the gulp images task will run your selected image tasks once. (Currently does nothing)

