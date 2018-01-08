class Injectable
{
    /**
     * 
     */
    getValidator(resolveProperties = null)
    {
        let validator = {
            get: function (target, name) {
                switch (name) {
                    case "em":
                        return this.getDi().get("em");
                    case "ajax":
                        return this.getDi().get("ajax");
                    case "dom":
                        return this.getDi().get("dom");
                    case "eventManager":
                        return this.getDi().get("eventManager");
                    case "uuid":
                        return this.getDi().get("uuid");
                    case "url":
                        return this.getDi().get("url");
                    case "setViewModel":
                        return target[name];
                    case "getViewModel":
                        return target[name];
                    default:
                        return target[name];
                }
            }
        }
        return validator;
    }

    getDi()
    {
        return new Service();
    }

    /**
     * 
     * @param obj 
     */
    inject(obj, fn = null)
    {
        return new Proxy(
            obj,
            this.getValidator(fn)
        );
    }
}