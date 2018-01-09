


/**
 * [ViewElement description]
 * @type 
 */
class Img extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "IMG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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