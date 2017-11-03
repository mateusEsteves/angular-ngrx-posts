import {PostInterface} from './models/post.model';

export interface State {
    post: PostInterface;
}

export const initialState = (): State => {
    return {
        post: {
            text: 'Default Post',
            likes: 0
        }
    };
};
