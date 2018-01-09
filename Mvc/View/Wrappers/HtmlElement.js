
class HtmlElement
{
    /**
     * 
     * @param tagName 
     */
    constructor()
    {
        this.CSS_MANAGER     = "Chronos.Dom.CssManager";
        this.PARENT_MANAGER  = "Chronos.Dom.DomManager";
        this.ELEMENT_MANAGER = "Chronos.Dom.ElementManager";

        let localDecorator = new Proxy(
            this,
            this.getValidator()
        );
        return localDecorator;
    }

    initialize(args)
    {
    }

    /**
     * 
     * @param viewModel 
     */
    set(data)
    {
        this.viewModelData = data;
    }

    /**
     * 
     */
    get(key)
    {
        return this.viewModelData[key];
    }

    /**
     * 
     */
    setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    getElement()
    {
        return this.element;
    }

    /**
     * 
     */
    getCss()
    {
        let css = this.getDi().get(
            this.CSS_MANAGER
        );
        css.setElement(this.getElement());
        return css;
    }

    /**
     * 
     */
    getElementManager()
    {
        let em = Di.get(
            this.ELEMENT_MANAGER
        );
        console.log(Di.getAll(), em, this.getElement());
        em.setElement(this.getElement());
        return em;
    }

    /**
     * 
     */
    getParentManager()
    {
        let pm = this.getDi().get(
            this.PARENT_MANAGER
        );
        pm.setElement(this.getElement());
        return pm;
    }

    getEventManager()
    {
        let em = this.getDi().get(
            "eventManager"
        );
        em.setElement(this.getElement());
        return em;
    }

    /**
     * 
     * @param tagName 
     */
    create(tagName)
    {
        this.element = document.createElement(
            tagName
        );
        return this;
    }

    /**
     * [getClassName description]
     * @return  [description]
     */
    getClassName()
    {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }

    /**
     * 
     */
    getChecksum()
    {
        let str = this.getClassName() + JSON.stringify(this);
        return window.btoa(
            encodeURIComponent(str)
        );
    }

    /**
     * 
     */
    getValidator()
    {
        let validator = {
            get : function get(obj, prop) {
                switch (prop) {
                    case "append":
                        return this.getElementManager().append;
                    case "attr":
                        return this.getElementManager().attr;
                    case "setAttribute":
                        return this.getElementManager().setAttribute;
                    case "removeAttribute":
                        return this.getElementManager().removeAttribute;
                    case "class":
                        return this.getElementManager().class;
                    case "addClass":
                        return this.getElementManager().addClass;
                    case "removeClass":
                        return this.getElementManager().removeClass;
                    case "setId":
                        return this.getElementManager().setId;
                    case "getId":
                        return this.getElementManager().getId;
                    case "setRequired":
                        return this.getElementManager().setRequired;
                    case "getRequired":
                        return this.getElementManager().getRequired;
                    case "html":
                        return this.getElementManager().html;
                    case "setHtml":
                        return this.getElementManager().setHtml;
                    case "setValue":
                        return this.getElementManager().setValue;
                    case "val":
                        return this.getElementManager().val;
                    case "getValue":
                        return this.getElementManager().getValue;
                    case "valAsInt":
                        return this.getElementManager().valAsInt;
                    case "text":
                        return this.getElementManager().text;
                    case "empty":
                        return this.getElementManager().empty;
                    case "remove":
                        return this.getElementManager().remove;
                    case "getAsObject":
                        return this.getElementManager().getAsObject;
                    case "getAsJson":
                        return this.getElementManager().getAsJson;
                    case "getSibilings":
                        return this.getParentManager().getSiblings;
                    case "getParent":
                        return this.getParentManager().getParent;
                    case "getChilds":
                        return this.getParentManager().getChilds;
                    case "click":
                        return this.getParentManager().click;
                    case "doubleClick":
                        return this.getParentManager().doubleClick;
                    case "change":
                        return this.getParentManager().change;
                    case "keypress":
                        return this.getParentManager().keypress;
                    case "keydown":
                        return this.getParentManager().keydown;
                    case "keyup":
                        return this.getParentManager().keyup;
                    case "paste":
                        return this.getParentManager().paste;
                    case "blur":
                        return this.getParentManager().blur;
                    case "focus":
                        return this.getParentManager().focus;
                    case "submit":
                        return this.getParentManager().submit;
                    case "show":
                        return this.getCss().show;
                    case "hide":
                        return this.getCss().hide;
                    case "css":
                        return this.getCss().css;
                    case "setStyle":
                        return this.getCss().setStyle;
                    default:
                        return obj[prop];
                }
            }.bind(this)
        };
        return validator;
    }

    /**
     * 
     * @param di 
     */
    setDi(di)
    {
        this.di = di;
        return this;
    }

    /**
     * 
     */
    getDi()
    {
        return this.di;
    }
}