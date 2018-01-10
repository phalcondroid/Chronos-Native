class Application
{
    /**
     * 
     */
    constructor(config)
    {
        this.config = config;
        this.initializeDependencyInjector();
        window.initializeDependencyInjector = function () {
            sessionStorage.clear();
        }
    }

    /**
     * 
     */
    initializeDependencyInjector()
    {
        let initializer = new Initializer();
        initializer.inject();
    }

    setPaths()
    {
        for (let key in this.config.paths) {
            let item = this.config.paths[key];
            Di.get("url").set(
                key,
                item
            );
        }
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