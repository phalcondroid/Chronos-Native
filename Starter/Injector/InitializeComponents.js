class InitializeComponents
{
    /**
     * 
     */
    di;

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
        Di.set(
            "eventManager",
            new EventManager
        );
        Di.set(
            "ajax",
            new Ajax
        );
        Di.set(
            "em",
            new EntityManager
        );
        Di.set(
            "uuid",
            new Uuid
        );
        Di.set(
            "url",
            new Url
        );
    }
}