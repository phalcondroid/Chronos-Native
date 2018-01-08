class Validator
{
    static validStructArray(data)
    {
        try {
            if (Array.isArray(data)) {
                var firstPosition = data[0];
                if (typeof firstPosition == "object") {
                    return true;
                } else {
                    throw Message.NOT_VALID_ARRAY_OBJECT;
                }
            } else {
                throw Message.NOT_VALID_ARRAY;
            }
        } catch (e) {

        }
    }
}
