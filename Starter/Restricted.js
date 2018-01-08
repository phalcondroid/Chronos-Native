
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