TODO APP - ANGULAR
==================
Installation
------------
```sh
$ git clone https://github.com/d9nny/todo_angular
```
Navigate to root directory of the project:
```sh
$ bower install 
$ npm install
```
To run locally:
```sh
$ npm run start
```
and navigate to 'http://localhost:8080' in your browser.

Testing
-------

To run the unit tests:
```sh
$ karma start test/karma.conf.js
```

To run the feature tests. In three differend terminal windows navigate to the root directory and in each window enter one of the below commands:
```sh
$ npm run start
```
```sh
$ npm run webdriver-manager start
```
```sh
npm run protractor test/protractor.conf.js
```
