class AjaxModelPersistent extends StaticModel
{
    container = new SessionStorage;
    source;
    insertUrl = null;
    deleteUrl = null;
    updateUrl = null;
    findUrl   = null;
    params;
    internalId;
    method;

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

    setParams(params : Object)
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