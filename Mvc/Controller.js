
class Controller
{
    di = new Service;
    viewModel = {};

    /**
     * 
     */
    constructor(resolveProperties = null)
    {
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