import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './shared/models/person';
import * as faker from 'faker-br';
import { select, Store } from '@ngrx/store';
import { AppState } from './store/index';
import { PersonAll, PersonNew, PersonUpdate, PersonDelete } from './store/person.actions';

import * as fromPersonSelector from "./store/person.selectors"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public people$: Observable<Person[]>

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getAllPeople();
  }

  public addNew(): void {
    let person: Person = {
      name: faker.name.findName(),
      age: Math.round(Math.random() * 100),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      country: faker.address.country(),
      id: new Date().getMilliseconds().toString(),
    };

    this.store.dispatch(new PersonNew({person}));
  }

  public update(p: Person) {
      let person = JSON.parse(JSON.stringify(p));

      person.name = faker.name.findName(),
      person.age = Math.round(Math.random() * 100),
      person.address = faker.address.streetAddress(),
      person.city = faker.address.city(),
      person.country = faker.address.country()

      this.store.dispatch(new PersonUpdate({id: person.id, changes: person}));
  }

  public delete(person: Person) {
    this.store.dispatch(new PersonDelete({id: person.id}))
  }

  public getAllPeople() {
    this.store.dispatch(new PersonAll());
    this.people$ = this.store.select(fromPersonSelector.selectAll);
  }
}
