class StringHelper
{
    constructor()
    {

    }

    /**
     * [sanitizeString description]
     * @param  {string} str [description]
     
     */
    static sanitizeString(str) {
        let idTr = str.replace(/[`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
        idTr = idTr.toString().replace(/\s/g, "");
        return idTr;
    }

    /**
     * [capitalize description]
     * @param   str [description]
     
     */
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}