import { Container }   from "../../Di/Container";
import { HtmlElement } from "./Wrappers/HtmlElement";

class ViewModel
{
    views;
    data = {};

    /**
     * 
     * @param data 
     */
    constructor()
    {
    }

    /**
     * 
     * @param elements 
     */
    resolveViews()
    {
        if (Array.isArray(this.views)) {
            for (let instance of this.views) {
                instance.set(this.data);
                instance.initialize();
            }
        } else {
            if (this.views instanceof HtmlElement) {
                console.log("2", this.data);
                this.views.set(this.data);
                this.views.initialize();
            }
        }
    }

    set(data)
    {
        if (typeof data != "object") {
            throw "Data passed to view model must be an object with key, value"
        }
        this.data = data;
        this.resolveViews();
    }

    setElements(views)
    {
        this.views = views;
    }

    getElements()
    {
        return this.views;
    }

    get(key)
    {
        return this.data[key];
    }
}