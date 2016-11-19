## Website Performance Optimization portfolio project

####Part 1: Optimize PageSpeed Insights score for index.html

1.Added async and minified perfmatters.js

2.Minified style.css, index.html

3.Compressed and resized images

4.Added media="print" to print.css


####Part 2: Optimize Frames per Second in pizza.html

Modifyied views/js/main.js to get 60 fps or higher.
1) Modified for loop in updatePositions function to lessen DOM requests
2) Decreased number of pizzas rendered to 70

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

####Part 2: Optimize Frames per Second in pizza.html

Check views/js/main.js using Chrome Dev Tools to verify frames per second rate is 60 fps or higher.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

###Link to source files used in this project: https://github.com/udacity/frontend-nanodegree-mobile-portfolio
