# :zap: Angular Tutorial Assignments

* A collection of completed assignments and sections from [Maximilian Schwarzmüller's Angular 8 course](https://www.udemy.com/the-complete-guide-to-angular-2/) on Udemy.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* The [Udemy Angular 8 course](https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview) course contains 32 sections, listed below:

**Section 1 Getting Started:** Explanation of Single Page Apps, Angular versions, Command Line Interface, general set-up of software, use of angular.json file to configure the CLI project - only change was to add bootstrap to the styles - see Code Examples section below.

**Section 2 The Basics:** Loading of Angular app, Components explained, Angular changes the DOM at run-time, AppComponent as root component, add decorators (e.g. @Component) to enhance a class (or other element) into a component. Components configured with a javascript object that adds metadata, including the selector, links to external html and css files.

Link components in the AppModule (an empty typescript class). Add NgModule and tell it about all the other components. Register new components in the declarations array and import the file path.

Using the CLI, adding components styles, the component selector: elements can also be selected by attribute (e.g. selector: '[app-server]') or class (e.g. '.app-server), like css.

Data-binding = Communication. Output data to html UI: String interpolation, Property binding. React to user events: event binding ((event)="expression"). Combination of the two = 2-way data-binding e.g. [(ngModel)] = "serName" - requires FormsModule. Property binding e.g. [disabled]="!allowServer".

Event Binding: react to events. String Interpolation, Property Binding, Event Binding. ($event) is a reserved variable name.

Directives: instructions in the DOM. Using *ngIf, using ng-template with else, ngStyle = attribute directive  - see Code Examples section below, ngClass = dynamically add/remove classes. ngFor to output lists and using index - see Code Examples section below.

**Section 2 Assignment 1: Practising Components** The solution is in [this git repo](https://github.com/AndrewJBateman/angular-tutorial-app).

**Section 2 Assignment 2: Practising Databinding** The solution is in [this git repo](https://github.com/AndrewJBateman/angular-tutorial-app).

**Section 3 Course Project - The Basics:** Project based on the above knowledge.

**Section 4 Debugging:** Understanding error messages, using dev console, sourcemaps, Augury.

**Section 5 Components & Databinding Deep Dive:** Splitting app into components, custom property binding. Using aliases for @input and @output is seen as an error by tslint - aliases 'bpcreated' and 'srvElement' etc. should not be used. Using 'services' is a much better way for components to talk to each other if they are far apart. View encapsulation - can be defined under @Component in the .ts file.

**Section 6 Course Project - Components & Databinding:** Explanation of .

**Section 7 Directives Deep Dive:** Explanation of .

**Section 8 Course Project - Directives:** Building and Using a Dropdown Directive, Closing the Dropdown from Anywhere..

**Section 9 Using Services & Dependency Injection:** Logging Service, Injecting the Logging Service, Data Service, Injecting Services, Using Services for Cross-Component Communication.

**Section 9 Assignment 5 Practising Services:** Updated to Angular 8, all dependencies updated using ncu -u, latest code added from tutorial.

**Section 10 Course Project - Services & Dependency Injection:** Explanation of .

**Section 11 Changing Pages with Routing:** Using routing to Navigate to other parts of the single-page-app.

**Section 12 Course Project - Routing:** Explanation of .

**Section 13 Understanding Observables NEW:** RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code. Run npm install for new code.

**Section 14 Course Project - Observables:** This is in [a separate github repo](https://github.com/AndrewJBateman/angular-tutorial-recipe-shopping). Therea re some updates to include observables.

**Section 15 Handling Forms:** Explanation of .

**Section 16 Course Project - Formw:** Explanation of .

**Section 17 Using Pipes to Transform Output:** Explanation of .

**Section 18 Making Http Requests NEW:** Explanation of Http & backend interaction. Firebase backend setup. Sending a POST request, Getting data, using RxJS operators to transform data. HttpClient types, outputting posts, showing a loading indicator, using a service for http requests, sending a DELETE request. The catchError operator. Error handling. Query params. Response body types. Use of interceptor services to add an auth or logging service. Run npm install for new Angular 8 code.

**Section 19 Course Project - Http:** Backend Firebase setup, Set up dataStorage service, store recipes, fetch recipes, transform response data, resolve data before loading. Run npm install and create new Firebase setup. Hide API keys.

**Section 20 Authentication & Route Protection NEW:** Adding an auth page, switching between auth modes, form inputs, Backend, Signup requests, error handling, login requests, login error handling. Creating & Storing User Data, Reflecting the Auth State in the UI, Adding Token to Outgoing Requests, Attaching Token with Interceptor. Adding logout, Adding auto-login, adding auto-logout, adding an auth guard. Run npm install for new Angular 8 code.

* [firebase docs: rest API - sign in with email/password](https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-sign-in-email-password)

* [Information on JSON Web Tokens](https://jwt.io/introduction/)

**Section 21 Dynamic Components NEW:** Adding an alert modal, ngIf, creating Components Programmatically, entryComponents, Data Binding, Event Binding.

* [Angular Dynamic Components Guide](https://angular.io/guide/dynamic-component-loader)

**Section 22 Angular Modules and Optimizing Angular Apps NEW** Modules, the AppModule, Feature Modules, Splitting Modules, Adding Routes to Feature Modules, Component Declarations, Shared Modules, Core Module, Auth Feature Module, Lazy Loading, Modules and Services, Ahead-of-Time Compilation.

**Section 23 Deploying an Angular App** Preparation, Environment variables, Firebase Hosting, Server vs Browser Routing.

**Section 24 Working with NgRx:** Application state, Reducers, Reducer Logic, Adding Actions, NgRx Store, Selecting State, Actions, Update and Delete, Expanding the State, Managing state via NgRx, Auth Reducers & Actions, Auth Actions, NgRx Effects, Managing UI State in NgRx, AutoLogin, Store DevTools, the Router Store, Auth Redirect.

* [ngrx/effects: side effect model for Store](https://ngrx.io/guide/effects) long-running services that listen to an observable of every action dispatched from the Store, isolating side-effects from components.

* [NGRX Reactive State for Angular - official website](https://ngrx.io/)

**Section 25 Angular Universal:** Adding Angular Universal and NestJS, Deploying Universal Apps, Server-Side Build Workflow, NodeJS Server, Pre-Rendering App on the Server, Next Steps.

**Section 26 Angular Animations:** Explanation of .

**Section 27 Adding Offline Capability with Service Workers:** Service Workers, Caching Assets for Offline Use, Caching Dynamic Assets & URLs.

**Section 28 Unit Testing:** Unit Tests, Analyzing Tests, Running Tests, Testing Dependencies: Components and Services, Simulating Async Tasks, Isolated and non-Isolated Tests.

**Section 29 Angular Changes and New Features:** Angular 8 changes, Angular Elements.

**Section 30 Course Roundup:** Summary of course.

**Section 31 Custom Project & Workflow Setup:** Explanation of .

**Section 32 Typescript:** Tyes, Classes, Interfaces, Generics

## :camera: Screenshots

![Example screenshot](./img/.png)

## :signal_strength: Technologies

* [Angular CLI v8.0.0](https://github.com/angular/angular-cli)
* [Angular framework v8.0.0](https://angular.io/)
* [RxJS Library v6.3.3](https://angular.io/guide/rx-library)

## :floppy_disk: Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## :computer: Code Examples

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

## :cool: Features

* updated to angular8

## :clipboard: Status & To-Do List

* Status: documentation incomplete.
* To-Do: complete summary of course with links and add diagrams.

## :clap: Inspiration

* [Maximilian Schwarzmüller's Angular 8 course](https://www.udemy.com/the-complete-guide-to-angular-2/)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
