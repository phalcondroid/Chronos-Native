

import { I } from "./I";

/**
 *
 */
class Button extends HtmlElement
{

    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BUTTON"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     *
     * @param
     * @return
     */
    type(type) {
        this.attr("type", type);
        return this;
    }

    /**
     *
     * @return
     */
    favIcon(favIcon)
    {
        let icon = new I()
        .class(favIcon);
        this.append(icon);
        return this;
    }

    /**
     *
     * @return
     */
    success()
    {
        this.addClass("btn btn-success");
        return this;
    }

    /**
     *
     * @return
     */
    notice()
    {
        this.addClass("btn btn-notice");
        return this;
    }

    /**
     *
     * @return
     */
    default()
    {
        this.addClass("btn btn-default");
        return this;
    }

    /**
     *
     * @return
     */
    primary()
    {
        this.addClass("btn btn-primary");
        return this;
    }

    /**
     * [warning description]
     * @return {[type]} [description]
     */
    warning()
    {
        this.addClass("btn btn-warning");
        return this;
    }

    /**
     * [danger description]
     * @return {[type]} [description]
     */
    danger()
    {
        this.addClass("btn btn-danger");
        return this;
    }
}