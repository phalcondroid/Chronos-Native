/**
 * [ViewElement description]
 * @type {[type]}
 */
class Ruby extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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