
class Starter
{
    /**
     * 
     */
    scope = Scope.DEV;

    /**
     * 
     */
    config;

    /**
     * 
     */
    controllers;

    /**
     * 
     */
    data;

    /**
     * 
     */
    constructor()
    {
        
    }

    /**
     * 
     * @param scope 
     */
    setScope(scope)
    {
        this.scope = scope;
    }

    /**
     * 
     */
    getScope()
    {
        return this.scope;
    }

    /**
     * 
     */
    setControllers(controllers)
    {
        this.controllers = controllers;
    }

    /**
     * 
     */
    getControllers()
    {
        return this.controllers;
    }

    /**
     * 
     * @param config 
     */
    setConfig(config)
    {
        this.config = config;
    }

    /**
     * 
     */
    getConfig()
    {
        return this.config.get();
    }

    /**
     * 
     * @param data 
     */
    setData(data)
    {
        this.data = data;
    }

    /**
     * 
     */
    getData()
    {
        return this.data;
    }

    /**
     * 
     */
    resolvePath()
    {
        let config = this.getConfig();
        if (typeof config["paths"] == "undefined") {
            throw "Config: item paths must be mandatory.";
        }
        new ResolvePaths(
            config["paths"]
        ).resolve();
    }

    /**
     * 
     */
    resolveService()
    {
        let config = this.getConfig();
        if (typeof config["service"] != "undefined") {
            new ResolveService(
                config["service"]
            ).resolve();
        }
    }

    /**
     * 
     */
    resolveControllers()
    {
        let config = this.getConfig();
        if (typeof config["controllers"] == "undefined") {
            throw "Config: item controllers must be mandatory.";
        }
        new ResolveController(
            config["controllers"]
        ).resolve();
    }

    /**
     * 
     */
    start()
    {
        this.resolvePath();
        this.resolveService();
        this.resolveControllers();
    }
}