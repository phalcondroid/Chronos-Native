
/**
 * wrapper to session storage
 */
class SessionStorage
{
    constructor()
    {

    }

    /**
     * Set item in session storage
     * @param key string
     * @param value string
     * @returns void
     */
    set(key, value)
    {
        sessionStorage.setItem(
            key,
            value
        );
        return;
    }

    /**
     * Get item from session storage
     * @param key string
     * @returns any
     */
    get(key)
    {
        return sessionStorage.getItem(
            key
        );
    }
}