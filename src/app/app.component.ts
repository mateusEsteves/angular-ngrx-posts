import { POST_EDIT_TEXT, POST_RESET, POST_LIKE, POST_DISLIKE } from './actions/post.actions';
import { State } from './state';
import { PostInterface } from './models/post.model';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    post: Observable<PostInterface>;
    @Input() text: string;

    constructor(private store: Store<State>) {
        this.post = this.store.select('post');
    }

    public editText() {
        this.store.dispatch({ type: POST_EDIT_TEXT, payload: this.text });
    }

    public like() {
        this.store.dispatch({ type: POST_LIKE });
    }

    public dislike() {
        this.store.dispatch({ type: POST_DISLIKE });
    }

    public resetPost() {
        this.store.dispatch({ type: POST_RESET });
    }
}
