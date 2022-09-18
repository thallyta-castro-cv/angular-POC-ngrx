import { ActionReducerMap } from "@ngrx/store";
import { Person } from "../shared/models/person";
import * as fromPersonReducer from "./person.reducer";

export interface AppState {
  people: fromPersonReducer.PeopleState;
}

export const appReducers : ActionReducerMap<AppState> = {
  people: fromPersonReducer.reducer
}
