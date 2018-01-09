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