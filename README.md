# Angular 4 example app with @ngrx

This application was made for learning purposes.

I made this application based on the following tutorial:
[Angular Redux quickstart with @ngrx](https://angularfirebase.com/lessons/angular-ngrx-redux-starter-guide/)

## Some files

**src/app/app.module.ts:** Contains the initialization code for the app and the store.

In this file I pass the reducers and the initial state to the store, and import the StoreDevtoolsModule. 

**src/app/state.ts:** Here I delcare the State interface, and the initialState() function,
which is declared as a function.

**src/app/actions/post.actions.ts:** Contains the actions for the posts. 
They where declared as constants to better organization.

**src/app/models/post.model.ts:** Just an interface for Post objects.

**src/app/reducers/post.reducer.ts:** The reducer function for the posts.