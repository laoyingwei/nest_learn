"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TasksModule = void 0;
var common_1 = require("@nestjs/common");
var order_module_1 = require("../../../../../../../../../src/modules/order/order.module");
var tasks_service_1 = require("./tasks.service");
var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        common_1.Module({
            imports: [
                order_module_1.OrderModule
            ],
            providers: [
                tasks_service_1.TasksService
            ]
        })
    ], TasksModule);
    return TasksModule;
}());
exports.TasksModule = TasksModule;
