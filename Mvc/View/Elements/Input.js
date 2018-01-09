/**
 * 
 * @type 
 */
class Input extends FormTag
{
    static get NUMBERS() { return 0; }
    static get TEXT() { return 1; }
    static get NO_SPECIAL_CHARACTERS() { return 2; }
    static get TEXT_NO_SPECIAL_CHARACTERS() { return 3; }
    static get NUMBERS_NO_SPECIAL_CHARACTERS() { return 4; }

    /**
     * 
     */
    constructor(args = {})
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
     * @param   type [description]
     * @return       [description]
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