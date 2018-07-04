class Person extends AjaxModel //http://localhost/chronos-native/person/find
{
    initialize()
    {
        this.setFindUrl(
            "findPerson.php"
        );
    }

    setName(name) {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    setLast(last) {
        this.last = last;
    }

    getLast()
    {
        return this.last;
    }
}