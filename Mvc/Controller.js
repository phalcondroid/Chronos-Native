
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

    /**
     * 
     */
    getDi()
    {
        return Di;
    }
}