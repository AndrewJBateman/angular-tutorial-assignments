# Angular Tutorial Assignments

A collection of completed assignments and sections from [Maximilian Schwarzmüller's Angular 8 course](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview) on Udemy.

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

The [Udemy Angular 8 course](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview) course contains 32 sections, listed below:

**Section 1 Getting Started:** Explanation of Single Page Apps, Angular versions, Command Line Interface, general set-up of software, use of angular.json file to configure the CLI project - only change was to add bootstrap to the styles - see Code Examples section below.

**Section 2 The Basics:** Loading of Angular app, Components explained, Angular changes the DOM at run-time, AppComponent as root component, add decorators (e.g. @Component) to enhance a class (or other element) into a component. Components configured with a javascript object that adds metadata, including the selector, links to external html and css files.

Link components in the AppModule (an empty typescript class). Add NgModule and tell it about all the other components. Register new components in the declarations array and import the file path.

Using the CLI, adding components styles, the component selector: elements can also be selected by attribute (e.g. selector: '[app-server]') or class (e.g. '.app-server), like css.

Data-binding = Communication. Output data to html UI: String interpolation, Property binding. React to user events: event binding ((event)="expression"). Combination of the two = 2-way data-binding e.g. [(ngModel)] = "serName" - requires FormsModule. Property binding e.g. [disabled]="!allowServer".

Event Binding: react to events. String Interpolation, Property Binding, Event Binding. ($event) is a reserved variable name.

Directives: instructions in the DOM. Using *ngIf, using ng-template with else, ngStyle = attribute directive  - see Code Examples section below, ngClass = dynamically add/remove classes. ngFor to output lists and using index - see Code Examples section below.

**Section 3 Course Project - The Basics:** Project based on the above knowledge.

**Section 4 Debugging:** Understanding error messages, using dev console, sourcemaps, Augury.

**Section 5 Components & Databinding Deep Dive:** Splitting app into components, custom property binding. Using aliases for @input and @output is seen as an error by tslint - aliases 'bpcreated' and 'srvElement' etc. should not be used. Using 'services' is a much better way for components to talk to each other if they are far apart. View encapsulation - can be defined under @Component in the .ts file.

**Section 6 Course Project - Components & Databinding:** Explanation of .

**Section 7 Directives Deep Dive:** Explanation of .

**Section 8 Course Project - Directives:** Explanation of .

**Section 9 Using Services & Dependency Injection:** Explanation of . Assignment 9 Practising Services:

**Section 10 Course Project - Services & Dependency Injection:** Explanation of .

**Section 11 Changing Pages with Routing:** Explanation of .

**Section 12 Course Project - Routing:** Explanation of .

**Section 13 Understanding Observables NEW:** RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code. Run npm install for new code.

**Section 14 Course Project - Observables:** Explanation of .

**Section 15 Handling Forms:** Explanation of .

**Section 16 Course Project - Formw:** Explanation of .

**Section 17 Using Pipes to Transform Output:** Explanation of .

**Section 18 Making Http Requests NEW:** Explanation of Http & backend interaction. Firebase backend setup. Sending a POST request, Getting data, using RxJS operators to transform data. HttpClient types, outputting posts, showing a loading indicator, using a service for http requests, sending a DELETE request. The catchError operator. Error handling. Query params. Response body types. Use of interceptor services to add an auth or logging service. Run npm install for new Angular 8 code.

**Section 19 Course Project - Http:** Backend Firebase setup, Set up dataStorage service, store recipes, fetch recipes, transform response data, resolve data before loading. Run npm install and create new Firebase setup. Hide API keys.

**Section 20 Authentication & Route Protection NEW:** Adding an auth page, switching between auth modes, form inputs, Backend, Signup requests, error handling, login requests, login error handling. Creating & Storing User Data, Reflecting the Auth State in the UI, Adding Token to Outgoing Requests, Attaching Token with Interceptor. Run npm install for new Angular 8 code.

* [firebase docs: rest API - sign in with email/password](https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-sign-in-email-password)

**Section 21 Using Angular Modules and Optimising Apps:** Explanation of .

**Section 22 Deploying an Angular App:** Explanation of .

**Section 23 The HttpClient:** Explanation of .

**Section 24 Working with NgRx:** Explanation of .

**Section 25 Angular Universal:** Explanation of .

**Section 26 Angular Animations:** Explanation of .

**Section 27 Adding Offline Capability with Service Workers:** Explanation of .

**Section 28 Unit Testing:** Explanation of .

**Section 29 Angular Changes and New Features:** Explanation of .

**Section 30 Course Roundup:** Summary of course.

**Section 31 Custom Project & Workflow Setup:** Explanation of .

**Section 32 Typescript:** Explanation of .

## Screenshots

![Example screenshot](./img/.png)

## Technologies

* [Angular CLI v8.0.0](https://github.com/angular/angular-cli)
* [Angular framework v8.0.0](https://angular.io/)
* [RxJS Library](https://angular.io/guide/rx-library) version 6.3.3

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* **Section 1:** Angular.json file modified to include bootstrap styles:

```css
  "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ],

```

* **Section 2:** Include styles, using the ngStyle directive:

```html
  <p [ngStyle]="{backgroundColor: getColor()}">{{ 'server' }} with ID {{ serverId }} is {{ getServerStatus }}</p>

```

* Section 2: List items, using the ngFor directive:

```html
  <div ngFor="let logItem of log; let i = index"
  {{ logItem }}></div>

```

## Features

* Feature

## Status & To-Do List

* Status: documentation incomplete.

* To-Do: complete summary of course with links and add diagrams.

## Inspiration

[Maximilian Schwarzmüller's Angular 8 course](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
