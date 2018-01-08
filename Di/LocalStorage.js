
/**
 * Wrapper to local storage
 */
class LocalStorage
{
    constructor()
    {

    }

    /**
     * Set item in local storage
     * @param key string
     * @param value string
     * @returns void
     */
    set(key, value)
    {
        localStorage.setItem(
            key,
            value
        );
        return;
    }

    /**
     * Get item from local storage
     * @param key string
     * @returns any
     */
    get(key)
    {
        return localStorage.getItem(
            key
        );
    }
}