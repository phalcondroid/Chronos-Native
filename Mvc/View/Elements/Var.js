/**
 * [ViewElement description]
 * @type 
 */
class Var extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "VAR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
