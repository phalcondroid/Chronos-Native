 
import { Input } from "./Input";

namespace Northwind.Tag
{
    /**
     * [Input description]
     * @type {[type]}
     */
    class Hidden extends Input
    {
    	constructor(args : any = {})
    	{
    		super();
            this.setHidden();
    	}
    }
}