
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

    getDom()
    {
        return this.getDi().get("dom");
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