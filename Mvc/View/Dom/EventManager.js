class EventManager
{
    /**
     * 
     * @param element 
     */
    constructor()
    {
        this.components = {};
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    attach(component, eventName, fn)
    {
        if (!Array.isArray(this.components[component][eventName])) {
            this.components[component][eventName] = new Array;
        }
        this.components[component][eventName].push(fn);
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    fire(component, eventName)
    {
        let eventsToFire = this.components[component][eventName];
        if (Array.isArray(eventsToFire)) {
            for (let item of eventsToFire) {
                item();
            }
        }
    }

    static getEvents()
    {
        return ["click", "doubleClick", "change", "keypress", "keydown", "keyup", "paste", "blur", "focus", "submit"];
    }

    /**
     * 
     * @param {*} eventName 
     * @param {*} element 
     * @param {*} fn 
     */
    setEventToElement(element, eventName, fn)
    {
        if (Array.isArray(element)) {
            for (let item of element) {
                this.element.addEventListener(
                    eventName,
                    fn
                );
            }
        } else {
            element.addEventListener(
                eventName,
                fn
            );
        }
        return this;
    }

    /**
     * 
     * @param  {Function} fn [description]
     * @return       [description]
     */
    click(fn)
    {
        this.setEventToElement(
            "click",
            fn
        );
        return this;
    }

    /**
     *
     */
    doubleClick(fn)
    {
        this.setEventToElement(
            "dblclick",
            fn
        );
        return this;
    }

    /**
     *
     * @return  [description]
     */
    change(fn)
    {
        this.setEventToElement(
            "change",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    keypress(fn)
    {
        this.setEventToElement(
            "keypress",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    keydown(fn) {
        this.setEventToElement(
            "keydown",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    keyup(fn) {
        this.setEventToElement(
            "keyup",
            fn
        );
        return this;
    }

    paste(fn)
    {
        this.setEventToElement(
            "paste",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    blur(fn)
    {
        this.setEventToElement(
            "blur",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return  [description]
     */
    focus(fn)
    {
        this.setEventToElement(
            "focus",
            fn
        );
        return this;
    }

    /**
     * 
     * @param fn
     */
    submit(fn)
    {
        this.setEventToElement(
            "submit",
            fn
        );
        return this;
    }
}