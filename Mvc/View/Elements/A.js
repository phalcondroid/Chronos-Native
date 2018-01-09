/**
 *
 */
class A extends HtmlElement
{
    /**
     *
     */
    constructor(args = {})
    {
        super();
        this.setElement(
            document.createElement(
                "A"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     * [favIcon description]
     * @return  [description]
     */
    favIcon(favIcon) {
        let icon = new I()
        .class(favIcon);
        this.append(
            icon.getElement()
        );
        return this;
    }

    /**
     * [href description]
     * @param   href [description]
     * @return       [description]
     */
    href(href) {
        this.attr("href", href);
        return this;
    }
}