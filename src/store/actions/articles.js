import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-base';

export const setArticles = ( articles, user ) => {
    return {
        type: actionTypes.SET_ARTICLES,
        articles: articles
    };
};

export const fetchArticlesFailed = () => {
    return {
        type: actionTypes.FETCH_ARTICLES_FAIL
    };
};

export const fetchArticlesSuccess = () => {
    return {
        type: actionTypes.FETCH_ARTICLES_SUCCESS
    };
};

export const postArticle = (articleData, callback) => {
    return dispatch => {
        axios.post( '/articles.json?',articleData)
            .then( response => {
                console.log( response.data );
                callback();
            } )
            .catch( error => {
                dispatch( fetchArticlesFailed( error ) );
            } );
    };
};

export const fetchArticles = () => {
    return dispatch => {
        axios.get( '/articles.json' )
            .then( response => {
               dispatch(setArticles(response.data));
            } )
            .catch( error => {
                dispatch(fetchArticlesFailed());
            } );
    };
};