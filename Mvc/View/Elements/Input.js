

import { FormTag } from "./forms/FormTag";

/**
 * 
 * @type 
 */
class Input extends FormTag
{
    static NUMBERS = 0;
    static TEXT = 1;
    static NO_SPECIAL_CHARACTERS = 2;
    static TEXT_NO_SPECIAL_CHARACTERS = 3;
    static NUMBERS_NO_SPECIAL_CHARACTERS = 4;

    /**
     * 
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "INPUT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
    
    /**
     * [type description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    type(type)
    {
        this.attr("type", type);
        return this;
    }

    /**
     *
     */
    setText()
    {
        this.attr("type", "text");
        return this;
    }

    /**
     *
     */
    setHidden()
    {
        this.attr("type", "hidden");
        return this;
    }

    /**
     *
     */
    setNumber()
    {
        this.attr("type", "number");
        return this;
    }

    /**
     *
     */
    setDate()
    {
        this.attr("type", "number");
        return this;
    }

    /**
     *
     */
    setFile()
    {
        this.attr("type", "file");
        return this;
    }
}