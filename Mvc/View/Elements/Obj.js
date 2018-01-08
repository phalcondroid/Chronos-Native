import { Service }     from "../../../Di/Service";


/**
 * [ViewElement description]
 * @type {[type]}
 */
class Obj extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
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