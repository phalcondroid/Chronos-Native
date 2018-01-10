class Handler
{
    constructor()
    {
        this.inspector = new Inspector();
        this.elements = this.inspector.getElements();
    }

    dispatchElement(item)
    {
        let viewInstance = eval("new " + item.getAttribute("chronos-init") + "(item)");
        viewInstance.setElement(item);

        let instance = eval("new " + this.ucfirst(item.getAttribute("chronos-init") + "Controller"));
        instance.setView(new ViewModel);
        instance.setViewElement(viewInstance);
        instance.initialize();

        viewInstance.setData(instance.getView());
        viewInstance.initialize();
    }

    dispatchAll()
    {
        let indexController = new IndexController;
        indexController.view = new ViewModel;
        indexController.initialize();

        for (let item of this.elements) {
            this.dispatchElement(
                item
            );
        }
    }

    ucfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handle() {
        this.dispatchAll();
    }
}