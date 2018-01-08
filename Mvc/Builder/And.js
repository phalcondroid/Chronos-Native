class And extends Transaction
{
    /**
     * 
     */
    condition = {};

    /**
     * 
     * @param condition 
     */
    constructor(condition)
    {
        super();
        if (typeof condition == "object") {
            this.condition = condition;
        } else {
            throw "And condition must be an object";
        }
    }

    /**
     * 
     */
    get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        for (var key in row) {
            if (row[key] == this.condition[key]) {
                result.push(true);
            }
        }
        if (result.length != size) {
            return false;
        }
        for (var i = 1; i <= size; i++) {
            if (result[i] == false) {
                return false;
            }
        }
        return true;
    }
}