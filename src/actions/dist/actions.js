"use strict";
exports.__esModule = true;
exports.getSinglePostRequest = exports.getPostRequest = exports.changeLoadingSinglePost = exports.changeLoadingAllPosts = exports.addSinglePost = exports.addPost = void 0;
var servicesAPI_1 = require("../services/servicesAPI");
exports.addPost = function (posts) { return ({
    type: 'ADD_POSTS',
    posts: posts
}); };
exports.addSinglePost = function (post) { return ({
    type: 'ADD_SINGLE_POST',
    post: post
}); };
exports.changeLoadingAllPosts = function (payload) { return ({
    type: 'LOADING_ALL_POSTS',
    payload: payload
}); };
exports.changeLoadingSinglePost = function (payload) { return ({
    type: 'LOADING_SINGLE_POST',
    payload: payload
}); };
exports.getPostRequest = function (offset) { return function (dispatch) {
    var posts = new servicesAPI_1["default"]();
    posts.getRequestArticles(offset).then(function (data) {
        dispatch(exports.addPost(data.articles));
        dispatch(exports.changeLoadingAllPosts(false));
    });
}; };
exports.getSinglePostRequest = function (slug) { return function (dispatch) {
    dispatch(exports.changeLoadingSinglePost(true));
    var post = new servicesAPI_1["default"]();
    post.getRequestSingleArticle(slug).then(function (data) {
        dispatch(exports.addSinglePost(data.article));
        dispatch(exports.changeLoadingSinglePost(false));
    });
}; };
