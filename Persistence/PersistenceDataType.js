class PersistenceDataType {
    static get BOOLEAN() { return 1; }
    static get INTEGER() { return 2; }
    static get STRING() { return 3; }
    static get OBJECT() { return 4; }
    static get ARRAY() { return 5; }
    static get CLASS() { return 6; }

    static get BOOLEAN_TYPE() { return "boolean"; } 
    static get INTEGER_TYPE() { return "number"; }
    static get STRING_TYPE() { return "string"; }
    static get OBJECT_TYPE() { return "object"; }

    /**
     * 
     */
    static getValueByType(value)
    {
        var tyof = typeof value;
        switch (tyof) {
            case DataType.STRING_TYPE:
                    value = "\"" + value + "\"";
                break;
        }
        return value;
    }
}