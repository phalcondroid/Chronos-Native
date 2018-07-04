class Initializer
{
    constructor(config)
    {
        this.config = config;
    }

    /**
     * 
     */
    inject()
    {
        Di.set(
            "Chronos.Dom.CssManager",
            new CssManager
        );
        Di.set(
            "Chronos.Dom.ParentManager",
            new ParentManager
        );
        Di.set(
            "Chronos.Dom.ElementManager",
            new ElementManager
        );
        Di.set(
            "dom",
            new DomManager
        );

        let eventManager = new EventManager;
        Di.set(
            "eventManager",
            eventManager
        );

        let ajax = new Ajax();
        Di.set(
            "ajax",
            ajax
        );

        Di.set(
            "url",
            new Url
        );
        this.applyConfig();

        let entityManager = new EntityManager;
        Di.set(
            "em",
            entityManager
        );

        Di.set(
            "uuid",
            new Uuid
        );

        Di.set(
            "elementAdapter",
            new ElementAdapter
        );
    }

    /**
     * 
     * @param {*} config 
     */
    applyConfig()
    {
        let config = this.config.get();
        let paths = config["paths"];
        for (let key in paths) {
            let item = paths[key];
            Di.get("url").set(key, item);
        }
    }
}