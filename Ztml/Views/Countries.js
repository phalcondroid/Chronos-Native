class Countries extends Select
{
    initialize()
    {
        let option = this.getDom().create(
            "option"
        ).html(this.data.get("something"));
        this.append(
            option
        );
    }
}