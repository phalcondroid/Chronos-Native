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
        this.config = this.getDi().get("config");
    }

    /**
     * 
     * @param {*} component 
     * @param {*} methodName 
     */
    start(component, responseMethodName)
    {
        this.component = component;
        this.responseMethodName = responseMethodName;
        this.eventManager.attach(component, responseMethodName);
        return this;
    }

    /**
     * 
     * @param {*} model 
     * @param {*} params 
     */
    find(model, params = {})
    {
        this.ajax = this.getDi().get("ajax");
        objModel  = new model;
        let url   =  + this.lcfirst(obj.getModelName()) + "/find";

        console.log(url);

        this.ajax.setUrl(url);
        this.ajax.setParams(params);
        this.ajax.setMethod(objModel.getMethod());
        this.ajax.response(() => {
            this.eventManager.fire(this.component, this.responseMethodName);
        });
        this.ajax.send();
    }

    /**
     * 
     * @param {*} model 
     * @param {*} params 
     */
    findOne(model, params = {})
    {

    }

    getUrl(modelUrl, type) {
        let paths = this.config["paths"];
        let baseUri = paths["baseUri"];
        let modelName = this.lcfirst(objModel.getClassName());
        return baseUri + "/find/" + modelName; 
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

    getModel()
    {
        return this.model;
    }

    setDi(di)
    {
        this.di = di;
    }

    getDi()
    {
        return Di;
    }
}