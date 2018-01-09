class Select extends FormTag
{
    /**
     *
     */
    constructor(args={})
    {
        super();
        this.choose = "Choose...";
        this.setElement(
            document.createElement(
                "SELECT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
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
    setChoose(choose)
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

    /**
     *
     * @param  content
     * @return
     */
    build(content, fields)
    {
        if (content instanceof StaticModel) {
            content = JSON.parse(content.getData());
        }

        var i = 0;
        for (let key in content) {

            let option = new Option();

            let id = content[key][fields[0]];
            if (id === "") {
                id = content[key][fields[1]];
            }

            option.attr({
                "value" : id
            });
            option.append(
                content[key][fields[1]]
            );

            this.append([
                option
            ]);

            i++;
        }

        return this;
    }
}
