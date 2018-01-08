
class DataType
{
    static BOOLEAN = 1;
    static INTEGER = 2;
    static STRING  = 3;
    static OBJECT  = 4;
    static ARRAY   = 5;
    static CLASS   = 6;

    static BOOLEAN_TYPE = "boolean";
    static INTEGER_TYPE = "number";
    static STRING_TYPE  = "string";
    static OBJECT_TYPE  = "object";

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