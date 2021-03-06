class CountriesController extends Controller
{
    initialize()
    {
        this.getElement().class("form-control");
        this.getElement().fetch({
            "first"  : "first",
            "second" : "second",
            "three"  : "three",
            "four"   : "four"
        });
    }

    click()
    {
        console.log("New button function clicked!");
    }

    change(element)
    {
        let button = this.getTag("button");
        button.class("btn btn-success");
        button.append("You awesome");

        let div = this.getDom().getById("content");
        div.append("The texto texto");
        div.append(this.getTag("br"));
        div.append(button);

        this.getEm().find(
            Person,
            this.done
        );
    }
    
    done(response)
    {
        console.log(
            "when is done",
            response
        );
    }

    newFieldTo(changes)
    {
        this.view.set(
            "other",
            {
                "key1" : "no can",
                "key2" : "si can"
            }
        );
    } 
}