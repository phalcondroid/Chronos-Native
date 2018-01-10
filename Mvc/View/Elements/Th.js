/**
 * [ViewElement description]
 * @type 
 */
class Th extends HtmlElement
{
    /**
     *
     */
    constructor(element = undefined)
    {
        super();
        if (typeof element == "undefined") {
            this.setElement(
                document.createElement(
                    "TH"
                )
            );
            this.initialize();
        }
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