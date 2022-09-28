"use strict";
exports.__esModule = true;
exports.createCompareTimeSql = exports.createFieldSql = void 0;
/**
* 返回sql(fieldName 为字段名称，value, index 为是否走索引)
*/
exports.createFieldSql = function (fieldName, value, index) {
    var _a, _b, _c;
    if (index === void 0) { index = false; }
    var sqlStr = '';
    if (!value) {
        sqlStr = '1=1';
        return { sqlStr: sqlStr, value: (_a = {}, _a[fieldName] = value, _a) };
    }
    if (index) {
        sqlStr = fieldName + " = " + fieldName;
        return { sqlStr: sqlStr, value: (_b = {}, _b[fieldName] = "" + value, _b) };
    }
    else {
        sqlStr = fieldName + " like :" + fieldName;
        return { sqlStr: sqlStr, value: (_c = {}, _c[fieldName] = "%" + value + "%", _c) };
    }
};
/**
* 返回比较时间sql
*/
exports.createCompareTimeSql = function (startTime, endTime) {
    var sqlStr = '';
    if (!startTime || !endTime) {
        sqlStr = '1=1';
        return { sqlStr: sqlStr, value: { startTime: startTime, endTime: endTime } };
    }
    sqlStr = "createTime BETWEEN :startTime AND :endTime";
    return { sqlStr: sqlStr, value: { startTime: startTime, endTime: endTime } };
};
