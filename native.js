class Container
{
    /**
     * 
     */
    constructor()
    {
        this.container = {};
    }

    /**
      * Set value to container
     * @param key 
     * @param value 
     */
    set(key, value)
    {
        this.container[key] = value;
    }

    /**
     * Get value from container
     * @param key 
     */
    get(key)
    {
        return this.container[key];
    }
}
/**
 * Dependency injector
 */
class Di
{
    
    /**
     * Inject value to dependency injector
     * @param  String key
     * @param  Any    value
     * @return Void
     */
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

    /**
     * Get value from dependency injector
     * @param  String key
     * @return Any
     */
    static get(key)
    {
        if (key == "" || typeof key == "undefined") {
            throw "Key must not be empty in \"Di\"";
        }
        return Di.di[key];
    }

    /**
     * 
     */
    static getAll()
    {
        if (typeof Di.di == "undefined") {
            Di.di = {};
        }
        return Di.di;
    }
}
class Injectable
{
    /**
     * 
     */
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

    /**
     * 
     * @param obj 
     */
    inject(obj, fn = null)
    {
        return new Proxy(
            obj,
            this.getValidator(fn)
        );
    }
}

/**
 * Wrapper to local storage
 */
class LocalStorage
{
    constructor()
    {

    }

    /**
     * Set item in local storage
     * @param key string
     * @param value string
     * @returns void
     */
    set(key, value)
    {
        localStorage.setItem(
            key,
            value
        );
        return;
    }

    /**
     * Get item from local storage
     * @param key string
     * @returns any
     */
    get(key)
    {
        return localStorage.getItem(
            key
        );
    }
}
/**
 * Wrapper to dependency injector class
 */
class Service
{
    /**
     * 
     */
    constructor()
    {
        this.di = Di;
    }

    /**
     * Set value to static dependency injector
     * @param key 
     * @param value 
     */
    set(key, value)
    {
        this.di.set(key, value);
    }

    /**
     * Get value from static dependency injector
     * @param key 
     */
    get(key)
    {
        return this.di.get(key);
    }
}

/**
 * wrapper to session storage
 */
class SessionStorage
{
    constructor()
    {

    }

    /**
     * Set item in session storage
     * @param key string
     * @param value string
     * @returns void
     */
    set(key, value)
    {
        sessionStorage.setItem(
            key,
            value
        );
        return;
    }

    /**
     * Get item from session storage
     * @param key string
     * @returns any
     */
    get(key)
    {
        return sessionStorage.getItem(
            key
        );
    }
}
class Config
{
    constructor()
    {
        this.config = {};
    }

    /**
     * Set general config and environment
     *
     * @param Object config
     * @param Number env = Scope.Local 
     */
    setConfig(config, env = Scope.LOCAL)
    {
        this.config[env] = config;
    }

    /**
     * Get config was assigned
     *
     * @param Number env = Garlic.Environment.Scope.Local
     * @return Object
     */
    getConfig(env = Scope.LOCAL)
    {
        return this.config[env];
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
class Message
{
    /**
     * 
     */
    static get NOT_VALID_ARRAY() { return "The object returned in the transaction is not array"; }

    /**
     * 
     */
    static get NOT_VALID_ARRAY_OBJECT() { return "The objects returned in the transaction into array are not objects, every row must be object key, value"; }

    /**
     * 
     */
    static get NOT_VALID_OBJECT() { return "The received variable is not an object"; }

    /**
     * 
     * @param code 
     * @param custom 
     */
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
    static get NOT_VALID_ARRAY() { return 1; }
    static get NOT_VALID_ARRAY_OBJECT() { return 2; }
    static get NOT_VALID_OBJECT() { return 3; }
}

class ArrayHelper
{
    constructor()
    {

    }

    static inArray(container, element)
    {
        for (var key in container) {
            if (container[key] == element) {
                return true;
            }
        }
        return false;
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

    /**
     * [sanitizeString description]
     * @param  {string} str [description]
     
     */
    static sanitizeString(str) {
        let idTr = str.replace(/[`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
        idTr = idTr.toString().replace(/\s/g, "");
        return idTr;
    }

    /**
     * [capitalize description]
     * @param   str [description]
     
     */
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
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

class And extends Transaction
{
    /**
     * 
     * @param condition 
     */
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

    /**
     * 
     */
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        for (var key in row) {
            if (row[key] == this.condition[key]) {
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

class ComparisonOperators
{
    static get AND() { return "&&" }
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
    /**
     * 
     * @param condition 
     */
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

    /**
     * 
     */
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
    /**
     * 
     * @param condition 
     */
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

    /**
     * 
     */
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
    /**
     * 
     * @param condition 
     */
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
    /**
     * 
     * @param condition 
     */
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

    /**
     * 
     */
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
    /**
     * 
     * @param condition 
     */
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

    /**
     * 
     */
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
    /**
     * 
     * @param condition 
     */
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

    /**
     * 
     */
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
    /**
     * 
     * @param condition 
     */
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

    /**
     * 
     */
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
    /**
     * 
     * @param condition 
     */
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
    /**
     * 
     * @param condition 
     */
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

    /**
     * 
     */
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
class Query
{   
    /**
     * 
     * @param data 
     */
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

    /**
     * 
     */
    columns(cols)
    {
        if (typeof cols == "object") {
            this.cols = cols;
        } else {
            throw "Column param must be an object";
        }
        return this;
    }

    /**
     * 
     */
    getColumns()
    {
        return Object.keys(this.data[0]);
    }

    /**
     * 
     * @param row 
     */
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

    /**
     * 
     * @param condClass 
     */
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

    /**
     * 
     * @param conditions 
     */
    orderBy(sortContent)
    {
        this.sort = sortContent;
        this.sortConds = true;
    }

    /**
     *  
     */
    resolveSort(results)
    {
        switch (typeof this.sort) {
            case DataType.STRING_TYPE:
                    results = Sort.sortByField(
                        results,
                        this.sort
                    );
                break;
            case DataType.OBJECT_TYPE:
                    if (this.sort instanceof Array) {
                        for (let sortKey in this.sort) {
                            let sortValue = this.sort[sortKey];
                            results = Sort.sortByField(
                                results,
                                sortValue
                            );
                        }
                    } else {
                        for (let sortKey in this.sort) {
                            let sortType = this.sort[sortKey];
                            results = Sort.sortByField(
                                results,
                                sortKey
                            );
                            if (this.sort[sortKey] == Sort.DESC) {
                                results = results.reverse();
                            }
                        }
                    }
                break;
        }
        return results;
    }

    /**
     * 
     * @param row 
     */
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

    /**
     * 
     * @param result
     * @param row 
     */
    ifExistOnResult(result, row)
    {
        for (var key in result) {
            if (this.miniChecksum(result[key]) == this.miniChecksum(row)) {
                return false;
            }
        }
        return true;
    }

    /**
     * 
     */
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

class Sort
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

class Transaction
{
    constructor()
    {

    }
    
    get(row)
    {

    }
}
class Component extends Controller
{
	constructor(context = false)
	{
		super();
	}
}
class AjaxModel extends RawModel
{
    constructor()
    {
        super();
        this.insertUrl  = null;
        this.deleteUrl  = null;
        this.updateUrl  = null;
        this.findUrl    = null;
        this.findOneUrl = null;
        this.countUrl   = null;
        this.method     = "POST";
        this.initialize();
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
class RawModel
{
    constructor()
    {
        this.state    = 1;
        this.identify = Uuid.get();
    }

    /**
     * 
     */
    initialize()
    {
    }

    /**
     * 
     */
    beforeInsert()
    {
    }

    /**
     * 
     */
    beforeFind()
    {
    }

    /**
     * 
     */
    beforeUpdate()
    {
    }

    /**
     * 
     */
    beforeDelete()
    {
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

    /**
     *
     */
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
class ElementAdapter
{
    /**
     * 
     * @param element 
     * @param tagName 
     */
    constructor(element)
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
            elem = this.element;
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
class EventManager
{
    /**
     * 
     * @param element 
     */
    constructor()
    {
    }

    setEventToElement(eventName, fn)
    {
        if (Array.isArray(this.element)) {
            for (let item of this.element) {
                this.element.addEventListener(
                    eventName,
                    fn.bind(this)
                );
            }
        } else {
            this.element.addEventListener(
                eventName,
                fn.bind(this)
            );
        }
        return this;
    }

    /**
     * 
     * @param  {Function} fn [description]
     * @return       [description]
     */
    click(fn)
    {
        this.setEventToElement(
            "click",
            fn
        );
        return this;
    }

    /**
     *
     */
    doubleClick(fn)
    {
        this.setEventToElement(
            "dblclick",
            fn
        );
        return this;
    }

    /**
     *
     * @return  [description]
     */
    change(fn)
    {
        this.setEventToElement(
            "change",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    keypress(fn)
    {
        this.setEventToElement(
            "keypress",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    keydown(fn) {
        this.setEventToElement(
            "keydown",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    keyup(fn) {
        this.setEventToElement(
            "keyup",
            fn
        );
        return this;
    }

    paste(fn)
    {
        this.setEventToElement(
            "paste",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    blur(fn)
    {
        this.setEventToElement(
            "blur",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    focus(fn)
    {
        this.setEventToElement(
            "focus",
            fn
        );
        return this;
    }

    /**
     * 
     * @param fn
     */
    submit(fn)
    {
        this.setEventToElement(
            "submit",
            fn
        );
        return this;
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
/**
 *
 */
class A extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "A"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ABBR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
class Address extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ADDRESS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
class Area extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "AREA"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ARTICLE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DB"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DB"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "B"
            )
        );
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
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BASE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BDI"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}


/**
 * [ViewElement description]
 * @type 
 */
class Bdo extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BDO"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Blockquote extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BLOCKQUOTE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Body extends HtmlElement
{
    constructor(args = {})
    {
        super();
        this.setElement(document.body);
        this.setDi(new Service);
        this.initialize(args);
    }
}
 


/**
 * [ViewElement description]
 * @type 
 */
class Br extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 *
 */
class Button extends HtmlElement
{

    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BUTTON"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     *
     * @param
     * @return
     */
    type(type) {
        this.attr("type", type);
        return this;
    }

    /**
     *
     * @return
     */
    favIcon(favIcon)
    {
        let icon = new I()
        .class(favIcon);
        this.append(icon);
        return this;
    }

    /**
     *
     * @return
     */
    success()
    {
        this.addClass("btn btn-success");
        return this;
    }

    /**
     *
     * @return
     */
    notice()
    {
        this.addClass("btn btn-notice");
        return this;
    }

    /**
     *
     * @return
     */
    default()
    {
        this.addClass("btn btn-default");
        return this;
    }

    /**
     *
     * @return
     */
    primary()
    {
        this.addClass("btn btn-primary");
        return this;
    }

    /**
     * [warning description]
     * @return  [description]
     */
    warning()
    {
        this.addClass("btn btn-warning");
        return this;
    }

    /**
     * [danger description]
     * @return  [description]
     */
    danger()
    {
        this.addClass("btn btn-danger");
        return this;
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Canvas extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CANVAS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Caption extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CAPTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Cite extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CITE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Code extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "CODE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

 

/**
 * [ViewElement description]
 * @type 
 */
class Col extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "COL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class ColGroup extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "COLGROUP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Datalist extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DATALIST"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Db extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DB"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Del extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Details extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DETAILS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Dfn extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DFN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Dialog extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DIALOG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Div extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DIV"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Dl extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Dt extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Em extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "EM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Embed extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "EMBED"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Fieldset extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FIELDSET"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Figcaption extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FIGCAPTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Figure extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FIGURE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Footer extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FOOTER"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * 
 * @type 
 */
class Form extends HtmlElement
{
    /**
     * 
     */
    constructor(args = {})
    {
        super();
        this.invalidElements = new Array;
        this.setElement(
            document.createElement(
                "FORM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     * @param {Function} fn
     */
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

    /**
     * 
     */
    getInvalidElements()
    {
        return this.invalidElements;
    }

    /**
     * 
     */
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

    /**
     * 
     */
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

    /**
     * 
     */
    setAutoComplete(data)
    {
        if (data) {
            this.attr("autocomplete", "on");
        } else {
            this.attr("autocomplete", "off");
        }
        return this;
    }

    /**
     * 
     */
    getAutoComplete()
    {
        return this.attr("autocomplete");
    }
}
 


/**
 * [ViewElement description]
 * @type 
 */
class H1 extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H1"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class H2 extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H2"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class H3 extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H3"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class H4 extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H4"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class H5 extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "H5"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class H6 extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Head extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "HEAD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Header extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "HEADER"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [Input description]
 * @type 
 */
class Hidden extends Input
{
    constructor(args = {})
    {
        super();
        this.setHidden();
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Hr extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "HR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class I extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "I"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Iframe extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "IFRAME"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Img extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "IMG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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
/**
 * 
 * @type 
 */
class Input extends FormTag
{
    static get NUMBERS() { return 0; }
    static get TEXT() { return 1; }
    static get NO_SPECIAL_CHARACTERS() { return 2; }
    static get TEXT_NO_SPECIAL_CHARACTERS() { return 3; }
    static get NUMBERS_NO_SPECIAL_CHARACTERS() { return 4; }

    /**
     * 
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "INPUT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
    
    /**
     * [type description]
     * @param   type [description]
     * @return       [description]
     */
    type(type)
    {
        this.attr("type", type);
        return this;
    }

    /**
     *
     */
    setText()
    {
        this.attr("type", "text");
        return this;
    }

    /**
     *
     */
    setHidden()
    {
        this.attr("type", "hidden");
        return this;
    }

    /**
     *
     */
    setNumber()
    {
        this.attr("type", "number");
        return this;
    }

    /**
     *
     */
    setDate()
    {
        this.attr("type", "number");
        return this;
    }

    /**
     *
     */
    setFile()
    {
        this.attr("type", "file");
        return this;
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Ins extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "INS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Kbd extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "KBD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Keygen extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "KEYGEN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Label extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LABEL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Leyend extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LEYEND"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Li extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LI"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Link extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "LINK"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Main extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "MAIN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Map extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "MAP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Menu extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "MENU"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Menuitem extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "MENUITEM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Meta extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "META"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Meter extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "METER"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Nav extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "NAV"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Noscrip extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "NOSCRIP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Obj extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OBJ"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Ol extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Optgroup extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OPTGROUP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

 

/**
 *
 * @type
 */
class Option extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OPTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    setValue(val)
    {
        this.attr("value", val);
        return this;
    }

    /**
     *
     */
    getValue()
    {
        return this.attr("value");
    }

    /**
     *
     */
    setContent(content)
    {
        this.append(content);
        return this;
    }

    /**
     *
     */
    getContent()
    {
        return this.getElement().text;
    }
}




/**
 * [ViewElement description]
 * @type 
 */
class Output extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OUTPUT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class P extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "P"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}



/**
 * [ViewElement description]
 * @type 
 */
class Param extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PARAM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Pre extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PRE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Progress extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "PROGRESS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Q extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "Q"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Rp extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "RP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Rt extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "RT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Ruby extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "RUBY"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class S extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}


/**
 * [ViewElement description]
 * @type 
 */
class Samp extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SAMP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Script extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SCRIPT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Section extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SECTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
class Select extends FormTag
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.choose = "Choose...";
        this.setElement(
            document.createElement(
                "SELECT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     *
     */
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

    /**
     * 
     * @param fn 
     */
    iterate(fn) {
        var childs = this.getChilds();
        for (var key in childs) {
            fn(childs[key]);
        }
        return this;
    }

    /**
     *
     */
    setChoose(choose)
    {
        this.choose = choose;
    }

    /**
     *
     */
    select(value)
    {
        var childs = this.getElement().childNodes;
        for (var key in childs) {
            if (childs[key].value == value) {
                childs[key].setAttribute("selected", "selected");
            }
        }
    }

    /**
     *
     * @param  content
     * @return
     */
    build(content, fields)
    {
        if (content instanceof StaticModel) {
            content = JSON.parse(content.getData());
        }

        var i = 0;
        for (let key in content) {

            let option = new Option();

            let id = content[key][fields[0]];
            if (id === "") {
                id = content[key][fields[1]];
            }

            option.attr({
                "value" : id
            });
            option.append(
                content[key][fields[1]]
            );

            this.append([
                option
            ]);

            i++;
        }

        return this;
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Small extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "small"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Source extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SOURCE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Span extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SPAN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Strong extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "STRONG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Style extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "STYLE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Sub extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SUB"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Summary extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SUMMARY"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Sup extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SUP"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [Table description]
 * @type 
 */
class Table extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        
        this.thead = new Thead();
        this.tbody = new Tbody();
        this.tfoot = new Tfoot();

        this.initialize(args);
    }

    /**
     *
     */
    getThead()
    {
        return this.thead;
    }

    /**
     *
     */
    getTbody()
    {
        return this.tbody;
    }

    /**
     *
     */
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

    /**
     *
     */
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

    /**
     *
     */
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

    /**
     *
     */
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

    /**
     *
     */
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

    /**
     *
     */
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
/**
 * [ViewElement description]
 * @type 
 */
class Tbody extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TBODY"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Td extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     * @param   num [description]
     
     */
    colspan(cols)
    {
        this.attr({
            "colspan" : cols
        });
        return this;
    }

    /**
     * @param   row [description]
     
     */
    rowspan(rows)
    {
        this.attr({
            "rowspan" : rows
        });
        return this;
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Textarea extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TEXTAREA"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Tfoot extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TFOOT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Th extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TH"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /*
        *
        * @param   num [description]
        
        */
    colspan(cols) {
        this.attr({
            "colspan" : cols
        });
        return this;
    }

    /**
     *
     * @param   row [description]
     
     */
    rowspan(rows) {
        this.attr({
            "rowspan" : rows
        });
        return this;
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Thead extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "THEAD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Time extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TIME"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Title extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TITLE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Tr extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

 /**
 * [ViewElement description]
 * @type 
 */
class Track extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TRACK"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
 /**
 * [ViewElement description]
 * @type 
 */
class U extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "U"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Ul extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "UL"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Var extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "VAR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

/**
 * [ViewElement description]
 * @type 
 */
class Video extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "VIDEO"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
/**
 * [ViewElement description]
 * @type 
 */
class Wbr extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SELECT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
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

        let localDecorator = new Proxy(
            this,
            this.getValidator()
        );
        return localDecorator;
    }

    initialize(args)
    {
    }

    /**
     * 
     * @param viewModel 
     */
    set(data)
    {
        this.viewModelData = data;
    }

    /**
     * 
     */
    get(key)
    {
        return this.viewModelData[key];
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

    /**
     * 
     */
    getElementManager()
    {
        let em = Di.get(
            this.ELEMENT_MANAGER
        );
        console.log(Di.getAll(), em, this.getElement());
        em.setElement(this.getElement());
        return em;
    }

    /**
     * 
     */
    getParentManager()
    {
        let pm = this.getDi().get(
            this.PARENT_MANAGER
        );
        pm.setElement(this.getElement());
        return pm;
    }

    getEventManager()
    {
        let em = this.getDi().get(
            "eventManager"
        );
        em.setElement(this.getElement());
        return em;
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
     * [getClassName description]
     * @return  [description]
     */
    getClassName()
    {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
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
    getValidator()
    {
        let validator = {
            get : function get(obj, prop) {
                switch (prop) {
                    case "append":
                        return this.getElementManager().append;
                    case "attr":
                        return this.getElementManager().attr;
                    case "setAttribute":
                        return this.getElementManager().setAttribute;
                    case "removeAttribute":
                        return this.getElementManager().removeAttribute;
                    case "class":
                        return this.getElementManager().class;
                    case "addClass":
                        return this.getElementManager().addClass;
                    case "removeClass":
                        return this.getElementManager().removeClass;
                    case "setId":
                        return this.getElementManager().setId;
                    case "getId":
                        return this.getElementManager().getId;
                    case "setRequired":
                        return this.getElementManager().setRequired;
                    case "getRequired":
                        return this.getElementManager().getRequired;
                    case "html":
                        return this.getElementManager().html;
                    case "setHtml":
                        return this.getElementManager().setHtml;
                    case "setValue":
                        return this.getElementManager().setValue;
                    case "val":
                        return this.getElementManager().val;
                    case "getValue":
                        return this.getElementManager().getValue;
                    case "valAsInt":
                        return this.getElementManager().valAsInt;
                    case "text":
                        return this.getElementManager().text;
                    case "empty":
                        return this.getElementManager().empty;
                    case "remove":
                        return this.getElementManager().remove;
                    case "getAsObject":
                        return this.getElementManager().getAsObject;
                    case "getAsJson":
                        return this.getElementManager().getAsJson;
                    case "getSibilings":
                        return this.getParentManager().getSiblings;
                    case "getParent":
                        return this.getParentManager().getParent;
                    case "getChilds":
                        return this.getParentManager().getChilds;
                    case "click":
                        return this.getParentManager().click;
                    case "doubleClick":
                        return this.getParentManager().doubleClick;
                    case "change":
                        return this.getParentManager().change;
                    case "keypress":
                        return this.getParentManager().keypress;
                    case "keydown":
                        return this.getParentManager().keydown;
                    case "keyup":
                        return this.getParentManager().keyup;
                    case "paste":
                        return this.getParentManager().paste;
                    case "blur":
                        return this.getParentManager().blur;
                    case "focus":
                        return this.getParentManager().focus;
                    case "submit":
                        return this.getParentManager().submit;
                    case "show":
                        return this.getCss().show;
                    case "hide":
                        return this.getCss().hide;
                    case "css":
                        return this.getCss().css;
                    case "setStyle":
                        return this.getCss().setStyle;
                    default:
                        return obj[prop];
                }
            }.bind(this)
        };
        return validator;
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
class ViewModel
{
    /**
     * 
     * @param data 
     */
    constructor()
    {
        this.data = {};
    }

    /**
     * 
     * @param elements 
     */
    resolveViews()
    {
        if (Array.isArray(this.views)) {
            for (let instance of this.views) {
                instance.set(this.data);
                instance.initialize();
            }
        } else {
            if (this.views instanceof HtmlElement) {
                console.log("2", this.data);
                this.views.set(this.data);
                this.views.initialize();
            }
        }
    }

    set(data)
    {
        if (typeof data != "object") {
            throw "Data passed to view model must be an object with key, value"
        }
        this.data = data;
        this.resolveViews();
    }

    setElements(views)
    {
        this.views = views;
    }

    getElements()
    {
        return this.views;
    }

    get(key)
    {
        return this.data[key];
    }
}

class Controller
{
    /**
     * 
     */
    constructor(resolveProperties = null)
    {
        this.di = new Service;
        this.viewModel = {};
        let injectable = new Injectable();
        return injectable.inject(this, resolveProperties);
    }

    /**
     * 
     */
    initialize()
    {
        
    }

    /**
     * 
     * @param key 
     * @param viewModel 
     */
    setViewModel(viewModel)
    {
        this.viewModel = viewModel;
    }

    /**
     * 
     * @param key 
     */
    getViewModel()
    {
        return this.viewModel;
    }

    /**
     * 
     */
    getDi()
    {
        return this.di;
    }

    /**
     * 
     * @param di 
     */
    setDi(di)
    {
        this.di = di;
    }
}
class Ajax
{
    /**
     *
     */
    constructor()
    {
        this.httpRequest = new XMLHttpRequest();
        this.context = {};
        this.method  = "POST";
        this.parameters = "";
        this.container  = [];
        this.responseFn = function() {};
        this.bfSendFn = function () {}.bind(this);
    }

    /**
     *
     */
    setContext(ctx)
    {
        this.context = ctx;
    }

    /**
     *
     */
    getContext()
    {
        return this.context;
    }

    /**
     *
     */
    setUrl(url)
    {
        this.url = url;
        return this;
    }

    /**
     *
     */
    getUrl()
    {
        return this.url;
    }

    /**
     *
     */
    set(key, value)
    {
        this.container[key] = value;
    }

    /**
     *
     */
    get(key)
    {
        return this.container[key];
    }

    /**
     *
     */
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

    /**
     *
     */
    POST()
    {
        this.setMethod("POST");
        return this;
    }

    /**
     *
     */
    PUT()
    {
        this.setMethod("PUT");
        return this;
    }

    /**
     *
     */
    DELETE()
    {
        this.setMethod("DELETE");
        return this;
    }

    /**
     *
     */
    GET()
    {
        this.setMethod("GET");
        return this;
    }

    /**
     *
     */
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

    /**
     *
     */
    response(responseFunction)
    {
        this.responseFn = responseFunction;
        try {
            this.bfSendFn();
            this.addContext();
            this.httpRequest.onreadystatechange = function () {
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
            }.bind(this);
        } catch (e) {
            console.log("Network.AJax.Exception", e);
        }
        return this;
    }

    /**
     *
     */
    beforeSend(fn)
    {
        this.bfSendFn = fn;
    }

    /**
     *
     */
    setHeaders()
    {
        this.httpRequest.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );
    }

    /**
     *
     */
    getError(errorFunction)
    {
        errorFunction(this.error);
    }

    /**
     * 
     */
    clear()
    {
        this.method     = "GET";
        this.parameters = "";
        this.error      = null;
        this.url        = "";
        this.bfSendFn   = function () {};
        this.responseFn = function () {};
        this.container  = [];
    }

    /**
     *
     */
    send(fn = false)
    {
        if (typeof fn == "function") {
            this.response(fn.bind(this));
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

class MethodType
{
    static get POST() { return "POST"; }
    static get GET() { return "GET"; }
    static get PUT() { return "PUT"; }
    static get DELETE() { return "DELETE"; }
}
class ComparisonOperators {
    static get AND() { return "&&"; }
    static get OR() { return "||"; }
    static get EQUAL() { return "=="; }
    static get DIFFERENT() { return "!="; }

    constructor()
    {

    }
}
class DataType {
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

class EntityManager
{
    /**
     * Entity manager is a class
     */
    constructor()
    {
        this.uow = new UnitOfWork;
        this.di  = new Service;
        this.container = new Container();
    }

    /**
     * 
     */
    getContainer()
    {
        return this.container;
    }

    /**
     * 
     * @param model 
     * @param params 
     */
    find(model, params = {})
    {
        this.setWhenIsModel(
            model,
            params,
            "find"
        );
        return this;
    }

    /**
     * 
     * @param model 
     * @param params 
     */
    findOne(model, params = {})
    {
        this.setWhenIsModel(
            model,
            params,
            "findOne"
        );
        return this;
    }

    /**
     * 
     * @param model 
     * @param params 
     */
    count(model, params = {})
    {
        this.setWhenIsModel(
            model,
            params,
            "count"
        );
        return this;
    }

    /**
     *
     */
    setWhenIsModel(model, params, type)
    {
        let objModel = new model();

        this.getContainer()
            .set("transactionModel", model);

        this.getContainer()
            .set("transactionObjModel", objModel);

        this.getContainer()
            .set("transactionParams", params);

        this.getContainer()
            .set(
            "transactionType",
            type
        );

        if (objModel instanceof RawModel) {
            let callAjax = false;
            
            if (objModel instanceof AjaxModelPersistent) {
                if (objModel.getAjaxInit() === null) {
                    this.callAjax(objModel, type, params);
                }
            } else if (objModel instanceof AjaxModel) {
                this.callAjax(objModel, type, params);
            }
        } else {
            throw "Model must be instance of RawModel";
        }
    }

    callAjax(objModel, type, params)
    {
        this.ajax = new Ajax();
        var url = null;
        switch (type) {
            case "find":
                    url = objModel.getFindUrl();
                break;
            case "findOne":
                    url = objModel.getFindOneUrl();
                break;
            case "insert":
                    url = objModel.getInsertUrl();
                break;
            case "update":
                    url = objModel.getUpdateUrl();
                break;
            case "delete":
                    url = objModel.getDeleteUrl();
                break;
            case "count":
                    url = objModel.getCountUrl();
                break;
        }
        if (url == null) {
            url = this.getDi().get("url").get("baseUrl") +
            this.lcfirst(objModel.getClassName()) +
            this.ucfirst(type);
        }
        this.ajax.setUrl(
            url
        );
        this.ajax.setParams(
            params
        );
        this.ajax.setMethod(
            objModel.getMethod()
        );
    }

    /**
     *
     */
    ucfirst(str)
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     *
     */
    lcfirst(str)
    {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    /**
     *
     */
    save(model)
    {
        this.getContainer()
            .set(
                "transactionModel",
                model
            );

        this.getContainer()
            .set(
                "transactionObjectModel",
                model
            );

        this.getContainer()
            .set(
                "transactionType",
                "save"
            );

        if (model instanceof AjaxModel) {
            this.ajax = new Ajax();
            var modelName = model.getClassName();

            switch (model.state) {
                case UnitOfWork.NEW:
                        var url = model.getInsertUrl();
                        if (url == null) {
                            url = this.getDi().get("url").get("baseUrl") +
                            this.lcfirst(modelName) +
                            "Insert";
                        }
                        this.ajax.setUrl(
                            url
                        );
                    break;
                case UnitOfWork.CREATED:
                        var url = model.getUpdateUrl();
                        if (url == null) {
                            url = this.getDi().get("url").get("baseUrl") +
                            this.lcfirst(modelName) +
                            "Update";
                        }
                        this.ajax.setUrl(
                            url
                        );
                    break;
            }

            var reflection = new Reflection();
            var attrsAsString = JSON.stringify(
                reflection.getAtttributeAsObjects(model)
            );
            var objParams = {};
            objParams[modelName] = attrsAsString;
            this.ajax.setParams(objParams);
            this.ajax.setMethod(
                model.getMethod()
            );

        } else if (model instanceof StaticModel) {
            switch (model.state) {
                case UnitOfWork.NEW:
                        let tempData = model.getData();
                    break;
                case UnitOfWork.CREATED:

                    break;
            }
        }

        return this;
    }

    /**
     *
     */
    delete(model)
    {
        this.getContainer()
            .set(
                "transactionModel",
                model
            );

        this.getContainer()
            .set(
                "transactionObjectModel",
                model
            );

        this.getContainer()
            .set(
                "transactionType",
                "delete"
            );

        if (model instanceof AjaxModel) {
            this.ajax = new Ajax();
            var modelName = model.getClassName();

            var url = model.getDeleteUrl();
            if (url == null) {
                url = this.getDi().get("url").get("baseUrl") +
                this.lcfirst(modelName) +
                "Delete";
            }
            this.ajax.setUrl(
                url
            );
            var reflection = new Reflection();
            var attrsAsString = JSON.stringify(
                reflection.getAtttributeAsObjects(model)
            );
            var objParams = {};
            objParams[modelName] = attrsAsString;
            this.ajax.setParams(objParams);
            this.ajax.setMethod(
                model.getMethod()
            );

        } else if (model instanceof StaticModel) {
            switch (model.state) {
                case UnitOfWork.NEW:
                        let tempData = model.getData();
                    break;
                case UnitOfWork.CREATED:

                    break;
            }
        }

        return this;
    }

    /**
     *
     */
    response(fn)
    {
        var model = this.getContainer()
            .get("transactionModel");

        var objModel = this.getContainer()
            .get("transactionObjModel");

        var type = this.getContainer()
            .get("transactionType");

        if (type == "save" || type == "delete") {
            this.ajax.response(function (response) {
                return fn(this.setResponse(
                    response,
                    objModel,
                    type,
                    model
                ));

            }.bind(this));

            this.ajax.send();

        } else {

            if (type == "find" || type == "findOne" || type == "count") {
                var params = this.getContainer()
                    .get("transactionParams");
            }

            this.checkModel(
                fn,
                type,
                model,
                objModel,
                params
            );
        }

        return this;
    }

    /**
     *
     */
    checkModel(fn, type, model, objModel, params)
    {
        if (objModel instanceof AjaxModelPersistent) {
            let data = objModel.getData();
            if (objModel.getAjaxInit() == null) {
                this.setResponseAjax(
                    fn,
                    type,
                    model,
                    objModel,
                    params
                );
            } else {
                this.setResponseStatic(
                    fn,
                    objModel,
                    type,
                    model,
                    params
                );
            }
        } else {
            if (objModel instanceof AjaxModel) {
                this.setResponseAjax(
                    fn,
                    type,
                    model,
                    objModel,
                    params
                );
            } else {
                if (objModel instanceof StaticModel) {
                    this.setResponseStatic(
                        fn,
                        objModel,
                        type,
                        model,
                        params
                    );
                }
            }
        }
    }

    /**
     *
     */
    setResponseAjax(fn, type, model, objModel, params)
    {
        this.ajax.response(function (response) {
            return fn(this.setResponse(
                response,
                objModel,
                type,
                model,
                params
            ));
        }.bind(this));
        this.ajax.send();
    }

    /**
     *
     */
    setResponseStatic(fn, objModel, type, model, params)
    {
        fn(this.setResponse(
            objModel.getData(),
            objModel,
            type,
            model,
            params
        ));
    }

    /**
     *
     */
    setResponse(data, objModel, type, model, params)
    {
        let resultSet = new Array();
        switch (type) {
            case "count":
            case "findOne":
                    resultSet = this.getResultSet(
                        data,
                        params,
                        model,
                        objModel
                    );
                    if (resultSet != false) {
                        resultSet = resultSet[0];
                    }
                break;
            case "find":
                    resultSet = this.getResultSet(
                        data,
                        params,
                        model,
                        objModel
                    );
                break;
            case "delete":
            case "save":
                    resultSet = data;
                break;
        }
        return resultSet;
    }

    /**
     *
     */
    getResultSet(response, params, model, objModel)
    {
        let resultSet = new Array();
        let hydrator = new Hydrator;

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
     */
    flush()
    {
        return false;
    }

    /**
     *
     */
    reset()
    {
        return false;
    }

    /**
     *
     */
    group()
    {
        return {};
    }

    /**
     *
     */
    distinct()
    {
        return {};
    }

    /**
     *
     */
    purge()
    {
        return false;
    }

    /**
     *
     */
    forget()
    {
        return false;
    }

    checksum(obj)
    {
        var keys = Object.keys(obj).sort();
        var output = [], prop;
        for (var i = 0; i < keys.length; i++) {
            prop = keys[i];
            output.push(prop);
            output.push(obj[prop]);
        }
        return JSON.stringify(output);
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

    setDi(di)
    {
        this.di = di;
    }

    /**
     * 
     */
    getDi()
    {
        return this.di;
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
                                        ComparisonOperators.AND,
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
                                            ComparisonOperators.OR,
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
                                            ComparisonOperators.AND,
                                            iIsNot,
                                            isNotLength,
                                            ComparisonOperators.DIFFERENT
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
                        ComparisonOperators.AND,
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
            case DataType.STRING_TYPE:
                    this.sort.push(
                        "data = Sort.sortByField('" + sortContent + "');"
                    );
                break;
            case DataType.OBJECT_TYPE:
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
                let valueByType = DataType.getValueByType(newVal[j]);
                condition += "row[\"" + key + "\"] " + comparison + " " + newVal[j] + " " + operatorStr + " ";
            }

        } else {
            let operatorStr = "";
            let valueByType = DataType.getValueByType(content);
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

class Sort
{
    static get ASC() { return 1; }
    static get DESC() { return -1; }

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
class InitializeComponents
{
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
        Di.set(
            "eventManager",
            new EventManager
        );
        Di.set(
            "ajax",
            new Ajax
        );
        Di.set(
            "em",
            new EntityManager
        );
        Di.set(
            "uuid",
            new Uuid
        );
        Di.set(
            "url",
            new Url
        );
    }
}
class Application
{
    /**
     * 
     */
    constructor(config)
    {
        this.config = config;
        this.fetchDi();
        window.onbeforeunload = function () {
            sessionStorage.clear();
        }
    }

    /**
     * 
     */
    fetchDi()
    {
        let injector = new InitializeComponents();
        injector.inject();
    }

    /**
     * 
     */
    start()
    {
        this.fetchDi();
        let starter = new Starter;
        starter.setConfig(this.config);
        starter.start();
    }
}

class ResolveController
{
    /**
     * 
     * @param controllers 
     */
    constructor(controllers)
    {
        this.controllers = controllers;
    }

    /**
     * 
     * @param controller 
     * @param key 
     */
    resolveProperties(controller)
    {
        let methods = Object.getOwnPropertyNames(
            Object.getPrototypeOf(controller)
        );
        for (let key of methods) {
            switch (typeof controller[key]) {
                case "function":
                    if (!ArrayHelper.inArray(Restricted.get(), key)) {
                        let ifExist = document.getElementById(key);
                        if (ifExist != null) {
                            if (typeof ifExist.nodeType != "undefined") {
                                controller[key](new ViewModel);
                            }
                        }
                    }
                break;
            }
        }
    }

    /**
     * 
     */
    resolve()
    {
        if (Array.isArray(this.controllers)) {
            for (let key in this.controllers) {
                let instance = new this.controllers[key](
                    this.resolveProperties
                );
                instance.initialize();
                if (instance instanceof Controller) {
                    this.resolveProperties(instance);
                }
            }
        }
    }
}

class ResolvePaths
{
    /**
     * 
     * @param paths 
     */
    constructor(paths)
    {
        this.paths = paths;
        this.di    = new Service;
    }

    /**
     * 
     */
    resolve()
    {
        for (let key in this.paths) {
            this.di.get("url").set(
                key,
                this.paths[key]
            );
        }
    }
}

class ResolveService
{
    /**
     * 
     */
    constructor(service = false)
    {
        if (service == false) {
            throw "Config : Service must be a json object";
        };
        this.service = new service;
    }

    /**
     * 
     */
    resolve()
    {
        this.service.initialize(new Di);
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

class Starter
{
    /**
     * 
     * @param scope 
     */
    setScope(scope)
    {
        this.scope = scope;
    }

    /**
     * 
     */
    getScope()
    {
        return this.scope;
    }

    /**
     * 
     */
    setControllers(controllers)
    {
        this.controllers = controllers;
    }

    /**
     * 
     */
    getControllers()
    {
        return this.controllers;
    }

    /**
     * 
     * @param config 
     */
    setConfig(config)
    {
        this.config = config;
    }

    /**
     * 
     */
    getConfig()
    {
        return this.config.get();
    }

    /**
     * 
     * @param data 
     */
    setData(data)
    {
        this.data = data;
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
    resolvePath()
    {
        let config = this.getConfig();
        if (typeof config["paths"] == "undefined") {
            throw "Config: item paths must be mandatory.";
        }
        new ResolvePaths(
            config["paths"]
        ).resolve();
    }

    /**
     * 
     */
    resolveService()
    {
        let config = this.getConfig();
        if (typeof config["service"] != "undefined") {
            new ResolveService(
                config["service"]
            ).resolve();
        }
    }

    /**
     * 
     */
    resolveControllers()
    {
        let config = this.getConfig();
        if (typeof config["controllers"] == "undefined") {
            throw "Config: item controllers must be mandatory.";
        }
        new ResolveController(
            config["controllers"]
        ).resolve();
    }

    /**
     * 
     */
    start()
    {
        this.resolvePath();
        this.resolveService();
        this.resolveControllers();
    }
}

class Url extends Service
{
    constructor()
    {
        super();
    }

    /**
     * 
     * @param url 
     */
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

