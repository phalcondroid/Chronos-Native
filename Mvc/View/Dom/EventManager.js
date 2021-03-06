class EventManager
{
    /**
     * 
     * @param element 
     */
    constructor()
    {
        this.components = {};
        this.eventNow   = {};
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    attach(component, eventName, fn)
    {
        if (!Array.isArray(this.components[component])) {
            this.components[component] = new Array;
        }
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
    fire(component, eventName, params)
    {
        let eventsToFire = this.components[component][eventName];
        if (Array.isArray(eventsToFire)) {
            for (let item of eventsToFire) {
                item(params);
            }
        }
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    set(component, eventName, func) 
    {
        this.eventNow[component] = {};
        this.eventNow[component][eventName] = func;
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     * @param {*} params 
     */
    execute(component, eventName, params)
    {
        let eventToFire = this.eventNow[component][eventName];
        if (typeof eventToFire == "function") {
            eventToFire(params);
        }
    }

    /**
     * 
     * @param {*} component 
     * @param {*} eventName 
     */
    clear(component, eventName)
    {
        this.components[component][eventName] = new Array;
    }

    /**
     * 
     */
    static getEvents()
    {
        return [
            "click",
            "doubleClick",
            "change",
            "keypress",
            "keydown",
            "keyup",
            "paste",
            "blur",
            "focus",
            "submit"
        ];
    }

    /**
     * 
     * 
     * @param {*} eventName 
     * @param {*} element 
     * @param {*} fn 
     */
    setEventToElement(element, eventName, fn, data = false)
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
                function () {
                    let element = Di.get("elementAdapter").setElement(this).get();
                    fn.bind(data)(element)
                }
            );
        }
        return this;
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
    getDi()
    {
        return Di;
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
    getEm()
    {
        return this.getDi().get("em");
    }
}