"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CustomException = void 0;
var common_1 = require("@nestjs/common");
/**
* 自定义异常
*/
var CustomException = /** @class */ (function (_super) {
    __extends(CustomException, _super);
    function CustomException(errorMessage, errorCode, statusCode) {
        if (statusCode === void 0) { statusCode = common_1.HttpStatus.BAD_REQUEST; }
        var _this = _super.call(this, errorMessage, statusCode) || this;
        _this.errorMessage = errorMessage;
        _this.errorCode = errorCode;
        return _this;
    }
    CustomException.prototype.getErrorCode = function () {
        return this.errorCode;
    };
    CustomException.prototype.getErrorMessage = function () {
        return this.errorMessage;
    };
    return CustomException;
}(common_1.HttpException));
exports.CustomException = CustomException;
