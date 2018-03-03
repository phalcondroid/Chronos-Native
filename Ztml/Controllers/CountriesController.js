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
        console.log(this);
        let div = this.getDom().getById("content");
        div.append("The texto texto");

        this.getEm()
        .start("countries", "done")
        .find(
            Person
        );
    }
    
    done(response)
    {
        console.log("when is done");
    }
}