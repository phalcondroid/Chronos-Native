/**
 * Wrapper to dependency injector class
 */
class Service
{
    di;

    /**
     * 
     */
    constructor()
    {
        this.di = Di;
    }

    /**
     * Set value to static dependency injector
     * @param key 
     * @param value 
     */
    set(key, value)
    {
        this.di.set(key, value);
    }

    /**
     * Get value from static dependency injector
     * @param key 
     */
    get(key)
    {
        return this.di.get(key);
    }
}