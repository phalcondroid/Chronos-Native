class Container
{
    container;

    constructor()
    {

    }

    /**
      * Set value to container
     * @param key 
     * @param value 
     */
    set set(key, value)
    {
        this.container[key] = value;
    }

    /**
     * Get value from container
     * @param key 
     */
    get get(key)
    {
        return this.container[key];
    }
}