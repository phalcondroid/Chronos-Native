
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
        this.di = Di;
        this.data = new ViewModel;

        return new Proxy(
            this,
            this.getValidator()
        );
    }

    initialize(args)
    {
    }

    /**
     * 
     * @param {*} viewModel 
     */
    setData(viewModel)
    {
        this.data = viewModel;
    }

    /**
     * 
     */
    getData()
    {
        return this.data;
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
     * 
     */
    getChecksum()
    {
        let str = this.getClassName() + JSON.stringify(this);
        return window.btoa(
            encodeURIComponent(str)
        );
    }

    getDom()
    {
        return this.getDi().get("dom");
    }

    /**
     * 
     */
    getValidator()
    {
        let validator = {
            get : function get(target, name) {
                switch (name) {
                    case "dom":
                        return this.getDi().get("dom");
                    case "append":
                        return this.getElementManager().append.bind(
                            this.getElementManager()
                        );
                    case "attr":
                        return this.getElementManager().attr.bind(
                            this.getElementManager()
                        );
                    case "setAttribute":
                        return this.getElementManager().setAttribute.bind(
                            this.getElementManager()
                        );
                    case "removeAttribute":
                        return this.getElementManager().removeAttribute.bind(
                            this.getElementManager()
                        );
                    case "class":
                        return this.getElementManager().class.bind(
                            this.getElementManager()
                        );
                    case "addClass":
                        return this.getElementManager().addClass.bind(
                            this.getElementManager()
                        );
                    case "removeClass":
                        return this.getElementManager().removeClass.bind(
                            this.getElementManager()
                        );
                    case "setId":
                        return this.getElementManager().setId.bind(
                            this.getElementManager()
                        );
                    case "getId":
                        return this.getElementManager().getId.bind(
                            this.getElementManager()
                        );
                    case "setRequired":
                        return this.getElementManager().setRequired.bind(
                            this.getElementManager()
                        );
                    case "getRequired":
                        return this.getElementManager().getRequired.bind(
                            this.getElementManager()
                        );
                    case "html":
                        return this.getElementManager().html.bind(
                            this.getElementManager()
                        );
                    case "setHtml":
                        return this.getElementManager().setHtml.bind(
                            this.getElementManager()
                        );
                        return this.getElementManager().setValue.bind(
                            this.getElementManager()
                        );
                    case "val":
                        return this.getElementManager().val.bind(
                            this.getElementManager()
                        );
                    case "getValue":
                        return this.getElementManager().getValue.bind(
                            this.getElementManager()
                        );
                    case "valAsInt":
                        return this.getElementManager().valAsInt.bind(
                            this.getElementManager()
                        );
                    case "text":
                        return this.getElementManager().text.bind(
                            this.getElementManager()
                        );
                    case "empty":
                        return this.getElementManager().empty.bind(
                            this.getElementManager()
                        );
                    case "remove":
                        return this.getElementManager().remove.bind(
                            this.getElementManager()
                        );
                    case "getAsObject":
                        return this.getElementManager().getAsObject.bind(
                            this.getElementManager()
                        );
                    case "getAsJson":
                        return this.getElementManager().getAsJson.bind(
                            this.getElementManager()
                        );
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
                    case "className":
                        return target.constructor.name;
                    default:
                        return target[name];
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