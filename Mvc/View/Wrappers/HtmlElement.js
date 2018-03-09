
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
        /*
        return new Proxy(
            this,
            this.getValidator()
        );
        */
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

    getParent()
    {
        let parent = this.element.parentElement;
        if (parent.nodeType == 1) {
            let adapter = new ElementAdapter(
                parent
            );
            let tagObject = adapter.get();
            return tagObject;
        }
        return false;
    }

    getSiblings()
    {
        let siblings = this.getParent().getChilds();
        if (siblings.length > 0) {
            let aux = new Array;
            for (let item of siblings) {
                if (item.getElement() != this.getElement()) {
                    aux.push(item);
                }
            }
            return aux;
        }
        return false;
    }

    getChilds()
    {
        let childNodes = this.element.childNodes;
        let childs = new Array();
        for (let key in childNodes) {
            if (childNodes[key].nodeType == 1) {
                let adapter = new ElementAdapter(
                    childNodes[key]
                );
                let tagObject = adapter.get();
                childs.push(
                    tagObject
                );
            }
        }
        return childs;
    }

    /**
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param  value
     * @return this
     */
    css(key, value = null) {
        if (typeof key == "object") {
            for (let keyItem in key) {
                this.element.style[key] = key[keyItem];
            }
        } else if (typeof key == "string" && value != null) {
            this.element.style[key] = value;
        } else if (typeof key == "string" && value == null) {
            return this.element.style[key];
        }
        return this;
    }

    /**
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param  value
     * @return this
     */
    setStyle(key, value = null) {
        if (typeof key == "object") {
            for (let keyItem in key) {
                this.element.style[key] = key[keyItem];
            }
        } else if (typeof key == "string" && value != null) {
            this.element.style[key] = value;
        } else if (typeof key == "string" && value == null) {
            return this.element.style[key];
        }
        return this;
    }

    /**
     * Set class attribute
     * 
     * @param  String attrClass 
     * @return this
     */
    class(attrClass)
    {
        this.element.setAttribute("class", attrClass);
        return this;
    }

    /**
     * Set new class but deletes previous classes added
     * 
     * @param String attrClass
     */
    setClass(attrClass)
    {
        this.element.setAttribute(
            "class",
            attrClass
        );
        return this;
    } 

    /**
     * Concat class to element
     * 
     * @param  String attrClass
     * @return 
     */
    addClass(attrClass)
    {
        let strClass = this.element.getAttribute("class");
        strClass += " " + attrClass;
        this.element.setAttribute("class", strClass);
        return this;
    }

    /**
     * Set childs as append does 
     * 
     * @return Object this
     */
    addChild(element)
    {
        this.element.append(element);
        return this;
    }

    /**
     * 
     */
    show()
    {
        this.element.style.display = "";
        return this;
    }

    /**
     * 
     */
    hide()
    {
        this.element.style.display = "none";
        return this;
    }

    /**
     * Set id attribute
     * @param {String} id
     * @return this
     */
    setId(id)
    {
        this.attr("id", id);
        return this;
    }

    /**
     * Get id attribute
     * @return {String}
     */
    getId()
    {
        return this.attr("id");
    }

    /**
     * Set required attribute
     * å
     */
    setRequired(req)
    {
        this.element.required = req;
        return this;
    }

    /**
     * Get required attribute
     * @return {Boolean}
     */
    getRequired()
    {
        return this.element.required;
    }

    /**
     * 
     * @param append 
     */
    checkAppendValue(append)
    {
        switch (typeof append) {
            case "string":
                    this.element.appendChild(
                        document.createTextNode(append)
                    );
                break;
            case "number":
                    this.element.appendChild(
                        document.createTextNode(
                            append.toString()
                        )
                    );
                break;
            case "object":
                    if (typeof append.getElement() != "undefined") {
                        this.verifyElement(
                            append.getElement()
                        );
                    } else {
                        this.verifyElement(
                            append
                        );
                    }
                break;
            default:

                break;
        }
    }

    /**
     * 
     * @param append 
     * @param type 
     */
    verifyElement(append, type = "append")
    {
        if (this.element instanceof HTMLCollection) {
            for (let key in this.element) {
                if (typeof this.element[key].nodeType != "undefined") {
                    if (this.element[key].nodeType == 1) {
                        this.element[key].appendChild(append);
                    }
                }
            }
        } else {
            this.element.appendChild(
                append
            );
        }
    }

    /**
     * 
     * @param append 
     */
    append(append)
    {
        if (Array.isArray(append) || (append instanceof HTMLCollection)) {
            for (let key in append) {
                this.checkAppendValue(
                    append[key]
                );
            }
        } else {
            this.checkAppendValue(
                append
            );
        }

        return this;
    }

    /**
     * Set class 
     * @param  { String } attrClass 
     * @return this
     */
    class(attrClass)
    {
        this.element.setAttribute("class", attrClass);
        return this;
    }

    /**
     * 
     * @param  { String } cssClass
     * @return 
     */
    addClass(attrClass)
    {
        let strClass = this.element.getAttribute("class");
        strClass += " " + attrClass;
        this.element.setAttribute("class", strClass);
        return this;
    }

    /**
     * 
     * @param  { String } attribute
     * @return { this | attribute}
     */
    attr(attr, value = false)
    {
        if (typeof attr == "object" && value == false) {
            for (let key in attr) {
                this.element.setAttribute(key, attr[key]);
            }
        } else if (typeof attr == "string" && value != false) {
            this.element.setAttribute(attr, value);
        } else if (typeof attr == "string" && value == false) {
            return this.element.getAttribute(attr);
        }
        return this;
    }

    /**
     * 
     * @param {String} attribute
     */
    removeAttr(attr)
    {
        this.element.removeAttribute(attr);
        return this;
    }

    /**
     *
     * @param  
     * @return
     */
    html(html = null)
    {
        if (html != null) {
            this.removeChildNodes();
            this.append(html);
            return this;
        } else {
            return this.element.innerHTML;
        }
    }

    /**
     * 
     * @param html 
     */
    setHtml(html = null)
    {
        if (html = null) {
            this.removeChildNodes();
            this.append(html);
            return this;
        } else {
            return this.element.innerHTML;
        }
    }

    /**
     *
     */
    removeChildNodes()
    {
        if (this.element instanceof HTMLCollection) {
            for (let key in this.element) {
                this.removeChilds(
                    this.element[key],
                    this.element[key].childNodes
                );
            }
        } else {
            this.removeChilds(
                this.element,
                this.element.childNodes
            );
        }
    }

    /**
     *
     */
    removeChilds(element, childs)
    {
        while (element.firstChild) {
            element.removeChild(
                element.firstChild
            );
        }
    }

    /**
     *
     * @param          val [description]
     * @return    [description]
     */
    val(val = false)
    {
        if (val || typeof val == "string") {
            this.element.value = val;
            this.attr("value", val);
            return this;
        } else {
            return this.element.value;
        }
    }

    /**
     *
     * @param          val [description]
     * @return    [description]
     */
    getValue(val = false)
    {
        if (val || typeof val == "string") {
            this.element.value = val;
            this.attr("value", val);
            return this;
        } else {
            return this.element.value;
        }
    }

    /**
     * 
     */
    valAsInt()
    {
        return parseInt(this.val());
    } 

    /**
     * 
     * @param          text [description]
     * @return    [description]
     */
    text(text = false) {
        if (text) {
            this.element.innerHtml = text;
            return this;
        } else {
            return this.element.innerHtml;
        }
    }

    /**
     * 
     */
    empty()
    {
        this.removeChildNodes();
        return this;
    }

    /**
     * 
     * @param element 
     */
    remove(element = false)
    {
        if (element) {
            this.getElement().removeChild(
                element
            );
        } else {
            this.getElement().parentElement.removeChild(
                this.getElement()
            );
        }
    }

    /**
     * 
     */
    getAsObject()
    {
        let childs = this.element.childNodes;
        let obj    = new Array();

        if (childs instanceof NodeList) {
            for (let key in childs) {
                if (typeof childs[key].nodeType != "undefined") {
                    switch (childs[key].nodeType) {
                        case Node.ELEMENT_NODE:
                                let adapter = new ElementAdapter(
                                    childs[key]
                                );
                                let auxElement = adapter.get();
                                let finalObj  = {};
                                let auxObject = auxElement.getAsObject();
                                finalObj[auxElement.getClassName().toLowerCase()] = auxObject;
                                if (auxObject.length > 0) {
                                    obj.push(finalObj);
                                }
                            break;
                        case Node.TEXT_NODE:
                                obj.push(
                                    childs[key].nodeValue
                                );
                            break;
                    }
                }
            }
        }
        return obj;
    }

    /**
     * 
     */
    getAsJson()
    {
        let objects = this.getAsObject();
        return JSON.stringify(
            objects
        );
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

    /** 
     * 
     */
    getDom()
    {
        return this.getDi().get("dom");
    }
    
    /** 
     * 
     */
    getEventManager()
    {
        return this.getDi().get("eventManager");
    }

    /**
     * 
     */
    getEm()
    {
        return this.getDi().get("em");
    }

    /**
     * 
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
    */

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