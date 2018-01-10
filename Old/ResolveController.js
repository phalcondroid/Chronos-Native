
class ResolveController
{
    /**
     * 
     * @param controllers 
     */
    constructor(controllers)
    {
        this.controllers = controllers;
    }

    /**
     * 
     * @param controller 
     * @param key 
     */
    resolveProperties(controller)
    {
        let methods = Object.getOwnPropertyNames(
            Object.getPrototypeOf(controller)
        );
        for (let key of methods) {
            switch (typeof controller[key]) {
                case "function":
                    if (!ArrayHelper.inArray(Restricted.get(), key)) {
                        let ifExist = document.getElementById(key);
                        if (ifExist != null) {
                            if (typeof ifExist.nodeType != "undefined") {
                                controller[key](new ViewModel);
                            }
                        }
                    }
                break;
            }
        }
    }

    /**
     * 
     */
    resolve()
    {
        if (Array.isArray(this.controllers)) {
            for (let key in this.controllers) {
                let instance = new this.controllers[key](
                    this.resolveProperties
                );
                instance.initialize();
                if (instance instanceof Controller) {
                    this.resolveProperties(instance);
                }
            }
        }
    }
}