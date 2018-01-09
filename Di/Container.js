class Container
{
    /**
     * 
     */
    constructor()
    {
        this.container = {};
    }

    /**
      * Set value to container
     * @param key 
     * @param value 
     */
    set(key, value)
    {
        this.container[key] = value;
    }

    /**
     * Get value from container
     * @param key 
     */
    get(key)
    {
        return this.container[key];
    }
}