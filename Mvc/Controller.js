
class Controller
{
    /**
     * 
     */
    constructor(resolveProperties = null)
    {
        this.di = new Service;
        let injectable = new Injectable();
        return injectable.inject(this, resolveProperties);
    }

    /**
     * 
     * @param key 
     * @param viewModel 
     */
    setView(viewModel)
    {
        this.view = viewModel;
    }

    /**
     * 
     * @param key 
     */
    getView()
    {
        return this.view;
    }

    /**
     * 
     */
    getViewElement()
    {
        return this.viewElement;
    }

    /**
     * 
     * @param di 
     */
    setViewElement(view)
    {
        this.viewElement = view;
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