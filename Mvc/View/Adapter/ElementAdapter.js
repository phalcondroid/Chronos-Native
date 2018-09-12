class ElementAdapter
{
    /**
     * 
     * @param element 
     * @param tagName 
     */
    constructor(element = null)
    {
        this.element = element;   
    }

    /**
     * 
     * @param element 
     */
    setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    get()
    {
        let elem;
        if (typeof this.element != "string") {
            if (typeof this.element.nodeName == "undefined") {
                return false;
            } else {
                elem = this.element.nodeName;
            }
        } else {
            elem = this.element.toUpperCase();
        }
        let instance = false;
        switch (elem) {
            case "A":
                    instance = new A();
                break;
            case "ABBR":
                    instance = new Abbr();
                break;
            case "ADDRESS":
                    instance = new Address();
                break;
            case "AREA":
                    instance = new Area();
                break;
            case "ARTICLE":
                    instance = new Article();
                break;
            case "ASIDE":
                    instance = new Aside();
                break;
            case "AUDIO":
                    instance = new Audio();
                break;
            case "B":
                    instance = new B();
                break;
            case "BASE":
                    instance = new Base();
                break;
            case "BDI":
                    instance = new Bdi();
                break;
            case "BDO":
                    instance = new Bdo();
                break;
            case "BLOCKQUOTE":
                    instance = new Blockquote();
                break;
            case "BODY":
                    instance = new Body();
                break;
            case "BR":
                    instance = new Br();
                break;
            case "BUTTON":
                    instance = new Button();
                break;
            case "CANVAS":
                    instance = new Canvas();
                break;
            case "CAPTION":
                    instance = new Caption();
                break;
            case "CITE":
                    instance = new Cite();
                break;
            case "CODE":
                    instance = new Code();
                break;
            case "COL":
                    instance = new Col();
                break;
            case "COLGROUP":
                    instance = new ColGroup();
                break;
            case "DATALIST":
                    instance = new Datalist();
                break;
            case "DB":
                    instance = new Db();
                break;
            case "DEL":
                    instance = new Del();
                break;
            case "DETAILS":
                    instance = new Details();
                break;
            case "DFN":
                    instance = new Dfn();
                break;
            case "DIALOG":
                    instance = new Dialog();
                break;
            case "DIV":
                    instance = new Div();
                break;
            case "DL":
                    instance = new Dl();
                break;
            case "DT":
                    instance = new Dt();
                break;
            case "EM":
                    instance = new Em();
                break;
            case "EMBED":
                    instance = new Embed();
                break;
            case "FIELDSET":
                    instance = new Fieldset();
                break;
            case "FIGCAPTION":
                    instance = new Figcaption();
                break;
            case "FIGURE":
                    instance = new Figure();
                break;
            case "FOOTER":
                    instance = new Footer();
                break;
            case "FORM":
                    instance = new Form();
                break;
            case "H1":
                    instance = new H1();
                break;
            case "H2":
                    instance = new H2();
                break;
            case "H3":
                    instance = new H3();
                break;
            case "H4":
                    instance = new H4();
                break;
            case "H5":
                    instance = new H5();
                break;
            case "H6":
                    instance = new H6();
                break;
            case "HEAD":
                    instance = new Head();
                break;
            case "HEADER":
                    instance = new Header();
                break;
            case "I":
                    instance = new I();
                break;
            case "IFRAME":
                    instance = new Iframe();
                break;
            case "IMG":
                    instance = new Img();
                break;
            case "INPUT":
                    instance = new Input();
                break;
            case "INS":
                    instance = new Ins();
                break;
            case "KBD":
                    instance = new Kbd();
                break;
            case "KEYGEN":
                    instance = new Keygen();
                break;
            case "LABEL":
                    instance = new Label();
                break;
            case "LEYEND":
                    instance = new Leyend();
                break;
            case "LI":
                    instance = new Li();
                break;
            case "LINK":
                    instance = new Link();
                break;
            case "MAIN":
                    instance = new Main();
                break;
            //case "MAP":
                    //instance = new Map();
                //break;
            case "MENU":
                    instance = new Menu();
                break;
            case "MENUITEM":
                    instance = new Menuitem();
                break;
            case "META":
                    instance = new Meta();
                break;
            case "METER":
                    instance = new Meter();
                break;
            case "NAV":
                    instance = new Nav();
                break;
            case "NOSCRIP":
                    instance = new Noscrip();
                break;
            case "OBJECT":
                    instance = new Obj();
                break;
            case "OL":
                    instance = new Ol();
                break;
            case "OPTGROUP":
                    instance = new Optgroup();
                break;
            case "P":
                    instance = new P();
                break;
            case "PARAM":
                    instance = new Param();
                break;
            case "PRE":
                    instance = new Pre();
                break;
            case "PROGRESS":
                    instance = new Progress();
                break;
            case "Q":
                    instance = new Q();
                break;
            case "RP":
                    instance = new Rp();
                break;
            case "RT":
                    instance = new Rt();
                break;
            case "RUBY":
                    instance = new Ruby();
                break;
            case "S":
                    instance = new S();
                break;
            case "SAMP":
                    instance = new Samp();
                break;
            case "SCRIPT":
                    instance = new Script();
                break;
            case "SECTION":
                    instance = new Section();
                break;
            case "SELECT":
                    instance = new Select();
                break;
            case "SMALL":
                    instance = new Small();
                break;
            case "SOURCE":
                    instance = new Source();
                break;
            case "SPAN":
                    instance = new Span();
                break;
            case "STRONG":
                    instance = new Strong();
                break;
            case "STYLE":
                    instance = new Style();
                break;
            case "SUB":
                    instance = new Sub();
                break;
            case "SUMMARY":
                    instance = new Summary();
                break;
            case "SUP":
                    instance = new Sup();
                break;
            case "TABLE":
                    instance = new Table();
                break;
            case "TBODY":
                    instance = new Tbody();
                break;
            case "TD":
                    instance = new Td();
                break;
            case "TEXTAREA":
                    instance = new Textarea();
                break;
            case "TFOOT":
                    instance = new Tfoot();
                break;
            case "TH":
                    instance = new Th();
                break;
            case "THEAD":
                    instance = new Thead();
                break;
            case "TIME":
                    instance = new Time();
                break;
            case "TITLE":
                    instance = new Title();
                break;
            case "TR":
                    instance = new Tr();
                break;
            case "TRACK":
                    instance = new Track();
                break;
            case "U":
                    instance = new U();
                break;
            case "UL":
                    instance = new Ul();
                break;
            case "VAR":
                    instance = new Var();
                break;
            case "VIDEO":
                    instance = new Video();
                break;
            case "WBR":
                    instance = new Wbr();
                break;
            default:
                instance = new HtmlElement;
                instance.create(this.element);
                break;
        }

        if (typeof this.element.nodeName != "undefined") {
            instance.setElement(this.element);
        }
        return instance;
    }
}
