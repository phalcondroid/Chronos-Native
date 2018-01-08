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
     * @return {[type]} [description]
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
     * @param  {[type]} href [description]
     * @return {[type]}      [description]
     */
    href(href) {
        this.attr("href", href);
        return this;
    }
}