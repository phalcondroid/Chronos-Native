/** 
 * 
 */
class Handler
{
    constructor()
    {
        this.inspector = new Inspector();
        this.elements = this.inspector.getElements();
    }

    /**
     * 
     * @param {*} item 
     */
    arrangeElement(item)
    {
        let viewInstance = eval("new " + item.getAttribute("chronos-init") + "(item)");
        viewInstance.setElement(item);

        let instance = eval("new " + this.ucfirst(item.getAttribute("chronos-init") + "Controller"));
        instance.setView(new ViewModel);
        instance.setViewElement(viewInstance);
        instance.initialize();

        viewInstance.setData(instance.getView());
        viewInstance.initialize();

        this.searchForActions(instance, viewInstance);
    }

    /**
     * 
     * @param {*} controller
     * @param {*} viewInstance
     */
    searchForActions(controller, viewInstance)
    {
        let eventManager = this.getDi().get("eventManager");
        for (let event of EventManager.getEvents()) {
            if (typeof controller[event] == "function") {
                eventManager.setEventToElement(
                    viewInstance.getElement(),
                    event,
                    controller[event],
                    controller
                );
            }
        }
    }

    /** 
     * 
     */
    execute()
    {
        let indexController = new IndexController;
        indexController.view = new ViewModel;
        indexController.initialize();

        for (let item of this.elements) {
            this.arrangeElement(item);
        }
    }

    /**
     * 
     * @param {*} string 
     */
    ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handle() {
        this.execute();
    }

    getDi()
    {
        return Di;
    }
}