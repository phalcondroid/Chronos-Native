class Ajax
{
    httpRequest;
    context = {};
    method  = "POST";
    parameters = "";
    error;
    url;
    container = [];
    responseFn = function() {};
    bfSendFn = function () {}.bind(this);

    /**
     *
     */
    constructor()
    {
        this.httpRequest = new XMLHttpRequest();
    }

    /**
     *
     */
    setContext(ctx)
    {
        this.context = ctx;
    }

    /**
     *
     */
    getContext()
    {
        return this.context;
    }

    /**
     *
     */
    setUrl(url)
    {
        this.url = url;
        return this;
    }

    /**
     *
     */
    getUrl()
    {
        return this.url;
    }

    /**
     *
     */
    set(key, value)
    {
        this.container[key] = value;
    }

    /**
     *
     */
    get(key)
    {
        return this.container[key];
    }

    /**
     *
     */
    setParams(params, value = false)
    {
        if (typeof params == "object") {
            var i = 0;
            for (var key in params) {
                var ampersand = "";
                if (i < Object.keys(params).length) {
                    ampersand = "&";
                }
                this.parameters += key + "=" + encodeURIComponent(params[key]) + ampersand;
                i++;
            }
        } else if (value) {
            this.parameters = params + "=" + encodeURIComponent(value);
        }

        return this;
    }

    /**
     *
     */
    POST()
    {
        this.setMethod("POST");
        return this;
    }

    /**
     *
     */
    PUT()
    {
        this.setMethod("PUT");
        return this;
    }

    /**
     *
     */
    DELETE()
    {
        this.setMethod("DELETE");
        return this;
    }

    /**
     *
     */
    GET()
    {
        this.setMethod("GET");
        return this;
    }

    /**
     *
     */
    setMethod(method)
    {
        this.method = method;
        return this;
    }

    addContext()
    {
        this.httpRequest.context = this.getContext();
        this.httpRequest.getContext = function () {
            return this.context;
        };
    }

    /**
     *
     */
    response(responseFunction)
    {
        this.responseFn = responseFunction;
        try {
            this.bfSendFn();
            this.addContext();
            this.httpRequest.onreadystatechange = function () {
                if (this.httpRequest.readyState === this.httpRequest.DONE) {
                    if (this.httpRequest.status === 200) {
                        if (typeof this.httpRequest.response != "undefined") {
                            if (typeof this.responseFn != "undefined") {
                                this.responseFn(
                                    this.httpRequest.response
                                );
                            }
                        }
                    } else {
                        this.error = "ajax status" + this.httpRequest.status + " " + this.httpRequest.statusText;
                    }
                }
            }.bind(this);
        } catch (e) {
            console.log("Network.AJax.Exception", e);
        }
        return this;
    }

    /**
     *
     */
    beforeSend(fn)
    {
        this.bfSendFn = fn;
    }

    /**
     *
     */
    setHeaders()
    {
        this.httpRequest.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );
    }

    /**
     *
     */
    getError(errorFunction)
    {
        errorFunction(this.error);
    }

    /**
     * 
     */
    clear()
    {
        this.method     = "GET";
        this.parameters = "";
        this.error      = null;
        this.url        = "";
        this.bfSendFn   = function () {};
        this.responseFn = function () {};
        this.container  = [];
    }

    /**
     *
     */
    send(fn = false)
    {
        if (typeof fn == "function") {
            this.response(fn.bind(this));
        }

        this.httpRequest.open(
            this.method,
            this.url
        );
        this.setHeaders();
        this.httpRequest.send(
            this.parameters
        );
    }

    /**
     * [getClassName description]
     * @return {[type]} [description]
     */
    getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}