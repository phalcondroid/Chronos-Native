/**
 *
 */
class A extends HtmlElement
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
                    "A"
                )
            );
            this.initialize();
        }
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