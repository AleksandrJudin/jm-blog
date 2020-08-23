"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
require("./ArticlesPost.sass");
var ArticlesPost = function (_a) {
    var title = _a.title, author = _a.author, createdAt = _a.createdAt, description = _a.description, favoritesCount = _a.favoritesCount, slug = _a.slug, tagList = _a.tagList, history = _a.history;
    var actions = [
        react_1["default"].createElement(antd_1.Tooltip, { key: 'comment-basic-like', title: 'Like' },
            react_1["default"].createElement("button", { className: 'post__like_btn', disabled: true },
                react_1["default"].createElement(icons_1.HeartOutlined, null),
                react_1["default"].createElement("span", { className: 'comment-action no-active' }, favoritesCount))),
    ];
    return (react_1["default"].createElement(antd_1.Comment, { actions: actions, author: react_1["default"].createElement("span", null, author.username), avatar: react_1["default"].createElement(antd_1.Avatar, { src: author.image, alt: 'Han Solo' }), content: react_1["default"].createElement("div", null,
            react_1["default"].createElement("ul", { className: 'tab__list' }, tagList.map(function (el) { return (react_1["default"].createElement("li", { key: "tags_" + el, className: 'tab__list_item' }, el)); })),
            react_1["default"].createElement("h2", { className: 'post__title', onClick: function () { return history.push("/articles/" + slug); } }, title),
            react_1["default"].createElement("p", null, description)), datetime: react_1["default"].createElement(antd_1.Tooltip, { title: createdAt },
            react_1["default"].createElement("span", null, createdAt.substring(0, 10))) }));
};
exports["default"] = react_router_dom_1.withRouter(ArticlesPost);
