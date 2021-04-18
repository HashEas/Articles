import * as actionTypes from '../actions/actionTypes';

const initialState = {
    articles: []
};

const failArticles = ( state ) => {
    return {
        articles: []
    };
};

const setArticles = ( state , action) => {
    return {
        ...state,
        articles: action.articles
    };
};

const articlesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ARTICLES_FAIL: return failArticles( state, action );
        case actionTypes.SET_ARTICLES: return setArticles( state, action );
        default: return state;
    }
};

export default articlesReducer;