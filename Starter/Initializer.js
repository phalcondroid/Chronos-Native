class Initializer
{
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
            "url",
            new Url
        );

        Di.set(
            "elementAdapter",
            new ElementAdapter
        );
    }
}