class FormTag extends HtmlElement
{
    /**
     * Set form element property readonly
     * @param {Boolean} readOnly
     */
    setReadOnly(readOnly)
    {
        this.getElement().readOnly = readOnly;
        return this;
    }

    /**
     * Get form read only 
     */
    getReadOnly()
    {
        return this.getElement().readOnly;
    }

    /**
     * Set disabled
     * @param {Boolean} disabled
     */
    setDisabled(disabled)
    {
        this.getElement().disabled = disabled;
        return this;
    }

    getDisabled()
    {
        return this.getElement().disabled;
    }

    setSize(size)
    {
        this.attr("size", size);
        return this;
    }

    getSize()
    {
        return this.attr("size");
    }

    setMaxLength(max)
    {
        this.attr("maxlength", max);
        return this;
    }

    getMaxLength()
    {
        return this.attr("maxlength");
    }

    setAutoFocus(data)
    {
        this.getElement().autofocus = data;
        return this;
    }

    getAutoFocus()
    {
        return this.getElement().autofocus;
    }

    setMin(min)
    {
        this.attr("min", min);
        return this;
    }

    getMin()
    {
        return parseInt(this.attr("min"));
    }

    setMax(max)
    {
        this.attr("max", max);
        return this;
    }

    getMax()
    {
        return parseInt(this.attr("max"));
    }

    /**
     *
     */
    setAlt(alt)
    {
        this.attr("alt", alt);
        return this;
    }

    /**
     *
     */
    getAlt()
    {
        return this.attr("alt");
    }

    /**
     *
     */
    setPlaceholder(placeholder)
    {
        this.attr("placeholder", placeholder);
        return this;
    }

    /**
     *
     */
    getPlaceholder()
    {
        return this.attr("placeholder");
    }

    /**
     *
     */
    setTitle(title)
    {
        this.attr("title", title);
        return this;
    }

    /**
     *
     */
    getTitle()
    {
        return this.attr("title");
    }

    /**
     *
     */
    setPattern(pattern)
    {
        switch (pattern) {
            case Input.NUMBERS:
                this.attr("pattern", "[0-9]");
                break;
            case Input.TEXT:
                this.attr("pattern", "[A-Za-z]{3}");
                break;
            case Input.NO_SPECIAL_CHARACTERS:
                this.attr("pattern", "{3}");
                break;
            case Input.NUMBERS_NO_SPECIAL_CHARACTERS:
                this.attr("pattern", "[0-9]{3}");
                break;
            case Input.TEXT_NO_SPECIAL_CHARACTERS:
                this.attr("pattern", "[A-Za-z]{3}");
                break;
            default:
                this.attr("pattern", pattern);
                break;
        }
        return this;
    }

    /**
     *
     */
    getPattern()
    {
        return this.attr("pattern");
    }

    /**
     *
     */
    setName(name)
    {
        this.attr("name", name);
        return this;
    }

    /**
     *
     */
    getName()
    {
        return this.attr("name");
    }

    /**
     *
     */
    setStep(num)
    {
        this.attr("step", num);
        return this;
    }

    /**
     *
     */
    getStep()
    {
        return this.attr("step");
    }

    /**
     *
     */
    validate(fn = false)
    {
        if (this.val() == "" || typeof this.val() == "undefined") {
            return false;
        }
    }

    isChecked()
    {
        return this.getElement().checked;
    }

    check()
    {
        this.getElement().checked = true;
        return this;
    }

    unCheck()
    {
        this.getElement().checked = false;
        return this;
    }
}