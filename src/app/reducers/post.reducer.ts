import {initialState} from './../state';
import {POST_EDIT_TEXT, POST_LIKE, POST_DISLIKE, POST_RESET} from './../actions/post.actions';
import {PostInterface} from './../models/post.model';

export function postReducer(lastState: PostInterface, {type, payload}): PostInterface {
    switch (type) {
        case POST_EDIT_TEXT:
            return Object.assign({}, lastState, {text: payload});
        /* O método Object.assign faz uma cópia e merge dos objetos  substituido as propriedades iguais
        da esquerda para a direita.

        Exemplo:

        let teste = Object.assign({text: '1', likes: 1}, {text: '2'}, {likes: 3});
        teste = {text: '2', likes:3}
        */
        case POST_LIKE:
            return Object.assign({}, lastState, {likes: lastState.likes + 1});
        case POST_DISLIKE:
            return Object.assign({}, lastState, {likes: lastState.likes - 1});
        case POST_RESET:
            return Object.assign({}, initialState().post);
        default:
            return lastState;
    }
}
