class Select extends FormTag
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        this.choose = "Choose...";
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "SELECT"
                )
            );
            this.initialize();
        }
    }

    /**
     *
     */
    getSelected()
    {
        var option = new Option();
        option.setElement(
            this.getElement().options[
                this.getElement().selectedIndex
            ]
        );
        return option;
    }

    /**
     * 
     * @param fn 
     */
    iterate(fn) {
        var childs = this.getChilds();
        for (var key in childs) {
            fn(childs[key]);
        }
        return this;
    }

    /**
     *
     */
    addChoose(choose)
    {
        this.choose = choose;
    }

    /**
     *
     */
    select(value)
    {
        var childs = this.getElement().childNodes;
        for (var key in childs) {
            if (childs[key].value == value) {
                childs[key].setAttribute("selected", "selected");
            }
        }
    }

    fetch(content)
    {
        if (Array.isArray(content) || typeof content == "object") {
            for (let key in content) {
                this.append(
                    new Option()
                    .attr({
                        "value" : key,
                    })
                    .html(content[key])
                );
            }
        }
        return this;
    }
}
