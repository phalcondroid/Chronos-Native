
class UnitOfWork
{
    static NEW = 1;
    static CREATED   = 2;
    static DELETED   = 3;

    detached;
    updated;
    deleted;

    constructor()
    {

    }
}