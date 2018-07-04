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

        this.eventManager.attach(
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
            this.eventManager.fire(
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
        let baseUri = this.url.get("baseUri");
        let modelName = StringHelper.lcfirst(model.getModelName());
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