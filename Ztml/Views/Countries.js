class Countries extends Select
{
    initialize()
    {
        this.class("form-control");
        this.fetch(this.data.get("something"));
    }
}