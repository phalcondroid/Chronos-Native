/**
 * Dependency injector
 */
class Di
{
    /**
     * Dependency injector container
     */
    static di = {};
    
    /**
     * Inject value to dependency injector
     * @param  String key
     * @param  Any    value
     * @return Void
     */
    static set(key, value)
    {
        if (key == "" || typeof key == "undefined" || value == "" || typeof value == "undefined") {
            throw "Key and value must not be empty in \"Di\"";
        }
        Di.di[key] = value;
    }

    /**
     * Get value from dependency injector
     * @param  String key
     * @return Any
     */
    static get(key)
    {
        if (key == "" || typeof key == "undefined") {
            throw "Key must not be empty in \"Di\"";
        }
        return Di.di[key];
    }

    /**
     * 
     */
    static getAll()
    {
        return Di.di;
    }
}