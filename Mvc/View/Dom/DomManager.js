class DomManager
{
    /**
     * 
     * @param element
     */
    constructor()
    {
    }

    /**
     * 
     * @param id 
     */
    getById(id, context = null)
    {
        let adapter = new ElementAdapter(
            document.getElementById(id)
        );
        return adapter.get();
    }

    create(tag)
    {
        let adapter = new ElementAdapter(
            tag
        );
        return adapter.get();
    }

    /**
     *
     */
    getByTag(name)
    {
        let elements = document.getElementsByTagName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }

        if (result.length == 0) {
            return false;
        }

        if (result.length == 1) {
            return result[0];
        }
        return result;
    }

    /**
     *
     */
    getByClass(name, context = null)
    {
        let elements = document.getElementsByClassName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }
        if (result.length == 0) {
            return false;
        }
        if (result.length == 1) {
            return result[0];
        }
        return this;
    }

    /**
     *
     */
    getByName(name, context = null)
    {
        let elements = document.getElementsByName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }
        if (result.length == 0) {
            return false;
        }
        if (result.length == 1) {
            return result[0];
        }
        return result;
    }

    /**
     * 
     */
    setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    getElement()
    {
        return this.element;
    }

    /**
     * [getClassName description]
     * @return  [description]
     */
    getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}