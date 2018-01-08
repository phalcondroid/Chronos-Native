class MathHelper
{
    constructor()
    {

    }

    static getRandom(init, last) {
        return Math.floor((Math.random() * last) + init);
    }

    static getUUID()
    {
        return this.getS4() + this.getS4() + '-' +
                this.getS4() + '-' + this.getS4() + '-' +
                this.getS4() + '-' + this.getS4() +
                this.getS4() + this.getS4();
    }

    static getS4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
}
