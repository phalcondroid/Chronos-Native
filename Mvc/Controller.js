
class Controller
{
    /**
     * 
     */
    constructor(resolveProperties = null)
    {
        this.di = new Service;
        this.viewModel = {};
        let injectable = new Injectable();
        return injectable.inject(this, resolveProperties);
    }

    /**
     * 
     */
    initialize()
    {
        
    }

    /**
     * 
     * @param key 
     * @param viewModel 
     */
    setViewModel(viewModel)
    {
        this.viewModel = viewModel;
    }

    /**
     * 
     * @param key 
     */
    getViewModel()
    {
        return this.viewModel;
    }

    /**
     * 
     */
    getDi()
    {
        return this.di;
    }

    /**
     * 
     * @param di 
     */
    setDi(di)
    {
        this.di = di;
    }
}