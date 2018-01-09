/**
 * [ViewElement description]
 * @type 
 */
class Ruby extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "RUBY"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}