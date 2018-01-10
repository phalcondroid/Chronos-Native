


/**
 * [ViewElement description]
 * @type 
 */
class Img extends HtmlElement
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
                    "IMG"
                )
            );
            this.initialize();
        }
    }

    width(width)
    {
        this.getElement().style.width = width;
        return this;
    }

    height(height)
    {
        this.getElement().style.width = height;
        return this;
    }

    src(src)
    {
        this.attr("src", src);
        return this;
    }
}