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

    /**
     * [getClassName description]
     * @return  [description]
     */
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