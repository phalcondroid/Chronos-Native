class Application
{
    /**
     * 
     */
    constructor(config)
    {
        this.config = config;
        this.fetchDi();
        window.onbeforeunload = function () {
            sessionStorage.clear();
        }
    }

    /**
     * 
     */
    fetchDi()
    {
        let injector = new InitializeComponents();
        injector.inject();
    }

    /**
     * 
     */
    start()
    {
        this.fetchDi();
        let starter = new Starter;
        starter.setConfig(this.config);
        starter.start();
    }
}