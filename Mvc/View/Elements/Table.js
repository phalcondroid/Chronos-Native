/**
 * [Table description]
 * @type {[type]}
 */
class Table extends HtmlElement
{
    tblElements;
    thead;
    tbody;
    tfoot;
    tr;
    th;
    td;
    system;
    header = false;
    fnCHeader;
    fnCContent;

    /**
     *
     */
    constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        
        this.thead = new Thead();
        this.tbody = new Tbody();
        this.tfoot = new Tfoot();

        this.initialize(args);
    }

    /**
     *
     */
    getThead()
    {
        return this.thead;
    }

    /**
     *
     */
    getTbody()
    {
        return this.tbody;
    }

    /**
     *
     */
    toHead(component)
    {
        this.thead.append(
            component
        );
        this.append(
            this.thead
        );
        return this;
    }

    /**
     *
     */
    toHeadTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.thead.append(
            tr
        );

        this.append(
            this.thead
        );

        return this;
    }

    /**
     *
     */
    toBody(component)
    {
        this.tbody.append(
            component
        );

        this.append(
            this.tbody
        );

        return this;
    }

    /**
     *
     */
    toFoot(component)
    {
        this.tfoot.append(
            component
        );

        this.append(
            this.tfoot
        );

        return this;
    }

    /**
     *
     */
    toBodyTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.tbody.append(
            tr
        );

        this.append(
            this.tbody
        );

        return this;
    }

    /**
     *
     */
    toFootTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.tfoot.append(
            tr
        );

        this.append(
            this.tfoot
        );

        return this;
    }
}