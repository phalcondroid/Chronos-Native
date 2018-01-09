/**
 * Dependency injector
 */
class Di
{
    
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
        if (typeof Di.di == "undefined") {
            Di.di = {};
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
        if (typeof Di.di == "undefined") {
            Di.di = {};
        }
        return Di.di;
    }
}