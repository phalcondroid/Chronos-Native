class Person extends AjaxModel //http://localhost/chronos-native/person/find
{
    setName(name) {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }
}