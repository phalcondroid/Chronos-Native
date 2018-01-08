class Uuid
{
    constructor()
    {
        
    }

    static get()
    {
        return MathHelper.getS4() + MathHelper.getS4() + '-' +
                MathHelper.getS4() + '-' + MathHelper.getS4() + '-' +
                MathHelper.getS4() + '-' + MathHelper.getS4() +
                MathHelper.getS4() + MathHelper.getS4();
    }
}