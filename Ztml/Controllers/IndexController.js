class IndexController extends Controller
{
    initialize()
    {
        this.getById("btn").click(() => {
            this.getEm().find(
                Person,
                (persons) => {
                    let select = this.getDom().getById("select");
                    select.fetch(persons, ["name", "last"]);
                }
            );
        });
    }
}