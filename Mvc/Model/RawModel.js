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
        return this.modelName;
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