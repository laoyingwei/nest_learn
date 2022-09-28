"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var memberDto_1 = require("../../../../../../../../../../src/modules/member/memberDto");
var member_service_1 = require("../../../../../../../../../../src/modules/member/member.service");
var member_entity_1 = require("../../../../../../../../../../src/entity/member.entity");
var AuthService = /** @class */ (function () {
    function AuthService(userService, jwtService, httpService, configService, memberService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.httpService = httpService;
        this.configService = configService;
        this.memberService = memberService;
    }
    AuthService.prototype.validateUser = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.findOneByAccount(account)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param account
     * @param password
     * @returns 后台登录
     */
    AuthService.prototype.login = function (account, password) {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            return __generator(this, function (_a) {
                payload = { account: account, password: password, role: 'admin' };
                return [2 /*return*/, {
                        access_token: this.jwtService.sign(payload)
                    }];
            });
        });
    };
    AuthService.prototype.wxLogin = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var js_code, userInfo, appid, secret, wxLoginResults, _a, errcode, errmsg, openid, session_key, userData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        js_code = data.code, userInfo = data.userInfo;
                        appid = this.configService.get('AppID');
                        secret = this.configService.get('AppSecret');
                        return [4 /*yield*/, this.httpService.axiosRef.get("https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&js_code=" + js_code + "&grant_type=authorization_code")];
                    case 1:
                        wxLoginResults = _b.sent();
                        _a = wxLoginResults.data, errcode = _a.errcode, errmsg = _a.errmsg, openid = _a.openid, session_key = _a.session_key;
                        if (errcode) {
                            switch (errcode) {
                                case -1:
                                    throw new common_1.HttpException('系统繁忙，此时请开发者稍候再试', 500);
                                    break;
                                case 40029:
                                    throw new common_1.HttpException('code 无效', 500);
                                    break;
                                case 45011:
                                    throw new common_1.HttpException('频率限制，每个用户每分钟100次', 500);
                                case 40226:
                                    throw new common_1.HttpException('高风险等级用户，小程序登录拦截', 500);
                                    break;
                                default:
                                    break;
                            }
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.memberService.createMember(__assign(__assign({}, userInfo), { icon: userInfo.avatarUrl, sessionKey: session_key, openId: openid }))];
                    case 2:
                        userData = _b.sent();
                        return [2 /*return*/, {
                                userInfo: __assign(__assign({}, userData), { openId: '', sessionKey: '' }),
                                access_token: this.jwtService.sign({
                                    openId: openid,
                                    nickName: userData.nickName,
                                    id: userData.id,
                                    sessionKey: session_key
                                })
                            }
                            // wxLoginResults.subscribe()
                            // return wxLoginResults
                        ];
                }
            });
        });
    };
    AuthService = __decorate([
        common_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
