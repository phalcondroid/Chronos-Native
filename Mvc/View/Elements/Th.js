/**
 * [ViewElement description]
 * @type 
 */
class Th extends HtmlElement
{
    /**
     *
     */
    constructor(args={})
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
        * @param   num [description]
        
        */
    colspan(cols) {
        this.attr({
            "colspan" : cols
        });
        return this;
    }

    /**
     *
     * @param   row [description]
     
     */
    rowspan(rows) {
        this.attr({
            "rowspan" : rows
        });
        return this;
    }
}