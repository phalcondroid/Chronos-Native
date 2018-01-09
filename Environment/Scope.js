
class Scope
{
    static get LOCAL() { return 0 };
    static get DEV() { return 1; }
    static get TEST() { return 2; }
    static get QA() { return 3; }
    static get STAGING() { return 4; }
    static get PRODUCTION() { return 5; }
}