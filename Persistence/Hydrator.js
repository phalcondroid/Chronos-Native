class Hydrator
{
    constructor()
    {
    }

    hydrate(model, data)
    {
        var newModel = new model();
        newModel.state = UnitOfWork.CREATED;

        for (let key in data) {
            switch (typeof newModel[key]) {
                case "function":
                    var auxPropNested = new newModel[key];
                    if (auxPropNested instanceof RawModel) {
                        newModel[key] = this.hydrate(newModel[key], data[key]);
                    } else {
                        newModel[key] = data[key];
                    }
                    break;
                default:
                        var dataArray = new Array();
                        if (Array.isArray(newModel[key])) {
                            switch (typeof newModel[key][0]) {
                                case "function":
                                        if (typeof data[key].length != "undefined") {
                                            if (data[key].length > 0) {

                                                var auxSubModel = new newModel[key][0];
                                                var arrayData   = new Array();

                                                if (auxSubModel instanceof RawModel) {
                                                    for (let subModelKey in data[key]) {
                                                        arrayData.push(
                                                            this.hydrate(newModel[key][0], data[key][subModelKey])
                                                        );
                                                    }
                                                    newModel[key] = arrayData;
                                                }
                                            }
                                        }
                                    break;
                                default:
                                        newModel[key] = data[key];
                                    break;
                            }
                        } else {
                            newModel[key] = data[key];
                        }
                    break;
            }
            if (Array.isArray(newModel[key])) {
                if (typeof newModel[key][0] == "function") {
                    newModel[key] = new Array();
                }
            }
        }
        return newModel;
    }
}