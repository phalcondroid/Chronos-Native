/**
 * [ViewElement description]
 * @type 
 */
class Obj extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.setElement(
            document.createElement(
                "OBJ"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}