import { Reflection } from "./Reflection";

class Checksum
{
    /**
     * Object become to string
     */
    stringObject = "";

    /**
     * Build checksum of any javascript object
     * @param Object obj
     */
    constructor(obj = false)
    {
        if (typeof obj == "object") {
            this.set(obj);
        }
    }

    /**
     * 
     * @param obj 
     */
    set(obj)
    {
        let reflection = new Reflection();
        this.stringObject = reflection.read(obj);
    }

    /**
     * Get base 64 from string
     * @param String str 
     */
    utf8ToBase64(str) {
        return window.btoa(
            encodeURIComponent(str)
        );
    }

    /**
     * Get checksum
     * @return String
     */
    getChecksum()
    {
        return this.utf8ToBase64(
            this.stringObject
        );
    }
}