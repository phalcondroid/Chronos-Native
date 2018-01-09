 

/**
 *
 * @type
 */
class Option extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OPTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    setValue(val)
    {
        this.attr("value", val);
        return this;
    }

    /**
     *
     */
    getValue()
    {
        return this.attr("value");
    }

    /**
     *
     */
    setContent(content)
    {
        this.append(content);
        return this;
    }

    /**
     *
     */
    getContent()
    {
        return this.getElement().text;
    }
}
