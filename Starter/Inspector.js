class Inspector
{
    constructor()
    {
        this.elements = new Array();
        this.setElementAdapter(
            Di.get("elementAdapter")
        );
        this.searchElements();
    }

    /**
     * 
     * @param {*} elementAdapter 
     */
    setElementAdapter(elementAdapter)
    {
        this.elementAdapter = elementAdapter;
    }

    /**
     * 
     */
    getElementAdapter()
    {
        return this.elementAdapter;
    }

    /**
     * 
     */
    searchElements()
    {
        let tags = document.querySelectorAll('[chronos-init]');
        for (let element of tags) {
            this.elements.push(
                this.getElementAdapter()
                .setElement(
                    element
                )
                .get()
            );
        }
    }

    /**
     * 
     */
    getElements()
    {
        return document.querySelectorAll('[chronos-init]');
    }
}