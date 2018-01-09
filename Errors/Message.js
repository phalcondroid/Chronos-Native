class Message
{
    /**
     * 
     */
    static get NOT_VALID_ARRAY() { return "The object returned in the transaction is not array"; }

    /**
     * 
     */
    static get NOT_VALID_ARRAY_OBJECT() { return "The objects returned in the transaction into array are not objects, every row must be object key, value"; }

    /**
     * 
     */
    static get NOT_VALID_OBJECT() { return "The received variable is not an object"; }

    /**
     * 
     * @param code 
     * @param custom 
     */
    static getCodeMessage(code, custom)
    {
        var custom = " => " + custom;
        switch (code) {
            case MessageCode.NOT_VALID_ARRAY:
                return Message.NOT_VALID_ARRAY + custom;
            case MessageCode.NOT_VALID_ARRAY_OBJECT:
                return Message.NOT_VALID_ARRAY_OBJECT + custom;
            case MessageCode.NOT_VALID_OBJECT:
                return Message.NOT_VALID_OBJECT + custom;
        }
    }
}