
import { RawModel } from "./RawModel";
import { SessionStorage } from "../../Di/SessionStorage";

class StaticModel extends RawModel
{
    index : number;
    storage;
    di;

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
        let data : string = this.storage.get(
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