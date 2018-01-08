/**
 * [ViewElement description]
 * @type {[type]}
 */
class Td extends HtmlElement
{
    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     *
     * @param  {[type]} num [description]
     * @return {[type]}     [description]
     */
    colspan(cols)
    {
        this.attr({
            "colspan" : cols
        });
        return this;
    }

        /** no pedi las hamburguesas soy un mk acompalene a comprar
     * @param  {[type]} row [description]
     * @return {[type]}     [description]
     */
    rowspan(rows)
    {
        this.attr({
            "rowspan" : rows
        });
        return this;
    }
}