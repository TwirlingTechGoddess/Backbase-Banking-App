# Backbase Banking App
This app was build by following along to this [Angular Tutorial](https://www.youtube.com/watch?v=TqBDr4OK4pU) by Javascript Evangelist.


The challenge was to create a complete #angular #Angular4 web application and also add Continuous Integration with CircleCI. Here I take the single JPG image of the app provided, aAnd required assets. Please note the icons given are not transparent as shown in the preview image, so we quickly clean them up using Photoshop.

We generate following components:
-- header
-= app-root
-- make-transfer component (which is going to be just a dummy component cause you cant really make an online transfer, you
    need API's like stripe or some dummy API's which will take much more time, I'm sure some of you can give it a try and post
    here in comments, I will try my best to help you all.)
-- recent-transactions component
-- transactions-row component (responsive flow)
-- search-filters component
-- transactions Service
-- transactions JSON map

Once I get the desired design with html and css, I write our JavaScript code to get the dynamic application behaviour.


```npm install @angular/cli```

```npm audit fix```

Screenshot of full overall layout:
![layout](https://github.com/TwirlingGoddess/Backbase-Banking-App/blob/master/Screen%20Shot%202019-04-16%20at%207.34.26%20PM.png)

Close-up of filter and search functionalty:
![close-up](https://github.com/TwirlingGoddess/Backbase-Banking-App/blob/master/Screen%20Shot%202019-04-16%20at%207.35.29%20PM.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
