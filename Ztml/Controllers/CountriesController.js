class CountriesController extends Controller
{
    initialize()
    {
        this.view.set(
            "something",
            {
                "first"  : "first",
                "second" : "second",
                "three"  : "three",
                "four"   : "four"
            }
        );
    }

    newButtonClick()
    {
        console.log("New button function clicked!");
    }

    change()
    {
        let div = this.getDom().getById("content");
        div.append("The texto texto");

        this.getEm().find(
            Person,
            this.done
        );
    }
    
    done(response)
    {
        console.log("when is done", response);
    }
}