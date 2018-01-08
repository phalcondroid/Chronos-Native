class Not extends Transaction
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
        for (var i = 0; i < size; i++) {
            if (result[i] == true) {
                return false;
            }
        }
        return true;
    }
}