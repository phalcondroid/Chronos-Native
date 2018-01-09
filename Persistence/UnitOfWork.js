
class UnitOfWork
{
    static get NEW() { return 1; }
    static get CREATED() { return 2; }
    static get DELETED() { return 3; }

    constructor()
    {
        this.detached = null;
        this.updated = null;
        this.deleted = null;
    }
}