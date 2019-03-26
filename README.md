# Angular Tutorial Assignments

A collection of completed assignments and sections from [Maximilian Schwarzmüller's Angular 7 course](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview) on Udemy.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

The [Udemy Angular 7 course](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview) course contains 32 sections, listed below:

**Section 1 Getting Started:** Explanation of Single Page Apps, Angular versions, Command Line Interface, general set-up of software, use of angular.json file to configure the CLI project - only change was to add bootstrap to the styles - see below:

**Section 2 The Basics:** Loading of Angular app, Components explained, Angular changes the DOM at run-time, AppComponent as root component, add decorators (e.g. @Component) to enhance a class (or other element) into a component. Components configured with a javascript object that adds metadata, including the selector, links to external html and css files.

Link component in the AppModule (an empty typescript class). Add NgModule and tell it about all the other components. Register new components in the declarations array and import the file path.

Using the CLI, adding components styles, the component selector: elements can also be selected by attribute (e.g. selector: '[app-server]') or class (e.g. '.app-server), like css.

Data-binding = Communication. Output data to html UI: String interpolation, Property binding. React to user events: event binding ((event)="expression"). Combination of the two = 2-way data-binding. [(ngModel)] = "data". Property binding e.g. [disabled]="!allowServer.

Event Binding: react to events.

String Interpolation, Property Binding, Event Binding,

**Section 3 Course Project - The Basics:** Explanation of .

**Section 4 Debugging:** Explanation of .

**Section 5 Components & Databinding Deep Dive:** Explanation of .

**Section 6 Course Project - Components & Databinding:** Explanation of .

**Section 7 Directives Deep Dive:** Explanation of .

**Section 8 Course Project - Directives:** Explanation of .

**Section 9 Using Services & Dependency Injection:** Explanation of .

**Section 10 Course Project - Services & Dependency Injection:** Explanation of .

**Section 11 Changing Pages with Routing:** Explanation of .

**Section 12 Course Project - Routing:** Explanation of .

**Section 13 Understanding Observables:** RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.

**Section 14 Course Project - Observables:** Explanation of .

**Section 15 Handling Forms:** Explanation of .

**Section 16 Course Project - Formw:** Explanation of .

**Section 17 Using Pipes to Transform Output:** Explanation of .

**Section 18 Making Http Requests:** Explanation of .

**Section 19 Course Project - Http:** Explanation of .

**Section 20 Authentatication & Route Protection:** Explanation of .

## Screenshots

![Example screenshot](./img/.png)

## Technologies

* [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6
* [Angular Material](https://material.angular.io/)
* [RxJS Library](https://angular.io/guide/rx-library) version 6.3.3

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code Examples

* Angular.json file modified to include bootstrap styles:

```css
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],

```

## Features

* Feature

## Status & To-Do List

* Status: documentation incomplete.

* To-Do: complete summary of course with links and add diagrams.

## Inspiration

All code is from [Maximilian Schwarzmüller's Angular 7 course](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
