/**
 * [ViewElement description]
 * @type {[type]}
 */
class Th extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TH"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /*
        *
        * @param  {[type]} num [description]
        * @return {[type]}     [description]
        */
    colspan(cols) {
        this.attr({
            "colspan" : cols
        });
        return this;
    }

    /**
     *
     * @param  {[type]} row [description]
     * @return {[type]}     [description]
     */
    rowspan(rows) {
        this.attr({
            "rowspan" : rows
        });
        return this;
    }
}