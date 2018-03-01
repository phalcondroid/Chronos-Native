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

        let btn = new Button;
        btn.append("Button");
        btn.class("btn btn-success form-control");
        btn.click(this.newButtonClick);

        div.append(btn);

        let option   = this.getSelected();
        let oldValue = option.getContent(); 
        option.empty().append(oldValue + " extra");
    }
}