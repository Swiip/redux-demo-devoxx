import {StoreModule, combineReducers} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import * as todos from './todos';

const reducer = combineReducers(todos);

export const store = StoreModule.provideStore(reducer);
export const storeDevTools = StoreDevtoolsModule.instrumentOnlyWithExtension({maxAge: 5});
