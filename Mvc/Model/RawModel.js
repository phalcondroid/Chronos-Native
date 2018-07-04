class RawModel
{
    constructor()
    {
        this.state     = 1;
        this.identify  = Uuid.get();
        this.modelName = this.getClassName();
    }

    /**
     * 
     */
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

    /**
     * [getClassName description]
     * @return  [description]
     */
    getClassName()
    {
        return this.constructor.name;
    }

    /**
     *
     */
    getIdentify()
    {
        return this.identify;
    }
}