class Di
{
    static set(key, value)
    {
        if (key == "" || typeof key == "undefined" || value == "" || typeof value == "undefined") {
            throw "Key and value must not be empty in \"Di\"";
        }
        if (typeof Di.di == "undefined") {
            Di.di = {};
        }
        Di.di[key] = value;
    }
    static get(key)
    {
        if (key == "" || typeof key == "undefined") {
            throw "Key must not be empty in \"Di\"";
        }
        return Di.di[key];
    }
    static getAll()
    {
        if (typeof Di.di == "undefined") {
            Di.di = {};
        }
        return Di.di;
    }
}
class Service
{
    constructor()
    {
        this.di = Di;
    }
    set(key, value)
    {
        this.di.set(key, value);
    }
    get(key)
    {
        return this.di.get(key);
    }
}
class Container
{
    constructor()
    {
        this.container = {};
    }
    set(key, value)
    {
        this.container[key] = value;
    }
    get(key)
    {
        return this.container[key];
    }
}
class LocalStorage
{
    constructor()
    {

    }
    set(key, value)
    {
        localStorage.setItem(
            key,
            value
        );
        return;
    }
    get(key)
    {
        return localStorage.getItem(
            key
        );
    }
}
class SessionStorage
{
    constructor()
    {

    }
    set(key, value)
    {
        sessionStorage.setItem(
            key,
            value
        );
        return;
    }
    get(key)
    {
        return sessionStorage.getItem(
            key
        );
    }
}
class Injectable
{
    getValidator(resolveProperties = null)
    {
        let validator = {
            get: function (target, name) {
                switch (name) {
                    case "em":
                        return this.getDi().get("em");
                    case "ajax":
                        return this.getDi().get("ajax");
                    case "dom":
                        return this.getDi().get("dom");
                    case "eventManager":
                        return this.getDi().get("eventManager");
                    case "uuid":
                        return this.getDi().get("uuid");
                    case "url":
                        return this.getDi().get("url");
                    case "setViewModel":
                        return target[name];
                    case "getViewModel":
                        return target[name];
                    default:
                        return target[name];
                }
            }
        }
        return validator;
    }
    getDi()
    {
        return new Service();
    }
    inject(obj, fn = null)
    {
        return new Proxy(
            obj,
            this.getValidator(fn)
        );
    }
}
class Url extends Service
{
    constructor()
    {
        super();
    }
    getQuery(url = false)
    {
        if (url == false) {
            url = document.URL;
        }
        var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
        var obj = {};
        if (queryString) {
            queryString = queryString.split('#')[0];
            var arr = queryString.split('&');

            for (var i = 0; i < arr.length; i++) {
                var a = arr[i].split('=');
                var paramNum = undefined;
                var paramName = a[0].replace(/\[\d*\]/, function(v) {
                    paramNum = v.slice(1,-1);
                    return '';
                });

                var paramValue = typeof(a[1])==='undefined' ? true : a[1];

                if (obj[paramName]) {
                    if (typeof obj[paramName] === 'string') {
                        obj[paramName] = [obj[paramName]];
                    }
                    if (typeof paramNum === 'undefined') {
                        obj[paramName].push(paramValue);
                    } else {
                        obj[paramName][paramNum] = paramValue;
                    }
                } else {
                    obj[paramName] = paramValue;
                }
            }
        }
        return obj;
    }
}
class Scope
{
    static get LOCAL() { return 0 };
    static get DEV() { return 1; }
    static get TEST() { return 2; }
    static get QA() { return 3; }
    static get STAGING() { return 4; }
    static get PRODUCTION() { return 5; }
}
class AppConfig
{
    constructor()
    {
        this.config = {};
    }
    setConfig(config, env = Scope.LOCAL)
    {
        this.config[env] = config;
    }
    getConfig(env = Scope.LOCAL)
    {
        return this.config[env];
    }
}
class Message
{
    static get NOT_VALID_ARRAY() { return "The object returned in the transaction is not array"; }
    static get NOT_VALID_ARRAY_OBJECT() { return "The objects returned in the transaction into array are not objects, every row must be object key, value"; }
    static get NOT_VALID_OBJECT() { return "The received variable is not an object"; }
    static getCodeMessage(code, custom)
    {
        var custom = " => " + custom;
        switch (code) {
            case MessageCode.NOT_VALID_ARRAY:
                return Message.NOT_VALID_ARRAY + custom;
            case MessageCode.NOT_VALID_ARRAY_OBJECT:
                return Message.NOT_VALID_ARRAY_OBJECT + custom;
            case MessageCode.NOT_VALID_OBJECT:
                return Message.NOT_VALID_OBJECT + custom;
        }
    }
}
class MessageCode
{
    static get NOT_VALID_ARRAY() { return 1; }
    static get NOT_VALID_ARRAY_OBJECT() { return 2; }
    static get NOT_VALID_OBJECT() { return 3; }
}
class Uuid
{
    constructor()
    {
        
    }
    static get()
    {
        return MathHelper.getS4() + MathHelper.getS4() + '-' +
                MathHelper.getS4() + '-' + MathHelper.getS4() + '-' +
                MathHelper.getS4() + '-' + MathHelper.getS4() +
                MathHelper.getS4() + MathHelper.getS4();
    }
}
class MathHelper
{
    constructor()
    {

    }
    static getRandom(init, last) {
        return Math.floor((Math.random() * last) + init);
    }
    static getUUID()
    {
        return this.getS4() + this.getS4() + '-' +
                this.getS4() + '-' + this.getS4() + '-' +
                this.getS4() + '-' + this.getS4() +
                this.getS4() + this.getS4();
    }
    static getS4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
}
class StringHelper
{
    constructor()
    {

    }
    static sanitizeString(str) {
        let idTr = str.replace(/[`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
        idTr = idTr.toString().replace(/\s/g, "");
        return idTr;
    }
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static ucfirst(str)
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static lcfirst(str)
    {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
}
class Validator
{
    static validStructArray(data)
    {
        try {
            if (Array.isArray(data)) {
                var firstPosition = data[0];
                if (typeof firstPosition == "object") {
                    return true;
                } else {
                    throw Message.NOT_VALID_ARRAY_OBJECT;
                }
            } else {
                throw Message.NOT_VALID_ARRAY;
            }
        } catch (e) {

        }
    }
}
class Transaction
{
    constructor()
    {

    }
    get(row)
    {

    }
}
class ComparisonOperators
{
    static get AND() { return "&&"; }
    static get OR() { return "||"; }
    static get EQUAL() { return "=="; }
    static get DIFFERENT() { return "!="; }
}
class DataType
{
    static get BOOLEAN() { return 1; }
    static get INTEGER() { return 2; }
    static get STRING() { return 3; }
    static get OBJECT() { return 4; }
    static get ARRAY() { return 5; }
    static get CLASS() { return 6; }

    static get BOOLEAN_TYPE() { return "boolean"; }
    static get INTEGER_TYPE() { return "number"; }
    static get STRING_TYPE() { return "string"; }
    static get OBJECT_TYPE() { return "object"; }

    static getValueByType(value)
    {
        var tyof = typeof value;
        switch (tyof) {
            case DataType.STRING_TYPE:
                    value = "\"" + value + "\"";
                break;
        }
        return value;
    }
}
class Group extends Transaction
{
    constructor()
    {
        super();
    }
    get()
    {

    }
}
class Gt extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = {};
        if (typeof condition == "object") {
            this.condition = condition;
        } else {
            throw "And condition must be an object";
        }
    }
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        for (var key in row) {
            if (row[key] > this.condition[key]) {
                result.push(true);
            }
        }
        if (result.length != size) {
            return false;
        }
        for (var i = 1; i <= size; i++) {
            if (result[i] == false) {
                return false;
            }
        }
        return true;
    }
}
class Gte extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = {};
        if (typeof condition == "object") {
            this.condition = condition;
        } else {
            throw "And condition must be an object";
        }
    }
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        for (var key in row) {
            if (row[key] >= this.condition[key]) {
                result.push(true);
            }
        }
        if (result.length != size) {
            return false;
        }
        for (var i = 1; i <= size; i++) {
            if (result[i] == false) {
                return false;
            }
        }
        return true;
    }
}
class In extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = new Array();
        if (typeof condition == "object") {
            for (var key in condition) {
                if (condition[key] instanceof Array) {
                    var row = condition[key];
                    for (var key2 in row) {
                        var value2 = DataType.getValueByType(row[key2]);
                        this.conditions.push(
                            "row[\"" + key + "\"]" + " == " + value2
                        );
                    }
                } else {
                    throw "Not in value should be array";
                }
            }
        } else {
            throw "Not condition must be an object";
        }
    }
    get()
    {
        return "(" + this.conditions.join(" || ") + ")";
    }
}
class Like extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = {};
        if (typeof condition == "object") {
            this.condition = condition;
            return;
        }
        throw "And condition must be an object";            
    }
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        for (var key in this.condition) {
            if (this.condition[key] != "" && typeof row[key] == "string") {
                //console.log("->", row[key], this.condition[key], this.condition[key].replace(/[^A-Za-z0-9\s]/g, ""));
                var regexp = new RegExp(this.condition[key], "i");                    
                if (regexp.test(row[key].replace(/([^a-z_0-9\s]+)/gi, ''))) {
                        return true;
                }
                return false;
            }
        }
        return false;
    }
}
class Lt extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = {};
        if (typeof condition == "object") {
            this.condition = condition;
        } else {
            throw "And condition must be an object";
        }
    }
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        for (var key in row) {
            if (row[key] < this.condition[key]) {
                result.push(true);
            }
        }
        if (result.length != size) {
            return false;
        }
        for (var i = 1; i <= size; i++) {
            if (result[i] == false) {
                return false;
            }
        }
        return true;
    }
}
class Lte extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = {};
        if (typeof condition == "object") {
            this.condition = condition;
        } else {
            throw "And condition must be an object";
        }
    }
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        for (var key in row) {
            if (row[key] <= this.condition[key]) {
                result.push(true);
            }
        }
        if (result.length != size) {
            return false;
        }
        for (var i = 1; i <= size; i++) {
            if (result[i] == false) {
                return false;
            }
        }
        return true;
    }
}
class Not extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = {};
        if (typeof condition == "object") {
            this.condition = condition;
        } else {
            throw "And condition must be an object";
        }
    }
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        for (var key in row) {
            if (row[key] == this.condition[key]) {
                result.push(true);
            }
        }
        for (var i = 0; i < size; i++) {
            if (result[i] == true) {
                return false;
            }
        }
        return true;
    }
}
class NotIn extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = new Array;
        if (typeof condition == "object") {
            for (var key in condition) {
                if (condition[key] instanceof Array) {
                    var row = condition[key];
                    for (var key2 in row) {
                        var value2 = DataType.getValueByType(row[key2]);
                        this.conditions.push(
                            "row[\"" + key + "\"]" + " != " + value2
                        );
                    }
                } else {
                    throw "Not in value should be array";
                }
            }
        } else {
            throw "Not condition must be an object";
        }
    }
    get()
    {
        return "(" + this.conditions.join(" && ") + ")";
    }
}
class Operators
{
    static get OR() { return "$or"; }
    static get AND() { return "$and"; }
    static get SORT() { return "$sort"; }
    static get IS_NOT() { return "$isNot"; }
    static get LIMIT() { return "$limit"; }
    static get COLUMNS() { return "$columns"; }
    static get CONDITIONAL() { return "$conditions"; }
}
class Or extends Transaction
{
    constructor(condition)
    {
        super();
        this.condition = {};
        if (typeof condition == "object") {
            this.condition = condition;
        } else {
            throw "And condition must be an object";
        }
    }
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        if (this.condition instanceof Transaction) {
            result.push(
                this.condition.get(row)
            );
        }
        for (var key in row) {
            if (this.condition[key] instanceof Transaction) {
                result.push(
                    this.condition[key].get(row)
                );
            } else {
                if (row[key] == this.condition[key]) {
                    result.push(true);
                }
            }
        }
        for (let i = 0; i < size; i++) {
            if (result[i] == true) {
                return true;
            }
        }
        return false;
    }
}
class QSort
{
    static get ASC() { return 1; }
    static get DESC() { return -1; }

    static sortByField(data, field) {

        var arr = [];
        for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
                var obj = {};
                obj[prop] = data[prop];
                obj.tempSortName = data[prop][field].toLowerCase();
                arr.push(obj);
            }
        }

        arr.sort(function(a, b) {
            var at = a.tempSortName,
                bt = b.tempSortName;
            return at > bt ? 1 : ( at < bt ? -1 : 0 );
        });

        var result = [];
        for (var i = 0, l = arr.length; i < l; i++) {
            var obj = arr[i];
            delete obj.tempSortName;
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    var id = prop;
                }
            }
            var item = obj[id];
            result.push(item);
        }
        return result;
    }
}
class Query
{
    constructor(data = false)
    {
        this.data = data;
        this.lim  = null;
        this.sort = new Array;
        this.cols = new Array;
        this.conds = null;
        this.sortConds = false;
        this.transactions = new Array;
        this.negativeConds = null;
        tjis.negativeTransactions = new Array;
    }
    columns(cols)
    {
        if (typeof cols == "object") {
            this.cols = cols;
        } else {
            throw "Column param must be an object";
        }
        return this;
    }
    getColumns()
    {
        return Object.keys(this.data[0]);
    }
    resolveColumns(row)
    {
        var newRow = {};
        if (Object.keys(this.cols).length > 0) {
            for (let key in this.cols) {
                newRow[this.cols[key]] = row[this.cols[key]];
            }
        } else {
            newRow = Object.keys(row);
        }
        return newRow;
    }
    where(conditions)
    {
        if (conditions instanceof Transaction) {
            if (conditions instanceof Not || conditions instanceof NotIn) {
                this.negativeTransactions.push(
                    conditions
                );
                this.negativeConds++;
            } else {
                this.transactions.push(
                    conditions
                );
                this.conds++;
            }
        }
        return this;
    }
    limit(limit)
    {
        if (typeof limit == "number") {
            this.lim = limit;
        } else {
            throw "limit must be number";
        }
        return this;
    }
    addOperator(length, operator)
    {
        var cond = "";
        if (length > 0) {
            cond = operator + " ";
        }
        return cond;
    }
    orderBy(sortContent)
    {
        this.sort = sortContent;
        this.sortConds = true;
    }
    resolveSort(results)
    {
        switch (typeof this.sort) {
            case DataType.STRING_TYPE:
                    results = QSort.sortByField(
                        results,
                        this.sort
                    );
                break;
            case DataType.OBJECT_TYPE:
                    if (this.sort instanceof Array) {
                        for (let sortKey in this.sort) {
                            let sortValue = this.sort[sortKey];
                            results = QSort.sortByField(
                                results,
                                sortValue
                            );
                        }
                    } else {
                        for (let sortKey in this.sort) {
                            let sortType = this.sort[sortKey];
                            results = QSort.sortByField(
                                results,
                                sortKey
                            );
                            if (this.sort[sortKey] == QSort.DESC) {
                                results = results.reverse();
                            }
                        }
                    }
                break;
        }
        return results;
    }
    miniChecksum(row)
    {
        var str  = JSON.stringify(row);
        var hash = 0;
        var char = 0;
        if (str.length == 0) return hash;
        for (var i = 0; i < str.length; i++) {
            char = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }
    ifExistOnResult(result, row)
    {
        for (var key in result) {
            if (this.miniChecksum(result[key]) == this.miniChecksum(row)) {
                return false;
            }
        }
        return true;
    }
    get()
    {
        var results = new Array;
        var limit = 1;
        for (var key in this.data) {
            var row     = this.data[key];
            if (this.cols != null && this.cols.length > 0) {
                row = this.resolveColumns(row);
            }
            if (this.conds > 0) {
                for (var key in this.transactions) {
                    var result = this.transactions[key].get(
                        row
                    );
                    if (result) {
                        if (this.ifExistOnResult(results, row)) {
                            results.push(row);
                        }
                    }
                }
            } else {
                results.push(row);
            }
            if (this.lim != null) {
                if (limit == this.lim) {
                    break;
                }
            }
            limit++;
        }
        var newResults = new Array();
        for (var key in results) {
            var row = results[key];
            if (this.negativeConds > 0) {
                for (var key in this.negativeTransactions) {
                    var result = this.negativeTransactions[key].get(
                        row
                    );
                    if (result) {
                        if (this.ifExistOnResult(newResults, row)) {
                            newResults.push(row);
                        }
                    }
                }
            } else {
                newResults.push(row);
            }
        }
        if (this.sortConds) {
            newResults = this.resolveSort(newResults);
        }
        return newResults;
    }
}
class RawModel
{
    constructor()
    {
        this.state     = 1;
        this.identify  = Uuid.get();
        this.modelName = this.getClassName();
    }

    initialize()
    {
    }

    setModelName(name)
    {
        this.modelName = name;
    }
    
    getModelName()
    {
        return this.constructor.name;
    }

    getClassName()
    {
        return this.constructor.name;
    }

    getIdentify()
    {
        return this.identify;
    }
}
class StaticModel extends RawModel
{
    /**
     *
     */
    constructor(di)
    {
        super();
        this.storage = new SessionStorage;
        this.initialize();
    }

    /**
     *
     */
    setData(data)
    {
        this.storage.set(
            "Models_Identify_" + this.getClassName(),
            JSON.stringify(
                data
            )
        );
    }

    /**
     *
     */
    getData()
    {
        let data = this.storage.get(
            "Models_Identify_" + this.getClassName()
        );
        return data;
    }

    /**
     *
     */
    getObjectData()
    {
        return JSON.parse(
            this.storage.get(
                "Models_Identify_" + this.getClassName()
            )
        );
    }

    /**
     *
     */
    setIndex(index)
    {
        this.index = index;
    }

    /**
     *
     */
    getIndex()
    {
        return this.index;
    }
}
class AjaxModel extends RawModel
{
    constructor()
    {
        super();
        this.insertUrl  = "insert";
        this.deleteUrl  = "delete";
        this.updateUrl  = "update";
        this.findUrl    = "find";
        this.findOneUrl = "findOne";
        this.countUrl   = "count";
        this.method     = "POST";
        this.initialize();
    }

    getClassName()
    {
        return this.constructor.name;
    }

    setSource(data)
    {
        this.setInsertUrl(data.insert);
        this.setUpdateUrl(data.update);
        this.setInsertUrl(data.insert);
        this.setCountUrl(data.count);
        this.setFindOneUrl(data.findOne);
        this.setFindUrl(data.find);
    }

    setInsertUrl(url)
    {
        this.insertUrl  = url;
    }

    setFindUrl(url)
    {
        this.findUrl    = url;
    }

    setFindOneUrl(url)
    {
        this.findOneUrl    = url;
    }

    setCountUrl(url)
    {
        this.countUrl    = url;
    }

    setDeleteUrl(url)
    {
        this.deleteUrl  = url;
    }

    setUpdateUrl(url)
    {
        this.updateUrl  = url;
    }

    getInsertUrl()
    {
        return this.insertUrl;
    }

    getFindUrl()
    {
        return this.findUrl;
    }

    getDeleteUrl()
    {
        return this.deleteUrl;
    }

    getUpdateUrl()
    {
        return this.updateUrl;
    }

    setParams(params)
    {
        this.params = params;
    }

    getParams()
    {
        return this.params;
    }

    setMethod(method)
    {
        this.method = method;
    }

    getMethod()
    {
        return this.method;
    }
}
class AjaxModelPersistent extends StaticModel
{
    constructor()
    {
        super();
        this.container = new SessionStorage;
        this.insertUrl = null;
        this.deleteUrl = null;
        this.updateUrl = null;
        this.findUrl   = null;
    }

    setSource(data)
    {
        this.setInsertUrl(data.find);
        this.setUpdateUrl(data.update);
        this.setInsertUrl(data.insert);
        this.setFindUrl(data.insert);
    }

    setAjaxInit(value)
    {
        this.container.set(
            "ajaxInit_" + this.getClassName(),
            value
        );
    }

    getAjaxInit()
    {
        return this.container.get(
            "ajaxInit_" + this.getClassName()
        );
    }

    setInsertUrl(url)
    {
        this.insertUrl  = url;
    }

    setFindUrl(url)
    {
        this.findUrl    = url;
    }

    setDeleteUrl(url)
    {
        this.deleteUrl  = url;
    }

    setUpdateUrl(url)
    {
        this.updateUrl  = url;
    }

    getInsertUrl()
    {
        return this.insertUrl;
    }

    getFindUrl()
    {
        return this.findUrl;
    }

    getDeleteUrl()
    {
        return this.deleteUrl;
    }

    getUpdateUrl()
    {
        return this.updateUrl;
    }

    setParams(params)
    {
        this.params = params;
    }

    getParams()
    {
        return this.params;
    }

    setMethod(method)
    {
        this.method = method;
    }

    getMethod()
    {
        return this.method;
    }
}
class Deny
{
    /**
     * Get deny methods
     */
    static getDeny()
    {
        return [
            "state",
            "source",
            "insertUrl",
            "deleteUrl",
            "updateUrl",
            "findUrl",
            "params",
            "internalId",
            "method"
        ];
    }
}
class ModelType
{
}
ModelType.AJAX = 0;
ModelType.PERSISTENT = 1;
ModelType.OBJECT = 2;
ModelType.ARRAY = 3;

class ElementAdapter
{
    /**
     * 
     * @param element 
     * @param tagName 
     */
    constructor(element = null)
    {
        this.element = element;   
    }

    /**
     * 
     * @param element 
     */
    setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    get()
    {
        let elem;
        if (typeof this.element != "string") {
            if (typeof this.element.nodeName == "undefined") {
                return false;
            } else {
                elem = this.element.nodeName;
            }
        } else {
            elem = this.element.toUpperCase();
        }
        let instance = false;
        switch (elem) {
            case "A":
                    instance = new A();
                break;
            case "ABBR":
                    instance = new Abbr();
                break;
            case "ADDRESS":
                    instance = new Address();
                break;
            case "AREA":
                    instance = new Area();
                break;
            case "ARTICLE":
                    instance = new Article();
                break;
            case "ASIDE":
                    instance = new Aside();
                break;
            case "AUDIO":
                    instance = new Audio();
                break;
            case "B":
                    instance = new B();
                break;
            case "BASE":
                    instance = new Base();
                break;
            case "BDI":
                    instance = new Bdi();
                break;
            case "BDO":
                    instance = new Bdo();
                break;
            case "BLOCKQUOTE":
                    instance = new Blockquote();
                break;
            case "BODY":
                    instance = new Body();
                break;
            case "BR":
                    instance = new Br();
                break;
            case "BUTTON":
                    instance = new Button();
                break;
            case "CANVAS":
                    instance = new Canvas();
                break;
            case "CAPTION":
                    instance = new Caption();
                break;
            case "CITE":
                    instance = new Cite();
                break;
            case "CODE":
                    instance = new Code();
                break;
            case "COL":
                    instance = new Col();
                break;
            case "COLGROUP":
                    instance = new ColGroup();
                break;
            case "DATALIST":
                    instance = new Datalist();
                break;
            case "DB":
                    instance = new Db();
                break;
            case "DEL":
                    instance = new Del();
                break;
            case "DETAILS":
                    instance = new Details();
                break;
            case "DFN":
                    instance = new Dfn();
                break;
            case "DIALOG":
                    instance = new Dialog();
                break;
            case "DIV":
                    instance = new Div();
                break;
            case "DL":
                    instance = new Dl();
                break;
            case "DT":
                    instance = new Dt();
                break;
            case "EM":
                    instance = new Em();
                break;
            case "EMBED":
                    instance = new Embed();
                break;
            case "FIELDSET":
                    instance = new Fieldset();
                break;
            case "FIGCAPTION":
                    instance = new Figcaption();
                break;
            case "FIGURE":
                    instance = new Figure();
                break;
            case "FOOTER":
                    instance = new Footer();
                break;
            case "FORM":
                    instance = new Form();
                break;
            case "H1":
                    instance = new H1();
                break;
            case "H2":
                    instance = new H2();
                break;
            case "H3":
                    instance = new H3();
                break;
            case "H4":
                    instance = new H4();
                break;
            case "H5":
                    instance = new H5();
                break;
            case "H6":
                    instance = new H6();
                break;
            case "HEAD":
                    instance = new Head();
                break;
            case "HEADER":
                    instance = new Header();
                break;
            case "I":
                    instance = new I();
                break;
            case "IFRAME":
                    instance = new Iframe();
                break;
            case "IMG":
                    instance = new Img();
                break;
            case "INPUT":
                    instance = new Input();
                break;
            case "INS":
                    instance = new Ins();
                break;
            case "KBD":
                    instance = new Kbd();
                break;
            case "KEYGEN":
                    instance = new Keygen();
                break;
            case "LABEL":
                    instance = new Label();
                break;
            case "LEYEND":
                    instance = new Leyend();
                break;
            case "LI":
                    instance = new Li();
                break;
            case "LINK":
                    instance = new Link();
                break;
            case "MAIN":
                    instance = new Main();
                break;
            //case "MAP":
                    //instance = new Map();
                //break;
            case "MENU":
                    instance = new Menu();
                break;
            case "MENUITEM":
                    instance = new Menuitem();
                break;
            case "META":
                    instance = new Meta();
                break;
            case "METER":
                    instance = new Meter();
                break;
            case "NAV":
                    instance = new Nav();
                break;
            case "NOSCRIP":
                    instance = new Noscrip();
                break;
            case "OBJECT":
                    instance = new Obj();
                break;
            case "OL":
                    instance = new Ol();
                break;
            case "OPTGROUP":
                    instance = new Optgroup();
                break;
            case "P":
                    instance = new P();
                break;
            case "PARAM":
                    instance = new Param();
                break;
            case "PRE":
                    instance = new Pre();
                break;
            case "PROGRESS":
                    instance = new Progress();
                break;
            case "Q":
                    instance = new Q();
                break;
            case "RP":
                    instance = new Rp();
                break;
            case "RT":
                    instance = new Rt();
                break;
            case "RUBY":
                    instance = new Ruby();
                break;
            case "S":
                    instance = new S();
                break;
            case "SAMP":
                    instance = new Samp();
                break;
            case "SCRIPT":
                    instance = new Script();
                break;
            case "SECTION":
                    instance = new Section();
                break;
            case "SELECT":
                    instance = new Select();
                break;
            case "SMALL":
                    instance = new Small();
                break;
            case "SOURCE":
                    instance = new Source();
                break;
            case "SPAN":
                    instance = new Span();
                break;
            case "STRONG":
                    instance = new Strong();
                break;
            case "STYLE":
                    instance = new Style();
                break;
            case "SUB":
                    instance = new Sub();
                break;
            case "SUMMARY":
                    instance = new Summary();
                break;
            case "SUP":
                    instance = new Sup();
                break;
            case "TABLE":
                    instance = new Table();
                break;
            case "TBODY":
                    instance = new Tbody();
                break;
            case "TD":
                    instance = new Td();
                break;
            case "TEXTAREA":
                    instance = new Textarea();
                break;
            case "TFOOT":
                    instance = new Tfoot();
                break;
            case "TH":
                    instance = new Th();
                break;
            case "THEAD":
                    instance = new Thead();
                break;
            case "TIME":
                    instance = new Time();
                break;
            case "TITLE":
                    instance = new Title();
                break;
            case "TR":
                    instance = new Tr();
                break;
            case "TRACK":
                    instance = new Track();
                break;
            case "U":
                    instance = new U();
                break;
            case "UL":
                    instance = new Ul();
                break;
            case "VAR":
                    instance = new Var();
                break;
            case "VIDEO":
                    instance = new Video();
                break;
            case "WBR":
                    instance = new Wbr();
                break;
            default:
                instance = new HtmlElement;
                instance.create(this.element);
                break;
        }

        if (typeof this.element.nodeName != "undefined") {
            instance.setElement(this.element);
        }
        return instance;
    }
}
/**
 * 
 */
class ElementManager
{
    /**
     * 
     * @param element 
     */
    constructor()
    {
    }

    /**
     * 
     * @param element 
     */
    setElement(element)
    {
        this.element = element;
    }

    /**
     * Get document element
     * @return {document} element
     */
    getElement()
    {
        return this.element;
    }

    /**
     * 
     * @return 
     */
    getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }

    /**
     * Set id attribute
     * @param {String} id
     * @return this
     */
    setId(id)
    {
        this.attr("id", id);
        return this;
    }

    /**
     * Get id attribute
     * @return {String}
     */
    getId()
    {
        return this.attr("id");
    }

    /**
     * Set required attribute
     * å
     */
    setRequired(req)
    {
        this.element.required = req;
        return this;
    }

    /**
     * Get required attribute
     * @return {Boolean}
     */
    getRequired()
    {
        return this.element.required;
    }

    /**
     * 
     * @param append 
     */
    checkAppendValue(append)
    {
        switch (typeof append) {
            case "string":
                    this.element.appendChild(
                        document.createTextNode(append)
                    );
                break;
            case "number":
                    this.element.appendChild(
                        document.createTextNode(
                            append.toString()
                        )
                    );
                break;
            case "object":
                    if (typeof append.getElement() != "undefined") {
                        this.verifyElement(
                            append.getElement()
                        );
                    } else {
                        this.verifyElement(
                            append
                        );
                    }
                break;
            default:

                break;
        }
    }

    /**
     * 
     * @param append 
     * @param type 
     */
    verifyElement(append, type = "append")
    {
        if (this.element instanceof HTMLCollection) {
            for (let key in this.element) {
                if (typeof this.element[key].nodeType != "undefined") {
                    if (this.element[key].nodeType == 1) {
                        this.element[key].appendChild(
                            append
                        );
                    }
                }
            }
        } else {
            this.element.appendChild(
                append
            );
        }
    }

    /**
     * 
     * @param append 
     */
    append(append)
    {
        if (Array.isArray(append) || (append instanceof HTMLCollection)) {
            for (let key in append) {
                this.checkAppendValue(
                    append[key]
                );
            }
        } else {
            this.checkAppendValue(
                append
            );
        }

        return this;
    }

    /**
     * Set class 
     * @param  { String } attrClass 
     * @return this
     */
    class(attrClass)
    {
        this.element.setAttribute("class", attrClass);
        return this;
    }

    /**
     * 
     * @param  { String } cssClass
     * @return 
     */
    addClass(attrClass)
    {
        let strClass = this.element.getAttribute("class");
        strClass += " " + attrClass;
        this.element.setAttribute("class", strClass);
        return this;
    }

    /**
     * 
     * @param  { String } attribute
     * @return { this | attribute}
     */
    attr(attr, value = false)
    {
        if (typeof attr == "object" && value == false) {
            for (let key in attr) {
                this.element.setAttribute(key, attr[key]);
            }
        } else if (typeof attr == "string" && value != false) {
            this.element.setAttribute(attr, value);
        } else if (typeof attr == "string" && value == false) {
            return this.element.getAttribute(attr);
        }
        return this;
    }

    /**
     * 
     * @param {String} attribute
     */
    removeAttr(attr)
    {
        this.element.removeAttribute(attr);
        return this;
    }

    /**
     *
     * @param  
     * @return
     */
    html(html = null)
    {
        if (html != null) {
            this.removeChildNodes();
            this.append(html);
            return this;
        } else {
            return this.element.innerHTML;
        }
    }

    /**
     * 
     * @param html 
     */
    setHtml(html = null)
    {
        if (html = null) {
            this.removeChildNodes();
            this.append(html);
            return this;
        } else {
            return this.element.innerHTML;
        }
    }

    /**
     *
     */
    removeChildNodes()
    {
        if (this.element instanceof HTMLCollection) {
            for (let key in this.element) {
                this.removeChilds(
                    this.element[key],
                    this.element[key].childNodes
                );
            }
        } else {
            this.removeChilds(
                this.element,
                this.element.childNodes
            );
        }
    }

    /**
     *
     */
    removeChilds(element, childs)
    {
        while (element.firstChild) {
            element.removeChild(
                element.firstChild
            );
        }
    }

    /**
     *
     * @param          val [description]
     * @return    [description]
     */
    val(val = false)
    {
        if (val || typeof val == "string") {
            this.element.value = val;
            this.attr("value", val);
            return this;
        } else {
            return this.element.value;
        }
    }

    /**
     *
     * @param          val [description]
     * @return    [description]
     */
    getValue(val = false)
    {
        if (val || typeof val == "string") {
            this.element.value = val;
            this.attr("value", val);
            return this;
        } else {
            return this.element.value;
        }
    }

    /**
     * 
     */
    valAsInt()
    {
        return parseInt(this.val());
    } 

    /**
     * 
     * @param          text [description]
     * @return    [description]
     */
    text(text = false) {
        if (text) {
            this.element.innerHtml = text;
            return this;
        } else {
            return this.element.innerHtml;
        }
    }

    /**
     * 
     */
    empty()
    {
        this.removeChildNodes();
        return this;
    }

    /**
     * 
     * @param element 
     */
    remove(element = false)
    {
        if (element) {
            this.getElement().removeChild(
                element
            );
        } else {
            this.getElement().parentElement.removeChild(
                this.getElement()
            );
        }
    }

    /**
     * 
     */
    getAsObject()
    {
        let childs = this.element.childNodes;
        let obj    = new Array();

        if (childs instanceof NodeList) {
            for (let key in childs) {
                if (typeof childs[key].nodeType != "undefined") {
                    switch (childs[key].nodeType) {
                        case Node.ELEMENT_NODE:
                                let adapter = new ElementAdapter(
                                    childs[key]
                                );
                                let auxElement = adapter.get();
                                let finalObj  = {};
                                let auxObject = auxElement.getAsObject();
                                finalObj[auxElement.getClassName().toLowerCase()] = auxObject;
                                if (auxObject.length > 0) {
                                    obj.push(finalObj);
                                }
                            break;
                        case Node.TEXT_NODE:
                                obj.push(
                                    childs[key].nodeValue
                                );
                            break;
                    }
                }
            }
        }
        return obj;
    }

    /**
     * 
     */
    getAsJson()
    {
        let objects = this.getAsObject();
        return JSON.stringify(
            objects
        );
    }
}
class CssManager
{
    /**
     * 
     * @param element 
     */
    constructor()
    {
        
    }

    /**
     * 
     * @param element 
     */
    setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    getElement()
    {
        return this.element;
    }

    /**
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param  value
     * @return this
     */
    css(key, value = null) {
        if (typeof key == "object") {
            for (let keyItem in key) {
                this.element.style[key] = key[keyItem];
            }
        } else if (typeof key == "string" && value != null) {
            this.element.style[key] = value;
        } else if (typeof key == "string" && value == null) {
            return this.element.style[key];
        }
        return this;
    }

    /**
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param  value
     * @return this
     */
    setStyle(key, value = null) {
        if (typeof key == "object") {
            for (let keyItem in key) {
                this.element.style[key] = key[keyItem];
            }
        } else if (typeof key == "string" && value != null) {
            this.element.style[key] = value;
        } else if (typeof key == "string" && value == null) {
            return this.element.style[key];
        }
        return this;
    }

    /**
     * Set class attribute
     * 
     * @param  String attrClass 
     * @return this
     */
    class(attrClass)
    {
        this.element.setAttribute("class", attrClass);
        return this;
    }

    /**
     * Set new class but deletes previous classes added
     * 
     * @param String attrClass
     */
    setClass(attrClass)
    {
        this.element.setAttribute(
            "class",
            attrClass
        );
        return this;
    } 

    /**
     * Concat class to element
     * 
     * @param  String attrClass
     * @return 
     */
    addClass(attrClass)
    {
        let strClass = this.element.getAttribute("class");
        strClass += " " + attrClass;
        this.element.setAttribute("class", strClass);
        return this;
    }

    /**
     * Set childs as append does 
     * 
     * @return Object this
     */
    addChild(element)
    {
        this.element.append(element);
        return this;
    }

    /**
     * 
     */
    show()
    {
        this.element.style.display = "";
        return this;
    }

    /**
     * 
     */
    hide()
    {
        this.element.style.display = "none";
        return this;
    }
}
class DomManager
{
    /**
     * 
     * @param element
     */
    constructor()
    {
    }

    /**
     * 
     * @param id 
     */
    getById(id, context = null)
    {
        let adapter = new ElementAdapter(
            document.getElementById(id)
        );
        return adapter.get();
    }
    
    /**
     * 
     * @param {*} tag 
     */
    create(tag)
    {
        let adapter = new ElementAdapter(
            tag
        );
        return adapter.get();
    }

    /**
     *
     */
    getByTag(name)
    {
        let elements = document.getElementsByTagName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }

        if (result.length == 0) {
            return false;
        }

        if (result.length == 1) {
            return result[0];
        }
        return result;
    }

    /**
     *
     */
    getByClass(name, context = null)
    {
        let elements = document.getElementsByClassName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }
        if (result.length == 0) {
            return false;
        }
        if (result.length == 1) {
            return result[0];
        }
        return this;
    }

    /**
     *
     */
    getByName(name, context = null)
    {
        let elements = document.getElementsByName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }
        if (result.length == 0) {
            return false;
        }
        if (result.length == 1) {
            return result[0];
        }
        return result;
    }

    /**
     * 
     */
    setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    getElement()
    {
        return this.element;
    }

    /**
     * [getClassName description]
     * @return  [description]
     */
    getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}
class EventManager
{
    /**
     * 
     * @param element 
     */
    constructor()
    {
        this.components = {};
        this.eventNow   = {};
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    attach(component, eventName, fn)
    {
        if (!Array.isArray(this.components[component])) {
            this.components[component] = new Array;
        }
        if (!Array.isArray(this.components[component][eventName])) {
            this.components[component][eventName] = new Array;
        }
        this.components[component][eventName].push(fn);
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    fire(component, eventName, params)
    {
        let eventsToFire = this.components[component][eventName];
        if (Array.isArray(eventsToFire)) {
            for (let item of eventsToFire) {
                item(params);
            }
        }
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    set(component, eventName, func) 
    {
        this.eventNow[component] = {};
        this.eventNow[component][eventName] = func;
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     * @param {*} params 
     */
    execute(component, eventName, params)
    {
        let eventToFire = this.eventNow[component][eventName];
        if (typeof eventToFire == "function") {
            eventToFire(params);
        }
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    clear(component, eventName)
    {
        this.components[component][eventName] = new Array;
    }

    /**
     * 
     */
    static getEvents()
    {
        return [
            "click",
            "doubleClick",
            "change",
            "keypress",
            "keydown",
            "keyup",
            "paste",
            "blur",
            "focus",
            "submit"
        ];
    }

    /**
     * 
     * 
     * @param {*} eventName 
     * @param {*} element 
     * @param {*} fn 
     */
    setEventToElement(element, eventName, fn, data = false)
    {
        if (Array.isArray(element)) {
            for (let item of element) {
                this.element.addEventListener(
                    eventName,
                    fn
                );
            }
        } else {
            element.addEventListener(
                eventName,
                function () {
                    let element = Di.get("elementAdapter").setElement(this).get();
                    fn.bind(data)(element)
                }
            );
        }
        return this;
    }

    /** 
     * 
     */
    getEventManager()
    {
        return this.getDi().get("eventManager");
    }
    
    /**
     * 
     */
    getDi()
    {
        return Di;
    }

    /** 
     * 
     */
    getDom()
    {
        return this.getDi().get("dom");
    }

    /**
     * 
     */
    getEm()
    {
        return this.getDi().get("em");
    }
}
class ParentManager
{
    constructor()
    {
    }

    getParent()
    {
        let parent = this.element.parentElement;
        if (parent.nodeType == 1) {
            let adapter = new ElementAdapter(
                parent
            );
            let tagObject = adapter.get();
            return tagObject;
        }
        return false;
    }

    getSiblings()
    {
        let siblings = this.getParent().getChilds();
        if (siblings.length > 0) {
            let aux = new Array;
            for (let item of siblings) {
                if (item.getElement() != this.getElement()) {
                    aux.push(item);
                }
            }
            return aux;
        }
        return false;
    }

    getChilds()
    {
        let childNodes = this.element.childNodes;
        let childs = new Array();
        for (let key in childNodes) {
            if (childNodes[key].nodeType == 1) {
                let adapter = new ElementAdapter(
                    childNodes[key]
                );
                let tagObject = adapter.get();
                childs.push(
                    tagObject
                );
            }
        }
        return childs;
    }

    /**
     * 
     */
    setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    getElement()
    {
        return this.element;
    }
}
class EventType
{
    static get BEFORE_SEND() { return 0; }
    static get AFTER_SEND() { return 1; }
    static get DONE() { return 2; }
    static get ERROR() { return 3; }
    static get BEFORE_CREATE() { return 4; }
    static get AFTER_CREATE() { return 5; }
    static get BEFORE_CREATE_VIEW() { return 6; }
    static get AFTER_CREATE_VIEW() { return 7; }
    static get EXCEPTION() { return 8; }

    static get BEFORE_SEND_NAME() { return "beforeSend"; }
    static get AFTER_SEND_NAME() { return "afterSend"; }
    static get DONE_NAME() { return "done"; }
    static get ERROR_NAME() { return "error"; }
    static get BEFORE_CREATE_NAME() { return "beforeCreate"; }
    static get AFTER_CREATE_NAME() { return "afterCreate"; }
    static get BEFORE_CREATE_VIEW_NAME() { return "beforeCreateView"; }
    static get AFTER_CREATE_VIEW_NAME() { return "afterCreateView"; }
    static get EXCEPTION_NAME() { return "exception"; }
}

class HtmlElement
{
    /**
     * 
     * @param tagName 
     */
    constructor()
    {
        this.CSS_MANAGER     = "Chronos.Dom.CssManager";
        this.PARENT_MANAGER  = "Chronos.Dom.DomManager";
        this.ELEMENT_MANAGER = "Chronos.Dom.ElementManager";
        this.di = Di;
        this.data = new ViewModel;
        /*
        return new Proxy(
            this,
            this.getValidator()
        );
        */
    }

    initialize(args)
    {
    }

    /**
     * 
     * @param {*} viewModel 
     */
    setData(viewModel)
    {
        this.data = viewModel;
    }

    /**
     * 
     */
    getData()
    {
        return this.data;
    }

    /**
     * 
     */
    setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    getElement()
    {
        return this.element;
    }

    /**
     * 
     */
    getCss()
    {
        let css = this.getDi().get(
            this.CSS_MANAGER
        );
        css.setElement(this.getElement());
        return css;
    }

    getParent()
    {
        let parent = this.element.parentElement;
        if (parent.nodeType == 1) {
            let adapter = new ElementAdapter(
                parent
            );
            let tagObject = adapter.get();
            return tagObject;
        }
        return false;
    }

    getSiblings()
    {
        let siblings = this.getParent().getChilds();
        if (siblings.length > 0) {
            let aux = new Array;
            for (let item of siblings) {
                if (item.getElement() != this.getElement()) {
                    aux.push(item);
                }
            }
            return aux;
        }
        return false;
    }

    getChilds()
    {
        let childNodes = this.element.childNodes;
        let childs = new Array();
        for (let key in childNodes) {
            if (childNodes[key].nodeType == 1) {
                let adapter = new ElementAdapter(
                    childNodes[key]
                );
                let tagObject = adapter.get();
                childs.push(
                    tagObject
                );
            }
        }
        return childs;
    }

    /**
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param  value
     * @return this
     */
    css(key, value = null) {
        if (typeof key == "object") {
            for (let keyItem in key) {
                this.element.style[key] = key[keyItem];
            }
        } else if (typeof key == "string" && value != null) {
            this.element.style[key] = value;
        } else if (typeof key == "string" && value == null) {
            return this.element.style[key];
        }
        return this;
    }

    /**
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param  value
     * @return this
     */
    setStyle(key, value = null) {
        if (typeof key == "object") {
            for (let keyItem in key) {
                this.element.style[key] = key[keyItem];
            }
        } else if (typeof key == "string" && value != null) {
            this.element.style[key] = value;
        } else if (typeof key == "string" && value == null) {
            return this.element.style[key];
        }
        return this;
    }

    /**
     * Set class attribute
     * 
     * @param  String attrClass 
     * @return this
     */
    class(attrClass)
    {
        this.element.setAttribute("class", attrClass);
        return this;
    }

    /**
     * Set new class but deletes previous classes added
     * 
     * @param String attrClass
     */
    setClass(attrClass)
    {
        this.element.setAttribute(
            "class",
            attrClass
        );
        return this;
    } 

    /**
     * Concat class to element
     * 
     * @param  String attrClass
     * @return 
     */
    addClass(attrClass)
    {
        let strClass = this.element.getAttribute("class");
        strClass += " " + attrClass;
        this.element.setAttribute("class", strClass);
        return this;
    }

    /**
     * Set childs as append does 
     * 
     * @return Object this
     */
    addChild(element)
    {
        this.element.append(element);
        return this;
    }

    /**
     * 
     */
    show()
    {
        this.element.style.display = "";
        return this;
    }

    /**
     * 
     */
    hide()
    {
        this.element.style.display = "none";
        return this;
    }

    /**
     * Set id attribute
     * @param {String} id
     * @return this
     */
    setId(id)
    {
        this.attr("id", id);
        return this;
    }

    /**
     * Get id attribute
     * @return {String}
     */
    getId()
    {
        return this.attr("id");
    }

    /**
     * Set required attribute
     * å
     */
    setRequired(req)
    {
        this.element.required = req;
        return this;
    }

    /**
     * Get required attribute
     * @return {Boolean}
     */
    getRequired()
    {
        return this.element.required;
    }

    /**
     * 
     * @param append 
     */
    checkAppendValue(append)
    {
        switch (typeof append) {
            case "string":
                    this.element.appendChild(
                        document.createTextNode(append)
                    );
                break;
            case "number":
                    this.element.appendChild(
                        document.createTextNode(
                            append.toString()
                        )
                    );
                break;
            case "object":
                    if (typeof append.getElement() != "undefined") {
                        this.verifyElement(
                            append.getElement()
                        );
                    } else {
                        this.verifyElement(
                            append
                        );
                    }
                break;
            default:

                break;
        }
    }

    /**
     * 
     * @param append 
     * @param type 
     */
    verifyElement(append, type = "append")
    {
        if (this.element instanceof HTMLCollection) {
            for (let key in this.element) {
                if (typeof this.element[key].nodeType != "undefined") {
                    if (this.element[key].nodeType == 1) {
                        this.element[key].appendChild(append);
                    }
                }
            }
        } else {
            this.element.appendChild(
                append
            );
        }
    }

    /**
     * 
     * @param append 
     */
    append(append)
    {
        if (Array.isArray(append) || (append instanceof HTMLCollection)) {
            for (let key in append) {
                this.checkAppendValue(
                    append[key]
                );
            }
        } else {
            this.checkAppendValue(
                append
            );
        }

        return this;
    }

    /**
     * Set class 
     * @param  { String } attrClass 
     * @return this
     */
    class(attrClass)
    {
        this.element.setAttribute("class", attrClass);
        return this;
    }

    /**
     * 
     * @param  { String } cssClass
     * @return 
     */
    addClass(attrClass)
    {
        let strClass = this.element.getAttribute("class");
        strClass += " " + attrClass;
        this.element.setAttribute("class", strClass);
        return this;
    }

    /**
     * 
     * @param  { String } attribute
     * @return { this | attribute}
     */
    attr(attr, value = false)
    {
        if (typeof attr == "object" && value == false) {
            for (let key in attr) {
                this.element.setAttribute(key, attr[key]);
            }
        } else if (typeof attr == "string" && value != false) {
            this.element.setAttribute(attr, value);
        } else if (typeof attr == "string" && value == false) {
            return this.element.getAttribute(attr);
        }
        return this;
    }

    /**
     * 
     * @param {String} attribute
     */
    removeAttr(attr)
    {
        this.element.removeAttribute(attr);
        return this;
    }

    /**
     *
     * @param  
     * @return
     */
    html(html = null)
    {
        if (html != null) {
            this.removeChildNodes();
            this.append(html);
            return this;
        } else {
            return this.element.innerHTML;
        }
    }

    /**
     * 
     * @param html 
     */
    setHtml(html = null)
    {
        if (html = null) {
            this.removeChildNodes();
            this.append(html);
            return this;
        } else {
            return this.element.innerHTML;
        }
    }

    /**
     *
     */
    removeChildNodes()
    {
        if (this.element instanceof HTMLCollection) {
            for (let key in this.element) {
                this.removeChilds(
                    this.element[key],
                    this.element[key].childNodes
                );
            }
        } else {
            this.removeChilds(
                this.element,
                this.element.childNodes
            );
        }
    }

    /**
     *
     */
    removeChilds(element, childs)
    {
        while (element.firstChild) {
            element.removeChild(
                element.firstChild
            );
        }
    }

    /**
     *
     * @param          val [description]
     * @return    [description]
     */
    val(val = false)
    {
        if (val || typeof val == "string") {
            this.element.value = val;
            this.attr("value", val);
            return this;
        } else {
            return this.element.value;
        }
    }

    /**
     *
     * @param          val [description]
     * @return    [description]
     */
    getValue(val = false)
    {
        if (val || typeof val == "string") {
            this.element.value = val;
            this.attr("value", val);
            return this;
        } else {
            return this.element.value;
        }
    }

    /**
     * 
     */
    valAsInt()
    {
        return parseInt(this.val());
    } 

    /**
     * 
     * @param          text [description]
     * @return    [description]
     */
    text(text = false) {
        if (text) {
            this.element.innerHtml = text;
            return this;
        } else {
            return this.element.innerHtml;
        }
    }

    /**
     * 
     */
    empty()
    {
        this.removeChildNodes();
        return this;
    }

    /**
     * 
     * @param element 
     */
    remove(element = false)
    {
        if (element) {
            this.getElement().removeChild(
                element
            );
        } else {
            this.getElement().parentElement.removeChild(
                this.getElement()
            );
        }
    }

    /**
     * 
     */
    getAsObject()
    {
        let childs = this.element.childNodes;
        let obj    = new Array();

        if (childs instanceof NodeList) {
            for (let key in childs) {
                if (typeof childs[key].nodeType != "undefined") {
                    switch (childs[key].nodeType) {
                        case Node.ELEMENT_NODE:
                                let adapter = new ElementAdapter(
                                    childs[key]
                                );
                                let auxElement = adapter.get();
                                let finalObj  = {};
                                let auxObject = auxElement.getAsObject();
                                finalObj[auxElement.getClassName().toLowerCase()] = auxObject;
                                if (auxObject.length > 0) {
                                    obj.push(finalObj);
                                }
                            break;
                        case Node.TEXT_NODE:
                                obj.push(
                                    childs[key].nodeValue
                                );
                            break;
                    }
                }
            }
        }
        return obj;
    }

    /**
     * 
     */
    getAsJson()
    {
        let objects = this.getAsObject();
        return JSON.stringify(
            objects
        );
    }

    /**
     * 
     * @param tagName 
     */
    create(tagName)
    {
        this.element = document.createElement(
            tagName
        );
        return this;
    }

    /**
     * 
     */
    getChecksum()
    {
        let str = this.getClassName() + JSON.stringify(this);
        return window.btoa(
            encodeURIComponent(str)
        );
    }

    /** 
     * 
     */
    getDom()
    {
        return this.getDi().get("dom");
    }
    
    /** 
     * 
     */
    getEventManager()
    {
        return this.getDi().get("eventManager");
    }

    /**
     * 
     */
    getEm()
    {
        return this.getDi().get("em");
    }

    addEvent(eventName, fn)
    {
        this.getEventManager().setEventToElement(
            this.element,
            eventName,
            fn,
            data
        );
        return this;
    }

    click(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "click",
            fn,
            data
        );
        return this;
    }

    doubleClick(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "doubleClick",
            fn,
            data
        );
        return this;
    }

    change(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "change",
            fn,
            data
        );
        return this;
    }

    keypress(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "keypress",
            fn,
            data
        );
        return this;
    }

    keydown(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "keydown",
            fn,
            data
        );
        return this;
    }

    keyup(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "keyup",
            fn,
            data
        );
        return this;
    }

    paste(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "paste",
            fn,
            data
        );
        return this;
    }

    blur(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "blur",
            fn,
            data
        );
        return this;
    }

    focus(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "focus",
            fn,
            data
        );
        return this;
    }

    submit(fn, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element,
            "submit",
            fn,
            data
        );
        return this;
    }

    /**
     * 
     * @param di 
     */
    setDi(di)
    {
        this.di = di;
        return this;
    }

    /**
     * 
     */
    getDi()
    {
        return this.di;
    }
}
class FormTag extends HtmlElement
{
    /**
     * Set form element property readonly
     * @param {Boolean} readOnly
     */
    setReadOnly(readOnly)
    {
        this.getElement().readOnly = readOnly;
        return this;
    }

    /**
     * Get form read only 
     */
    getReadOnly()
    {
        return this.getElement().readOnly;
    }

    /**
     * Set disabled
     * @param {Boolean} disabled
     */
    setDisabled(disabled)
    {
        this.getElement().disabled = disabled;
        return this;
    }

    getDisabled()
    {
        return this.getElement().disabled;
    }

    setSize(size)
    {
        this.attr("size", size);
        return this;
    }

    getSize()
    {
        return this.attr("size");
    }

    setMaxLength(max)
    {
        this.attr("maxlength", max);
        return this;
    }

    getMaxLength()
    {
        return this.attr("maxlength");
    }

    setAutoFocus(data)
    {
        this.getElement().autofocus = data;
        return this;
    }

    getAutoFocus()
    {
        return this.getElement().autofocus;
    }

    setMin(min)
    {
        this.attr("min", min);
        return this;
    }

    getMin()
    {
        return parseInt(this.attr("min"));
    }

    setMax(max)
    {
        this.attr("max", max);
        return this;
    }

    getMax()
    {
        return parseInt(this.attr("max"));
    }

    /**
     *
     */
    setAlt(alt)
    {
        this.attr("alt", alt);
        return this;
    }

    /**
     *
     */
    getAlt()
    {
        return this.attr("alt");
    }

    /**
     *
     */
    setPlaceholder(placeholder)
    {
        this.attr("placeholder", placeholder);
        return this;
    }

    /**
     *
     */
    getPlaceholder()
    {
        return this.attr("placeholder");
    }

    /**
     *
     */
    setTitle(title)
    {
        this.attr("title", title);
        return this;
    }

    /**
     *
     */
    getTitle()
    {
        return this.attr("title");
    }

    /**
     *
     */
    setPattern(pattern)
    {
        switch (pattern) {
            case Input.NUMBERS:
                this.attr("pattern", "[0-9]");
                break;
            case Input.TEXT:
                this.attr("pattern", "[A-Za-z]{3}");
                break;
            case Input.NO_SPECIAL_CHARACTERS:
                this.attr("pattern", "{3}");
                break;
            case Input.NUMBERS_NO_SPECIAL_CHARACTERS:
                this.attr("pattern", "[0-9]{3}");
                break;
            case Input.TEXT_NO_SPECIAL_CHARACTERS:
                this.attr("pattern", "[A-Za-z]{3}");
                break;
            default:
                this.attr("pattern", pattern);
                break;
        }
        return this;
    }

    /**
     *
     */
    getPattern()
    {
        return this.attr("pattern");
    }

    /**
     *
     */
    setName(name)
    {
        this.attr("name", name);
        return this;
    }

    /**
     *
     */
    getName()
    {
        return this.attr("name");
    }

    /**
     *
     */
    setStep(num)
    {
        this.attr("step", num);
        return this;
    }

    /**
     *
     */
    getStep()
    {
        return this.attr("step");
    }

    /**
     *
     */
    validate(fn = false)
    {
        if (this.val() == "" || typeof this.val() == "undefined") {
            return false;
        }
    }

    isChecked()
    {
        return this.getElement().checked;
    }

    check()
    {
        this.getElement().checked = true;
        return this;
    }

    unCheck()
    {
        this.getElement().checked = false;
        return this;
    }
}
class A extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "A"
                )
            );
            this.initialize();
        }
    }

    /**
     * [favIcon description]
     * @return  [description]
     */
    favIcon(favIcon) {
        let icon = new I()
        .class(favIcon);
        this.append(
            icon.getElement()
        );
        return this;
    }

    /**
     * [href description]
     * @param   href [description]
     * @return       [description]
     */
    href(href) {
        this.attr("href", href);
        return this;
    }
}
class Abbr extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "ABBR"
                )
            );
            this.initialize();
        }
    }
}
class Address extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "ADDRESS"
                )
            );
            this.initialize();
        }
    }
}
class Area extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "AREA"
                )
            );
            this.initialize();
        }
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Article extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "ARTICLE"
                )
            );
            this.initialize();
        }
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Aside extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "ASIDE"
                )
            );
            this.initialize();
        }
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Audio extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "AUDIO"
                )
            );
            this.initialize();
        }
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class B extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "B"
                )
            );
            this.initialize();
        }
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Base extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "BASE"
                )
            );
            this.initialize();
        }
     }
}
/**
 * [ViewElement description]
 * @type 
 */
class Bdi extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "BDI"
                )
            );
            this.initialize();
        }
    }
}
class Bdo extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "BDO"
                )
            );
            this.initialize();
        }
    }
}
class Blockquote extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "BLOCKQUOTE"
                )
            );
            this.initialize();
        }
    }
}
class Body extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.body
            );
            this.initialize();
        }
    }
}
class Br extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "BR"
                )
            );
            this.initialize();
        }
    }
}
class Button extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "BUTTON"
                )
            );
            this.initialize();
        }
    }
    type(type) {
        this.attr("type", type);
        return this;
    }
    favIcon(favIcon)
    {
        let icon = new I()
        .class(favIcon);
        this.append(icon);
        return this;
    }
    success()
    {
        this.addClass("btn btn-success");
        return this;
    }
    notice()
    {
        this.addClass("btn btn-notice");
        return this;
    }
    default()
    {
        this.addClass("btn btn-default");
        return this;
    }
    primary()
    {
        this.addClass("btn btn-primary");
        return this;
    }
    warning()
    {
        this.addClass("btn btn-warning");
        return this;
    }
    danger()
    {
        this.addClass("btn btn-danger");
        return this;
    }
}
class Canvas extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "CANVAS"
                )
            );
            this.initialize();
        }
    }
}
class Caption extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "CAPTION"
                )
            );
            this.initialize();
        }
    }
}
class Cite extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "CITE"
                )
            );
            this.initialize();
        }
    }
}
class Code extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "CODE"
                )
            );
            this.initialize();
        }
    }
}
class Col extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "COL"
                )
            );
            this.initialize();
        }
    }
}
class ColGroup extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "COLGROUP"
                )
            );
            this.initialize();
        }
    }
}
class Datalist extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DATALIST"
                )
            );
            this.initialize();
        }
    }
}
class Db extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DB"
                )
            );
            this.initialize();
        }
    }
}
class Del extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DEL"
                )
            );
            this.initialize();
        }
    }
}
class Details extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DETAILS"
                )
            );
            this.initialize();
        }
    }
}
class Dfn extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DFN"
                )
            );
            this.initialize();
        }
    }
}
class Dialog extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DIALOG"
                )
            );
            this.initialize();
        }
    }
}
class Div extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DIV"
                )
            );
            this.initialize();
        }
    }
}
class Dl extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DL"
                )
            );
            this.initialize();
        }
    }
}
class Dt extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "DT"
                )
            );
            this.initialize();
        }
    }
}
class Em extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "EM"
                )
            );
            this.initialize();
        }
    }
}
class Embed extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "EMBED"
                )
            );
            this.initialize();
        }
    }
}
class Fieldset extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "FIELDSET"
                )
            );
            this.initialize();
        }
    }
}
class Figcaption extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "FIGCAPTION"
                )
            );
            this.initialize();
        }
    }
}
class Figure extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "FIGURE"
                )
            );
            this.initialize();
        }
    }
}
class Footer extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "FOOTER"
                )
            );
            this.initialize();
        }
    }
}
class Form extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        this.invalidElements = new Array;
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "FORM"
                )
            );
            this.initialize();
        }
    }
    submit(fn)
    {
        this.getElement().addEventListener("submit", function (event) {
            let returnCallback = fn.bind(this)(event);
            if (returnCallback == false || typeof returnCallback == "undefined") {
                event.preventDefault();
            }
            return true;
        }.bind(this));
    }
    getInvalidElements()
    {
        return this.invalidElements;
    }
    validate(fn)
    {
        let elements = this.getFormElements();
        this.invalidElements = new Array;
        if (elements.length > 0) {
            for (let item of elements) {
                if (item.val() == "") {
                    this.invalidElements.push(
                        item
                    );
                }
            }
            if (this.invalidElements.length == 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
    getFormElements()
    {
        let northwindElements = new Array;
        let elements = this.getElement().elements;
        for (let item of elements) {
            let aux = new ElementAdapter(item);
            let element = aux.get();
            if (element != false) {
                northwindElements.push(
                    element
                );
            }
        }
        return northwindElements;
    }
    setAutoComplete(data)
    {
        if (data) {
            this.attr("autocomplete", "on");
        } else {
            this.attr("autocomplete", "off");
        }
        return this;
    }
    getAutoComplete()
    {
        return this.attr("autocomplete");
    }
}
class H1 extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "H1"
                )
            );
            this.initialize();
        }
    }
}
class H2 extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "H2"
                )
            );
            this.initialize();
        }
    }
}
class H3 extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "H3"
                )
            );
            this.initialize();
        }
    }
}
class H4 extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "H4"
                )
            );
            this.initialize();
        }
    }
}
class H5 extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "H5"
                )
            );
            this.initialize();
        }
    }
}
class H6 extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "H6"
                )
            );
            this.initialize();
        }
    }
}
class Head extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "HEAD"
                )
            );
            this.initialize();
        }
    }
}
class Header extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "HEADER"
                )
            );
            this.initialize();
        }
    }
}
class Hidden extends Input
{
    constructor(element = undefined)
    {
        super();
        this.setHidden();
    }
}
class Hr extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "HR"
                )
            );
            this.initialize();
        }
    }
}
class I extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "I"
                )
            );
            this.initialize();
        }
    }
}
class Iframe extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "IFRAME"
                )
            );
            this.initialize();
        }
    }
}
class Img extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "IMG"
                )
            );
            this.initialize();
        }
    }

    width(width)
    {
        this.getElement().style.width = width;
        return this;
    }

    height(height)
    {
        this.getElement().style.width = height;
        return this;
    }

    src(src)
    {
        this.attr("src", src);
        return this;
    }
}
class Input extends FormTag
{
    static get NUMBERS() { return 0; }
    static get TEXT() { return 1; }
    static get NO_SPECIAL_CHARACTERS() { return 2; }
    static get TEXT_NO_SPECIAL_CHARACTERS() { return 3; }
    static get NUMBERS_NO_SPECIAL_CHARACTERS() { return 4; }

    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "INPUT"
                )
            );
            this.initialize();
        }
    }
    type(type)
    {
        this.attr("type", type);
        return this;
    }
    setText()
    {
        this.attr("type", "text");
        return this;
    }
    setHidden()
    {
        this.attr("type", "hidden");
        return this;
    }
    setNumber()
    {
        this.attr("type", "number");
        return this;
    }
    setDate()
    {
        this.attr("type", "number");
        return this;
    }
    setFile()
    {
        this.attr("type", "file");
        return this;
    }
}
class Ins extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "INS"
                )
            );
            this.initialize();
        }
    }
}
class Kbd extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "KBD"
                )
            );
            this.initialize();
        }
    }
}
class Keygen extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "KEYGEN"
                )
            );
            this.initialize();
        }
    }
}
class Label extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "LABEL"
                )
            );
            this.initialize();
        }
    }
}
class Leyend extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "LEYEND"
                )
            );
            this.initialize();
        }
    }
}
class Li extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "LI"
                )
            );
            this.initialize();
        }
    }
}
class Link extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "LINK"
                )
            );
            this.initialize();
        }
    }
}
class Main extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "MAIN"
                )
            );
            this.initialize();
        }
    }
}
class Map extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "MAP"
                )
            );
            this.initialize();
        }
    }
}
class Menu extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "MENU"
                )
            );
            this.initialize();
        }
    }
}
class Menuitem extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "MENUITEM"
                )
            );
            this.initialize();
        }
    }
}
class Meta extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "META"
                )
            );
            this.initialize();
        }
    }
}
class Meter extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "METER"
                )
            );
            this.initialize();
        }
    }
}
class Nav extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "NAV"
                )
            );
            this.initialize();
        }
    }
}
class Noscrip extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "NOSCRIP"
                )
            );
            this.initialize();
        }
    }
}
class Obj extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "OBJECT"
                )
            );
            this.initialize();
        }
    }
}
class Ol extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "OL"
                )
            );
            this.initialize();
        }
    }
}
class Optgroup extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "OPTGROUP"
                )
            );
            this.initialize();
        }
    }
}
class Option extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "OPTION"
                )
            );
            this.initialize();
        }
    }
    setValue(val)
    {
        this.attr("value", val);
        return this;
    }
    getValue()
    {
        return this.attr("value");
    }
    setContent(content)
    {
        this.append(content);
        return this;
    }
    getContent()
    {
        return this.getElement().text;
    }
}
class Output extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "OUTPUT"
                )
            );
            this.initialize();
        }
    }
}
class P extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "P"
                )
            );
            this.initialize();
        }
    }
}
class Param extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "PARAM"
                )
            );
            this.initialize();
        }
    }
}
class Pre extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "PRE"
                )
            );
            this.initialize();
        }
    }
}
class Progress extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "PROGRESS"
                )
            );
            this.initialize();
        }
    }
}
class Q extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "Q"
                )
            );
            this.initialize();
        }
    }
}
class Rp extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "RP"
                )
            );
            this.initialize();
        }
    }
}
class Rt extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "RT"
                )
            );
            this.initialize();
        }
    }
}
class Ruby extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "RUBY"
                )
            );
            this.initialize();
        }
    }
}
class S extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "S"
                )
            );
            this.initialize();
        }
    }
}
class Samp extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SAMP"
                )
            );
            this.initialize();
        }
    }
}
class Script extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "ABBR"
                )
            );
            this.initialize();
        }
    }
}
class Section extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SECTION"
                )
            );
            this.initialize();
        }
    }
}
class Select extends FormTag
{
    constructor(element = undefined)
    {
        super();
        this.choose = "Choose...";
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SELECT"
                )
            );
            this.initialize();
        }
    }
    getSelected()
    {
        var option = new Option();
        option.setElement(
            this.getElement().options[
                this.getElement().selectedIndex
            ]
        );
        return option;
    }
    iterate(fn) {
        var childs = this.getChilds();
        for (var key in childs) {
            fn(childs[key]);
        }
        return this;
    }
    addChoose(choose)
    {
        this.choose = choose;
    }
    select(value)
    {
        var childs = this.getElement().childNodes;
        for (var key in childs) {
            if (childs[key].value == value) {
                childs[key].setAttribute("selected", "selected");
            }
        }
    }
    fetch(content, params = false)
    {
        if (Array.isArray(content)) {
            for (let key in content) {
                if (content[key] instanceof RawModel) {
                    if (params == false) {
                        throw "params are mandatory!"
                    }
                    let model = content[key];
                    this.append(
                        new Option()
                        .attr({
                            "value" : model[params[0]],
                        })
                        .html(model[params[1]])
                    );
                } else {
                    this.append(
                        new Option()
                        .attr({
                            "value" : key,
                        })
                        .html(content[key])
                    );
                }
            }
        } 
        return this;
    }
}
class Small extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SMALL"
                )
            );
            this.initialize();
        }
    }
}
class Source extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "ABBR"
                )
            );
            this.initialize();
        }
    }
}
class Span extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SPAN"
                )
            );
            this.initialize();
        }
    }
}
class Strong extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "STRONG"
                )
            );
            this.initialize();
        }
    }
}
class Style extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "STYLE"
                )
            );
            this.initialize();
        }
    }
}
class Sub extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SPAN"
                )
            );
            this.initialize();
        }
    }
}
class Summary extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SUMMARY"
                )
            );
            this.initialize();
        }
    }
}
class Sup extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SUP"
                )
            );
            this.initialize();
        }
    }
}
class Table extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TABLE"
                )
            );
            this.initialize();
        }
        
        this.thead = new Thead();
        this.tbody = new Tbody();
        this.tfoot = new Tfoot();

        this.initialize(args);
    }
    getThead()
    {
        return this.thead;
    }
    getTbody()
    {
        return this.tbody;
    }
    toHead(component)
    {
        this.thead.append(
            component
        );
        this.append(
            this.thead
        );
        return this;
    }
    toHeadTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.thead.append(
            tr
        );

        this.append(
            this.thead
        );

        return this;
    }
    toBody(component)
    {
        this.tbody.append(
            component
        );

        this.append(
            this.tbody
        );

        return this;
    }
    toFoot(component)
    {
        this.tfoot.append(
            component
        );

        this.append(
            this.tfoot
        );

        return this;
    }
    toBodyTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.tbody.append(
            tr
        );

        this.append(
            this.tbody
        );

        return this;
    }
    toFootTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.tfoot.append(
            tr
        );

        this.append(
            this.tfoot
        );

        return this;
    }
}
class Tbody extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TBODY"
                )
            );
            this.initialize();
        }
    }
}
class Td extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TD"
                )
            );
            this.initialize();
        }
    }
    colspan(cols)
    {
        this.attr({
            "colspan" : cols
        });
        return this;
    }
    rowspan(rows)
    {
        this.attr({
            "rowspan" : rows
        });
        return this;
    }
}
class Textarea extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TEXTAREA"
                )
            );
            this.initialize();
        }
    }
}
class Tfoot extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TFOOT"
                )
            );
            this.initialize();
        }
    }
}
class Th extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TH"
                )
            );
            this.initialize();
        }
    }
    colspan(cols) {
        this.attr({
            "colspan" : cols
        });
        return this;
    }
    rowspan(rows) {
        this.attr({
            "rowspan" : rows
        });
        return this;
    }
}
class Thead extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "THEAD"
                )
            );
            this.initialize();
        }
    }
}
class Time extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TIME"
                )
            );
            this.initialize();
        }
    }
}
class Title extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TITLE"
                )
            );
            this.initialize();
        }
    }
}
class Tr extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TR"
                )
            );
            this.initialize();
        }
    }
}
class Track extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TRACK"
                )
            );
            this.initialize();
        }
    }
}
class U extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "U"
                )
            );
            this.initialize();
        }
    }
}
class Ul extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "UL"
                )
            );
            this.initialize();
        }
    }
}
class Var extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "VAR"
                )
            );
            this.initialize();
        }
    }
}
class Video extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "VIDEO"
                )
            );
            this.initialize();
        }
    }
}
class Wbr extends HtmlElement
{
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "WBR"
                )
            );
            this.initialize();
        }
    }
}
class ViewModel
{
    constructor()
    {
        this.data = {};
    }

    set(key, value)
    {
        this.data[key] = value;
    }

    get(key)
    {
        return this.data[key];
    }
}
class Controller
{
    constructor(resolveProperties = null)
    {
        this.di = new Service;
        let injectable = new Injectable();
        this.element = null;
        return injectable.inject(this, resolveProperties);
    }

    setElement(element)
    {
        this.element = element;
    }

    getElement()
    {
        return this.element;
    }

    getEm()
    {
        return this.getDi().get("em");
    }

    getEventManager()
    {
        return this.getDi().get("eventManager");
    }

    getEvent(element, event, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element.getElement(),
            eventName,
            data
        );
    }

    getDom()
    {
        return this.getDi().get("dom");
    }

    getById(id)
    {
        return this.getDom().getById(id);
    }

    getTag(tag)
    {
        return this.getDom().create(
            tag
        );
    }

    getAjax()
    {
        return this.getDi().get("");
    }

    getDi()
    {
        return Di;
    }
}
class Component extends Controller
{
	constructor(context = false)
	{
		super();
	}
}
class MethodType
{
    static get POST() { return "POST"; }
    static get GET() { return "GET"; }
    static get PUT() { return "PUT"; }
    static get DELETE() { return "DELETE"; }
}
class Ajax
{
    constructor()
    {
        this.httpRequest = new XMLHttpRequest();
        this.context = {};
        this.method  = "POST";
        this.parameters = "";
        this.container  = [];
        this.responseFn = () => {};
        this.bfSendFn   = () => {};
    }
    setContext(ctx)
    {
        this.context = ctx;
    }
    getContext()
    {
        return this.context;
    }
    setUrl(url)
    {
        this.url = url;
        return this;
    }
    getUrl()
    {
        return this.url;
    }
    set(key, value)
    {
        this.container[key] = value;
    }
    get(key)
    {
        return this.container[key];
    }
    setParams(params, value = false)
    {
        if (typeof params == "object") {
            var i = 0;
            for (var key in params) {
                var ampersand = "";
                if (i < Object.keys(params).length) {
                    ampersand = "&";
                }
                this.parameters += key + "=" + encodeURIComponent(params[key]) + ampersand;
                i++;
            }
        } else if (value) {
            this.parameters = params + "=" + encodeURIComponent(value);
        }

        return this;
    }
    POST()
    {
        this.setMethod("POST");
        return this;
    }
    PUT()
    {
        this.setMethod("PUT");
        return this;
    }
    DELETE()
    {
        this.setMethod("DELETE");
        return this;
    }
    GET()
    {
        this.setMethod("GET");
        return this;
    }
    setMethod(method)
    {
        this.method = method;
        return this;
    }
    addContext()
    {
        this.httpRequest.context = this.getContext();
        this.httpRequest.getContext = function () {
            return this.context;
        };
    }
    response(responseFunction)
    {
        this.responseFn = responseFunction;
        try {
            this.bfSendFn();
            this.addContext();
            this.httpRequest.onreadystatechange = () => {
                if (this.httpRequest.readyState === this.httpRequest.DONE) {
                    if (this.httpRequest.status === 200) {
                        if (typeof this.httpRequest.response != "undefined") {
                            if (typeof this.responseFn != "undefined") {
                                this.responseFn(
                                    this.httpRequest.response
                                );
                            }
                        }
                    } else {
                        this.error = "ajax status" + this.httpRequest.status + " " + this.httpRequest.statusText;
                    }
                }
            };
        } catch (e) {
            console.log("Network.AJax.Exception", e);
        }
        return this;
    }
    beforeSend(fn)
    {
        this.bfSendFn = fn;
    }
    setHeaders()
    {
        this.httpRequest.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );
    }
    getError(errorFunction)
    {
        errorFunction(this.error);
    }
    clear()
    {
        this.method     = "GET";
        this.parameters = "";
        this.error      = null;
        this.url        = "";
        this.bfSendFn   = () => {};
        this.responseFn = () => {};
        this.container  = [];
    }
    send(fn = false)
    {
        if (typeof fn == "function") {
            this.response(fn);
        }

        this.httpRequest.open(
            this.method,
            this.url
        );
        this.setHeaders();
        this.httpRequest.send(
            this.parameters
        );
    }
    getDom()
    {
        return this.getDi().get("dom");
    }
    getAjax()
    {
        return this.getDi().get("ajax");
    }
    getEventManager()
    {
        return this.getDi().get("eventManager");
    }
    getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}
class Checksum
{
    /**
     * Build checksum of any javascript object
     * @param Object obj
     */
    constructor(obj = false)
    {
        if (typeof obj == "object") {
            this.set(obj);
        }
        this.stringObject = "";
    }

    /**
     * 
     * @param obj 
     */
    set(obj)
    {
        let reflection = new Reflection();
        this.stringObject = reflection.read(obj);
    }

    /**
     * Get base 64 from string
     * @param String str 
     */
    utf8ToBase64(str) {
        return window.btoa(
            encodeURIComponent(str)
        );
    }

    /**
     * Get checksum
     * @return String
     */
    getChecksum()
    {
        return this.utf8ToBase64(
            this.stringObject
        );
    }
}
class Reflection
{
    /**
     * Make reflection to objects
     */
    constructor()
    {
        this.deny = {
            "insertUrl" : true,
            "deleteUrl" : true,
            "updateUrl" : true,
            "findUrl"   : true
        };
        this.method = new Array();
        this.attributes = new Array();
        this.deny = {};
    }

    /**
     * Get object class
     * @param Object obj
     */
    getName(obj)
    {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(obj["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }

    /**
     * Read and get methods and properties
     * @param  Object obj 
     * @return String
     */
    read(obj)
    {
        if (typeof obj !== 'object') {
            console.log('Not an object');
            return;
        }

        let output = '';

        for (let i in obj) {

            let propName  = i;
            let propValue = obj[i];
            let type = (typeof propValue);

            switch (type) {

                case 'function':

                    output += ' [method] ' + propName + '\n\n';
                    this.methods.push();

                    break;

                case 'object':

                    output += '\t[object] ' + propName + ' ' + this.read(propValue) + '\n\n';

                    break;

                default:
                    output += ' [property] ' + propName + ' ' + propValue + '\n\n';
                    this.attributes.push({
                        propName : propValue
                    });
                    break;

            }
        }
        return output;
    }

    /**
     * Return methods and properties as objects
     * @param  Object obj 
     * @return Object
     */
    getAtttributeAsObjects(obj) {
        if (typeof obj !== 'object') {
            console.log('Not an object');
            return;
        }

        let output = '';
        let dataAttributes = {};

        for (let i in obj) {

            let propName  = i;
            let propValue = obj[i];
            let type = (typeof propValue);

            switch (type) {
                case 'function':

                    break;
                case 'object':
                    if (propValue instanceof RawModel) {
                        dataAttributes[propName] = this.getAtttributeAsObjects(propValue);
                    } else {
                        if (propValue != null) {
                            if (Object.keys(propValue).length > 0) {
                                if (this.checkDataObject(propName)) {
                                    dataAttributes[propName] = propValue;
                                }
                            }
                        }
                    }
                    break;
                default:
                    var deny = Deny.getDeny();
                    if (deny.indexOf(propName) == -1) {
                        dataAttributes[propName] = propValue;
                    }
                    break;
            }
        }
        return dataAttributes;
    }

    /**
     * Check if the key is valid
     * @param  String key
     * @return Boolean
     */
    checkDataObject(key)
    {
        if (this.deny[key] != true) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Get class methods
     * @return Array
     */
    getMethods()
    {
        return this.methods;
    }

    /**
     * Get properties or class attributes
     * @return Array
     */
    getAttributes()
    {
        return this.attributes;
    }
}
class PersistenceComparisonOperators {
    static get AND() { return "&&"; }
    static get OR() { return "||"; }
    static get EQUAL() { return "=="; }
    static get DIFFERENT() { return "!="; }
}
class DatamapperOperators
{
    static get OR() { return "$or"; }
    static get AND() { return "$and"; }
    static get SORT() { return "$sort"; }
    static get IS_NOT() { return "$isNot"; }
    static get LIMIT() { return "$limit"; }
    static get COLUMNS() { return "$columns"; }
    static get CONDITIONAL() { return "$conditions"; }
}
class PersistenceDataType {
    static get BOOLEAN() { return 1; }
    static get INTEGER() { return 2; }
    static get STRING() { return 3; }
    static get OBJECT() { return 4; }
    static get ARRAY() { return 5; }
    static get CLASS() { return 6; }

    static get BOOLEAN_TYPE() { return "boolean"; } 
    static get INTEGER_TYPE() { return "number"; }
    static get STRING_TYPE() { return "string"; }
    static get OBJECT_TYPE() { return "object"; }

    /**
     * 
     */
    static getValueByType(value)
    {
        var tyof = typeof value;
        switch (tyof) {
            case DataType.STRING_TYPE:
                    value = "\"" + value + "\"";
                break;
        }
        return value;
    }
}
class PersistenceSort
{
    static get ASC() { return 1; }
    static get DESC() { return -1; }

    static sortByField(data, field) {
        var arr = [];
        for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
                var obj = {};
                obj[prop] = data[prop];
                obj.tempSortName = data[prop][field].toLowerCase();
                arr.push(obj);
            }
        }

        arr.sort(function(a, b) {
            var at = a.tempSortName,
                bt = b.tempSortName;
            return at > bt ? 1 : ( at < bt ? -1 : 0 );
        });

        var result = [];
        for (var i = 0, l = arr.length; i < l; i++) {
            var obj = arr[i];
            delete obj.tempSortName;
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    var id = prop;
                }
            }
            var item = obj[id];
            result.push(item);
        }
        return result;
    }
}
class UnitOfWork
{
    static get NEW() { return 1; }
    static get CREATED() { return 2; }
    static get DELETED() { return 3; }

    constructor()
    {
        this.detached = null;
        this.updated = null;
        this.deleted = null;
    }
}
class Hydrator
{
    constructor()
    {
    }

    hydrate(model, data)
    {
        var newModel = new model();
        newModel.state = UnitOfWork.CREATED;

        for (let key in data) {
            switch (typeof newModel[key]) {
                case "function":
                    var auxPropNested = new newModel[key];
                    if (auxPropNested instanceof RawModel) {
                        newModel[key] = this.hydrate(newModel[key], data[key]);
                    } else {
                        newModel[key] = data[key];
                    }
                    break;
                default:
                        var dataArray = new Array();
                        if (Array.isArray(newModel[key])) {
                            switch (typeof newModel[key][0]) {
                                case "function":
                                        if (typeof data[key].length != "undefined") {
                                            if (data[key].length > 0) {

                                                var auxSubModel = new newModel[key][0];
                                                var arrayData   = new Array();

                                                if (auxSubModel instanceof RawModel) {
                                                    for (let subModelKey in data[key]) {
                                                        arrayData.push(
                                                            this.hydrate(newModel[key][0], data[key][subModelKey])
                                                        );
                                                    }
                                                    newModel[key] = arrayData;
                                                }
                                            }
                                        }
                                    break;
                                default:
                                        newModel[key] = data[key];
                                    break;
                            }
                        } else {
                            newModel[key] = data[key];
                        }
                    break;
            }
            if (Array.isArray(newModel[key])) {
                if (typeof newModel[key][0] == "function") {
                    newModel[key] = new Array();
                }
            }
        }
        return newModel;
    }
}

class Filter
{
    constructor()
    {
        this.first = "";
        this.final = [];
        this.init  = false;
        this.sort  = new Array();
        this.limit = null;
        this.columns = {};
    }

    buildCondition(params)
    {
        var index  = 1;
        var length = Object.keys(params).length;

        for (var key in params) {

            switch (key) {

                case DatamapperOperators.CONDITIONAL:
                    let conditional = params[key];
                    for (var keyConditional in conditional) {
                        switch (keyConditional) {
                            case DatamapperOperators.AND:

                                let iAnd = 1;
                                let andContent = conditional[keyConditional];
                                let andLength  = Object.keys(andContent).length;

                                for (let keyAnd in andContent) {
                                    this.getExpression(
                                        keyAnd,
                                        andContent[keyAnd],
                                        PersistenceComparisonOperators.AND,
                                        iAnd,
                                        andLength
                                    );
                                    iAnd++;
                                }

                                break;
                            case DatamapperOperators.OR:

                                    let iOr = 1;
                                    let orContent = conditional[keyConditional];
                                    let orLength  = Object.keys(orContent).length;

                                    for (let keyOr in orContent) {
                                        this.getExpression(
                                            keyOr,
                                            orContent[keyOr],
                                            PersistenceComparisonOperators.OR,
                                            iOr,
                                            orLength
                                        );
                                        iOr++;
                                    }
                                break;
                            case DatamapperOperators.IS_NOT:
                                    let iIsNot = 1;
                                    let isNotContent = conditional[keyConditional];
                                    let isNotLength  = Object.keys(isNotContent).length;
                                    for (let keyIsNot in isNotContent) {
                                        this.getExpression(
                                            keyIsNot,
                                            isNotContent[keyIsNot],
                                            PersistenceComparisonOperators.AND,
                                            iIsNot,
                                            isNotLength,
                                            PersistenceComparisonOperators.DIFFERENT
                                        );
                                        iIsNot++;
                                    }
                                break;
                            default:

                                break;
                        }
                    }
                    break;

                case DatamapperOperators.SORT:
                        this.getSort(
                            params[key]
                        );
                    break;
                case DatamapperOperators.LIMIT:
                        this.getLimit(
                            params[key]
                        );
                    break;
                case DatamapperOperators.COLUMNS:
                        this.columns = params[key];
                        if (typeof params[key] != "object") {
                            throw Message.getCodeMessage(
                                MessageCode.NOT_VALID_OBJECT,
                                "$columns option"
                            );
                        }
                    break;
                default:
                    this.getExpression(
                        key,
                        params[key],
                        PersistenceComparisonOperators.AND,
                        index,
                        length
                    );
                    index++;
                    break;
            }
        }
    }

    getSort(sortContent)
    {
        switch (typeof sortContent) {
            case PersistenceDataType.STRING_TYPE:
                    this.sort.push(
                        "data = Sort.sortByField('" + sortContent + "');"
                    );
                break;
            case PersistenceDataType.OBJECT_TYPE:
                    if (Array.isArray(sortContent)) {
                        for (let sortKey in sortContent) {
                            let sortValue = sortContent[sortKey]
                            this.sort.push(
                                "data = Sort.sortByField(data, '" + sortValue + "')"
                            );
                        }
                    } else {
                        for (let sortKey in sortContent) {
                            let sortType = sortContent[sortKey];
                            this.sort.push(
                                "data = Sort.sortByField(data, '" + sortKey + "');"
                            );
                            if (sortContent[sortKey] == Sort.DESC) {
                                this.sort.push(
                                    "data = data.reverse();"
                                );
                            }
                        }
                    }
                break;
        }
    }

    getLimit(limit)
    {
        if (typeof limit == "string") {
            limit = parseInt(limit);
        }
        this.limit = "data = data.slice(0, " + limit + ") ";
    }

    getExpression(key, content, operator, index, length, comparison = "==")
    {
        var condition = "";
        var finalOperator = "";
        if (this.init) {
            finalOperator = operator;
        }

        if (Array.isArray(content)) {
            var newVal = content;
            for (var j = 0; j < newVal.length; j++) {
                let operatorStr = "";
                if (j < (newVal.length - 1)) {
                    operatorStr = operator;
                }
                let valueByType = PersistenceDataType.getValueByType(newVal[j]);
                condition += "row[\"" + key + "\"] " + comparison + " " + newVal[j] + " " + operatorStr + " ";
            }

        } else {
            let operatorStr = "";
            let valueByType = PersistenceDataType.getValueByType(content);
            condition += "row[\"" + key + "\"] " + comparison + " " + valueByType + " " + operatorStr + " ";
        }
        this.first += finalOperator + " ( " + condition + " ) ";
        this.init = true;
    }

    /**
     *
     */
    getColumns(row)
    {
        var newRow = {};
        if (Object.keys(this.columns).length > 0) {
            for (let key in this.columns) {
                newRow[this.columns[key]] = row[this.columns[key]];
            }
        } else {
            newRow = row;
        }
        return newRow;
    }

    /**
     *
     */
    getMultipleRowValues(rsp, conds = true)
    {
        var response = JSON.parse(rsp);
        if (typeof response == "string") {
            response = JSON.parse(response);
        }

        if (this.first == "") {
            this.first = "true";
        }

        var data = new Array();

        if (Array.isArray(response)) {

            var conditions = this.first;
            var evalValue = "if (" + conditions + ") { data.push(this.getColumns(row)); }";

            for (let key in response) {
                let row = response[key];
                if (conds) {
                    eval(
                        evalValue
                    );
                } else {
                    data.push(this.getColumns(row));
                }
            }

            if (this.sort.length > 0) {
                var i = 0;
                for (let key in this.sort) {
                    eval(this.sort[key]);
                    i++;
                }
            }

            if (this.limit != null) {
                eval(this.limit);
            }
        } else {
            if (typeof response == "object") {
                data.push(this.getColumns(response));
            } else {
                console.log("Response is not an object");
            }
        }
        return data;
    }

    getOneRowValue(data)
    {

    }
}
class EntityManager
{
    /**
     * Entity manager is a class
     */
    constructor()
    {
        this.uow = new UnitOfWork;
        this.container = new Container();
        this.ajax = this.getDi().get("ajax");
        this.eventManager = this.getDi().get("eventManager");
        this.url = this.getDi().get("url");
    }

    /**
     * 
     * @param {*} model 
     * @param {*} params 
     */
    find(model, func, params = {})
    {
        this.ajax = this.getDi().get("ajax");
        var objModel = new model;
        let url = this.getUrl(objModel, "find");

        this.eventManager.set(
            objModel.getClassName(),
            func.name,
            func
        );

        this.ajax.setUrl(url);
        this.ajax.setParams(params);
        this.ajax.setMethod(objModel.getMethod());
        this.ajax.response((response) => {
            let modelsHidrated = this.getResultSet(
                response,
                params,
                model,
                objModel
            );
            this.eventManager.execute(
                objModel.getClassName(),
                func.name,
                modelsHidrated
            );
        });
        this.ajax.send();
    }

    getResultSet(response, params, model, objModel)
    {
        let resultSet = new Array();
        let hydrator  = new Hydrator;

        let filters  = new Filter;
        filters.buildCondition(params);

        var data = new Array();
        if (objModel instanceof AjaxModelPersistent) {
            if (objModel.getAjaxInit() == null) {
                objModel.setAjaxInit(true);
                objModel.setData(response);
            }
            data = filters.getMultipleRowValues(
                response,
                false
            );
        } else if (objModel instanceof AjaxModel) {
            data = filters.getMultipleRowValues(
                response,
                false
            );
        } else {
            data = filters.getMultipleRowValues(
                response
            );
        }

        var i = 0;
        for (let key in data) {
            let newModel = hydrator.hydrate(
                model,
                data[key]
            );
            if (newModel instanceof StaticModel) {
                newModel.setIndex(i);
            }
            resultSet.push(
                newModel
            );
            i++;
        }

        if (resultSet.length == 0) {
            resultSet = false;
        }

        return resultSet;
    }

    /**
     * 
     * @param {*} model 
     * @param {*} params 
     */
    findOne(model, params = {})
    {

    }

    getUrl(model, type) {
        let baseUri    = this.url.get("baseUri");
        let modelName  = StringHelper.lcfirst(model.getModelName());
        let methodName = "";
        switch (type) {
            case "find":
                methodName = model.getFindUrl();
                break;
            case "findOne":
                methodName = model.getFindOneUrl();
                break;
            case "update":
                methodName = model.getUpdateUrl();
                break;
            case "count":
                methodName = model.getCountUrl();
                break;
            case "delete":
                methodName = model.getDeleteUrl();
                break;
            case "insert":
                methodName = model.getInsertUrl();
                break;
        }
        if (methodName != "") {
            return baseUri + "/" + methodName;
        }
        return baseUri + "/" + methodName + StringHelper.ucfirst(modelName); 
    }

    /**
     * 
     * @param {*} model 
     * @param {*} params 
     */
    count(model, params = {})
    {

    }

    /**
     * 
     * @param {*} model 
     */
    save(model)
    {
        
    }

    /**
     * 
     * @param {*} model 
     */
    delete(model)
    {

    }

    /**
     * 
     * @param {*} model 
     */
    getModelType(model)
    {
        if (model instanceof RawModel) {
            if (model instanceof AjaxModel) {
                return ModelType.AJAX;
            }
            if (model instanceof AjaxModelPersistent) {
                return Model.PERSISTENT;
            }
        } else {
            if (Array.isArray(model)) {
                return ModelType.ARRAY;
            }
            if (typeof model == "object") {
                return ModelType.OBJECT;
            }
        }
        return false;
    }

    setModel(model)
    {
        this.model = model;
    }

    /** 
     * 
     */
    getModel()
    {
        return this.model;
    }

    /** 
     * 
     */
    getDom()
    {
        return this.getDi().get("dom");
    }

    /** 
     * 
     */
    getAjax()
    {
        return this.getDi().get("ajax");
    }

    /** 
     * 
     */
    getEventManager()
    {
        return this.getDi().get("eventManager");
    }
    
    /**
     * 
     * @param {*} di 
     */
    setDi(di)
    {
        this.di = di;
    }

    /** 
     * 
     */
    getDi()
    {
        return Di;
    }
}
class Restricted
{
    static get()
    {
        let restricted = [
            "constructor",
            "initialize",
            "getById",
            "getByTag",
            "getByClass",
            "getDi",
            "hasKey",
            "setPersistent",
            "getPersistent",
            "get",
            "set",
            "setDi",
            "getUrl",
            "setUrl",
            "getAjax",
            "setAjax",
            "getDom",
            "setDom",
            "setEm",
            "getEm",
            "setEntityManager",
            "getEntityManager",
            "setContainer",
            "getContainer",
            "setTag",
            "getTag",
            "setEvent",
            "getEvent",
            "setGlobals",
            "getGlobals"
        ];
        return restricted;
    }
}
class Dispatcher
{
    constructor()
    {
        let indexController = new IndexController();
    }
    getEventManager()
    {
        return this.eventManager;
    }
}
class Initializer
{
    constructor(config)
    {
        this.config = config;
    }

    /**
     * 
     */
    inject()
    {
        Di.set(
            "Chronos.Dom.CssManager",
            new CssManager
        );
        Di.set(
            "Chronos.Dom.ParentManager",
            new ParentManager
        );
        Di.set(
            "Chronos.Dom.ElementManager",
            new ElementManager
        );
        Di.set(
            "dom",
            new DomManager
        );

        let eventManager = new EventManager;
        Di.set(
            "eventManager",
            eventManager
        );

        let ajax = new Ajax();
        Di.set(
            "ajax",
            ajax
        );

        Di.set(
            "url",
            new Url
        );
        this.applyConfig();

        let entityManager = new EntityManager;
        Di.set(
            "em",
            entityManager
        );

        Di.set(
            "uuid",
            new Uuid
        );

        Di.set(
            "elementAdapter",
            new ElementAdapter
        );
    }

    /**
     * 
     * @param {*} config 
     */
    applyConfig()
    {
        let config = this.config.get();
        let paths = config["paths"];
        for (let key in paths) {
            let item = paths[key];
            Di.get("url").set(key, item);
        }
    }
}
class Inspector
{
    constructor()
    {
        this.elements = new Array();
        this.setElementAdapter(
            Di.get("elementAdapter")
        );
        this.searchElements();
    }

    /**
     * 
     * @param {*} elementAdapter 
     */
    setElementAdapter(elementAdapter)
    {
        this.elementAdapter = elementAdapter;
    }

    /**
     * 
     */
    getElementAdapter()
    {
        return this.elementAdapter;
    }

    /**
     * 
     */
    searchElements()
    {
        let tags = document.querySelectorAll('[chronos-init]');
        for (let element of tags) {
            this.elements.push(
                this.getElementAdapter()
                .setElement(
                    element
                )
                .get()
            );
        }
    }

    /**
     * 
     */
    getElements()
    {
        return document.querySelectorAll('[chronos-init]');
    }
}
/** 
 * 
 */
class Handler
{
    constructor()
    {
        this.inspector = new Inspector();
        this.elements = this.inspector.getElements();
    }

    /**
     * 
     * @param {*} item 
     */
    arrangeElement(item)
    {
        let htmlComponent = new ElementAdapter(item);
        let controller = eval("new " + this.ucfirst(item.getAttribute("chronos-init") + "Controller"));
        controller.setElement(htmlComponent.get());
        controller.initialize();
        this.searchForActions(controller, htmlComponent.get());
    }

    /**
     * 
     * @param {*} controller
     * @param {*} viewInstance
     */
    searchForActions(controller, viewInstance)
    {
        let eventManager = this.getDi().get("eventManager");
        for (let event of EventManager.getEvents()) {
            if (typeof controller[event] == "function") {
                eventManager.setEventToElement(
                    viewInstance.getElement(),
                    event,
                    controller[event],
                    controller
                );
            }
        }
    }

    /** 
     * 
     */
    execute()
    {
        let indexController = new IndexController;
        indexController.view = new ViewModel;
        indexController.initialize();

        for (let item of this.elements) {
            this.arrangeElement(item);
        }
    }

    /**
     * 
     * @param {*} string 
     */
    ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handle() {
        this.execute();
    }

    getDi()
    {
        return Di;
    }
}
class Application
{
    static get CONFIG() {
        return "chronos.application.config";
    }

    /**
     * 
     */
    constructor(config)
    {
        this.initializeDependencyInjector(config);
        window.initializeDependencyInjector = function () {
            sessionStorage.clear();
        }
    }

    /** 
     * 
     */
    initializeDependencyInjector(config)
    {
        let initializer = new Initializer(config);
        initializer.inject();
    }

    

    /**
     * 
     */
    start()
    {
        try {
            let handler = new Handler;
            handler.handle();
        } catch (e) {
            console.warn(e);
        }
    }
}

