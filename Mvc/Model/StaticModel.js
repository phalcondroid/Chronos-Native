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