"use strict";
exports.__esModule = true;
var isFetchingAllReducerDefaultState = true;
exports["default"] = (function (state, action) {
    if (state === void 0) { state = isFetchingAllReducerDefaultState; }
    switch (action.type) {
        case 'LOADING_ALL_POSTS':
            return (state = action.payload);
        default:
            return state;
    }
});
