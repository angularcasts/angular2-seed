/// <reference path="typings/angular2/angular2.d.ts" />

import { Component, View, bootstrap } from 'angular2/angular2';

@Component({
  selector: 'my-app'
})

@View({
template: '<h1>Greetings from {{ name }} !!!</h1>'
})

// Component controller
class MyAppComponent {
  name: string;

  constructor(){
    this.name = "Ashish singh";
  }
}

// Start my application
bootstrap(MyAppComponent);
