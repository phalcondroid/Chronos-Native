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
        this.applyConfig(config);
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

    /**
     * 
     * @param {*} config 
     */
    applyConfig(config)
    {
        Di.set(Application.CONFIG, config);
        for (let key in config.paths) {
            let item = config.paths[key];
            Di.get("url").set(key, item);
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