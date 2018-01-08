
class ArrayHelper
{
    constructor()
    {

    }

    static inArray(container, element)
    {
        for (var key in container) {
            if (container[key] == element) {
                return true;
            }
        }
        return false;
    }
}
