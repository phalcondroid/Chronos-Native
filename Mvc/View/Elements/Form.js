import { Service }        from "../../../Di/Service";
import { HtmlElement }    from "../Wrappers/HtmlElement";
import { ElementAdapter } from "../Adapter/ElementAdapter"; 

/**
 * 
 * @type 
 */
class Form extends HtmlElement
{
    /**
     *
     */
    invalidElements = new Array;

    /**
     * 
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FORM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     * @param {Function} fn
     */
    submit(fn : Function)
    {
        this.getElement().addEventListener("submit", function (event) {
            let returnCallback = fn.bind(this)(event);
            if (returnCallback == false || typeof returnCallback == "undefined") {
                event.preventDefault();
            }
            return true;
        }.bind(this));
    }

    /**
     * 
     */
    getInvalidElements()
    {
        return this.invalidElements;
    }

    /**
     * 
     */
    validate(fn : Function)
    {
        let elements = this.getFormElements();
        this.invalidElements = new Array;
        if (elements.length > 0) {
            for (let item of elements) {
                if (item.val() == "") {
                    this.invalidElements.push(
                        item
                    );
                }
            }
            if (this.invalidElements.length == 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    /**
     * 
     */
    getFormElements()
    {
        let northwindElements = new Array;
        let elements = this.getElement().elements;
        for (let item of elements) {
            let aux = new ElementAdapter(item);
            let element = aux.get();
            if (element != false) {
                northwindElements.push(
                    element
                );
            }
        }
        return northwindElements;
    }

    /**
     * 
     */
    setAutoComplete(data : Boolean)
    {
        if (data) {
            this.attr("autocomplete", "on");
        } else {
            this.attr("autocomplete", "off");
        }
        return this;
    }

    /**
     * 
     */
    getAutoComplete()
    {
        return this.attr("autocomplete");
    }
}