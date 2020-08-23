"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var actions_1 = require("../actions/actions");
var ArticlePage = function (_a) {
    var match = _a.match;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(actions_1.getSinglePostRequest(match.params.slug));
    }, [dispatch, match.params.slug]);
    var state = react_redux_1.useSelector(function (state) { return state; });
    var Title = antd_1.Typography.Title, Paragraph = antd_1.Typography.Paragraph;
    var getSinglePost = state.getSinglePost, isFetchingSinglePost = state.isFetchingSinglePost;
    var title = getSinglePost.title, body = getSinglePost.body, createdAt = getSinglePost.createdAt, favoritesCount = getSinglePost.favoritesCount, tagList = getSinglePost.tagList, description = getSinglePost.description, author = getSinglePost.author;
    var createTagList = tagList && (react_1["default"].createElement("ul", { className: 'tab__list' }, tagList.map(function (el) { return (react_1["default"].createElement("li", { key: "tags_" + el, className: 'tab__list_item' }, el)); })));
    var content = !isFetchingSinglePost && (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'd-flex justify-content-between mt-4' },
            react_1["default"].createElement("div", { className: 'd-flex' },
                react_1["default"].createElement(Title, { className: 'pr-3', level: 4 }, title),
                react_1["default"].createElement(antd_1.Tooltip, { key: 'comment-basic-like-sdasf', title: 'Like' },
                    react_1["default"].createElement("button", { className: 'post__like_btn', disabled: true },
                        react_1["default"].createElement(icons_1.HeartOutlined, null),
                        react_1["default"].createElement("span", { className: 'comment-action' }, favoritesCount)))),
            react_1["default"].createElement("div", { className: 'author d-flex' },
                react_1["default"].createElement("div", { className: 'pr-3' },
                    react_1["default"].createElement("span", { className: 'd-block text-center' }, author.username),
                    react_1["default"].createElement("span", { className: 'text-center' }, createdAt.substring(0, 10))),
                react_1["default"].createElement(antd_1.Avatar, { src: author.image, alt: 'Han Solo' }))),
        createTagList,
        react_1["default"].createElement("p", null, description),
        react_1["default"].createElement(Paragraph, null, body)));
    return isFetchingSinglePost ? react_1["default"].createElement(antd_1.Spin, { size: 'large' }) : content;
};
exports["default"] = ArticlePage;
