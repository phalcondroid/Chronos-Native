class CssManager
{
    /**
     * 
     */
    element;

    /**
     * 
     * @param element 
     */
    constructor()
    {
        
    }

    /**
     * 
     * @param element 
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
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param String|Object value
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
     * @param String|Object value
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
}