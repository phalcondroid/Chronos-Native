class Application
{
    static get CONFIG() {
        return "chronos.application.config";
    }

    /**
     * 
     */
    constructor(config)
    {
        this.initializeDependencyInjector(config);
        window.initializeDependencyInjector = function () {
            sessionStorage.clear();
        }
    }

    /** 
     * 
     */
    initializeDependencyInjector(config)
    {
        let initializer = new Initializer(config);
        initializer.inject();
    }

    

    /**
     * 
     */
    start()
    {
        let handler = new Handler;
        handler.handle();
    }
}