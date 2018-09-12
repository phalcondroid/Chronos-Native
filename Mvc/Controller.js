
class Controller
{
    /**
     * 
     */
    constructor(resolveProperties = null)
    {
        this.di = new Service;
        let injectable = new Injectable();
        this.element = null;
        return injectable.inject(this, resolveProperties);
    }

    /**
     * 
     * @param key 
     * @param viewModel 
     */
    setElement(element)
    {
        this.element = element;
    }

    /**
     * 
     * @param key 
     */
    getElement()
    {
        return this.element;
    }

    getEm()
    {
        return this.getDi().get("em");
    }

    getEventManager()
    {
        return this.getDi().get("eventManager");
    }

    getEvent(element, event, data = false)
    {
        this.getEventManager().setEventToElement(
            this.element.getElement(),
            eventName,
            data
        );
    }

    getDom()
    {
        return this.getDi().get("dom");
    }

    getById(id)
    {
        return this.getDom().getById(id);
    }

    getTag(tag)
    {
        return this.getDom().create(
            tag
        );
    }

    getAjax()
    {
        return this.getDi().get("");
    }

    /**
     * 
     */
    getDi()
    {
        return Di;
    }
}