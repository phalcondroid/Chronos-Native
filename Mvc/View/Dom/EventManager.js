class EventManager
{
    /**
     * 
     * @param element 
     */
    constructor()
    {
    }

    setEventToElement(eventName, fn)
    {
        if (Array.isArray(this.element)) {
            for (let item of this.element) {
                this.element.addEventListener(
                    eventName,
                    fn.bind(this)
                );
            }
        } else {
            this.element.addEventListener(
                eventName,
                fn.bind(this)
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