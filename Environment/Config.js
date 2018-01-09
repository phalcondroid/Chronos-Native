class Config
{
    constructor()
    {
        this.config = {};
    }

    /**
     * Set general config and environment
     *
     * @param Object config
     * @param Number env = Scope.Local 
     */
    setConfig(config, env = Scope.LOCAL)
    {
        this.config[env] = config;
    }

    /**
     * Get config was assigned
     *
     * @param Number env = Garlic.Environment.Scope.Local
     * @return Object
     */
    getConfig(env = Scope.LOCAL)
    {
        return this.config[env];
    }
}