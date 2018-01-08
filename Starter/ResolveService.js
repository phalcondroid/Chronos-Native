
class ResolveService
{
    /**
     * 
     */
    service;

    /**
     * 
     */
    constructor(service = false)
    {
        if (service == false) {
            throw "Config : Service must be a json object";
        };
        this.service = new service;
    }

    /**
     * 
     */
    resolve()
    {
        this.service.initialize(new Di);
    }
}