import { initialState } from './state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import { postReducer } from './reducers/post.reducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({
            post: postReducer
        }),
        StoreDevtoolsModule.instrument({
            maxAge: 100
        }),
        FormsModule
    ],
    providers: [
        {provide: INITIAL_STATE, useFactory: initialState}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
