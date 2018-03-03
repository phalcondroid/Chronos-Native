class EventType
{
    static get BEFORE_SEND() { return 0; }
    static get AFTER_SEND() { return 1; }
    static get DONE() { return 2; }
    static get ERROR() { return 3; }
    static get BEFORE_CREATE() { return 4; }
    static get AFTER_CREATE() { return 5; }
    static get BEFORE_CREATE_VIEW() { return 6; }
    static get AFTER_CREATE_VIEW() { return 7; }
    static get EXCEPTION() { return 8; }

    static get BEFORE_SEND_NAME() { return "beforeSend"; }
    static get AFTER_SEND_NAME() { return "afterSend"; }
    static get DONE_NAME() { return "done"; }
    static get ERROR_NAME() { return "error"; }
    static get BEFORE_CREATE_NAME() { return "beforeCreate"; }
    static get AFTER_CREATE_NAME() { return "afterCreate"; }
    static get BEFORE_CREATE_VIEW_NAME() { return "beforeCreateView"; }
    static get AFTER_CREATE_VIEW_NAME() { return "afterCreateView"; }
    static get EXCEPTION_NAME() { return "exception"; }
}