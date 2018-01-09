/**
 * [ViewElement description]
 * @type 
 */
class Time extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TIME"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}