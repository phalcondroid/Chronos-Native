 

/**
 *
 * @type
 */
class Option extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "OPTION"
                )
            );
            this.initialize();
        }
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
