class ResolvePaths
{
    /**
     * 
     * @param paths 
     */
    constructor(paths)
    {
        this.paths = paths;
        this.di    = new Service;
    }

    /**
     * 
     */
    resolve()
    {
        for (let key in this.paths) {
            this.di.get("url").set(
                key,
                this.paths[key]
            );
        }
    }
}