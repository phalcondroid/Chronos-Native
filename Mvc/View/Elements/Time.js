/**
 * [ViewElement description]
 * @type {[type]}
 */
class Time extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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