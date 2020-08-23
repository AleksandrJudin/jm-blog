"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
require("./Header.sass");
var HeaderContent = antd_1.PageHeader;
var Header = function () {
    return (react_1["default"].createElement(HeaderContent, { className: 'site-page-header', title: 'My Super Blog', onBack: function () { return window.history.back(); }, subTitle: 'This is a subtitle', extra: [
            react_1["default"].createElement(antd_1.Button, { key: '3' }, "Sign In"),
            react_1["default"].createElement(antd_1.Button, { key: '2' }, "Sign Up"),
        ] }));
};
exports["default"] = Header;
