import { types } from '../../actions/types';
import postsReducers from './reducer';


describe('Posts reducers', () => {
    
    it('Should return the default state',()=>{
        const newState = postsReducers(undefined, {});
        expect(newState).toStrictEqual([]);
    })

    it('Should return new state if reciving types',()=>{
        const posts =  [{title:'post1'}, {title:'post2'}, {title:'post3'}, {title:'post4'}];
        const newState = postsReducers(undefined, {
            type : types.GET_POST,
            payload : posts,
        });

        expect(newState).toBe(posts)
    })

})
