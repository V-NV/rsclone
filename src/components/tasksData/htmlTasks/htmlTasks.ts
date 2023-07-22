import HtmlTask01 from "./htmlTask01";
import HtmlTask02 from "./htmlTask02";
import HtmlTask03 from "./htmlTask03";
import HtmlTask04 from "./htmlTask04";
import HtmlTask05 from "./htmlTask05";
import HtmlTask06 from "./htmlTask06";
import HtmlTask07 from "./htmlTask07";
import HtmlTask08 from "./htmlTask08";
import HtmlTask09 from "./htmlTask09";
import HtmlTask10 from "./htmlTask10";

const HtmlTasks = [
  {
    taskNum: 1,
    title: "HTML: The basics of HTML",
    task: HtmlTask01,
    solution: "<h1>Hello,World!</h1>",
    solution2:"",
  },
  {
    taskNum: 2,
    title: "HTML: Tags",
    task: HtmlTask02,
    solution: "<p>Thequickbrownfoxjumpsoverthelazydog</p>",
    solution2:"",
  },
  {
    taskNum: 3,
    title: "HTML: Text in HTML",
    task: HtmlTask03,
    solution: "<p>Itisveryinteresting.</p><p>Andsofarit'ssimpleenough.</p>",
    solution2:"",
  },
  {
    taskNum: 4,
    title: "HTML: Tag nesting",
    task: HtmlTask04,
    solution:
      "<ul><li>Thefirstelementinthelist</li><li>Thesecondelementinthelist</li></ul>",
    solution2:"",
    },
  {
    taskNum: 5,
    title: "HTML: Attributes",
    task: HtmlTask05,
    solution: '<ptitle="Mycooltooltip">IlikeHTML!</p>',
    solution2:"",
  },
  {
    taskNum: 6,
    title: "HTML: Paragraphs",
    task: HtmlTask06,
    solution: "<p>Hello,World</p>",
    solution2:"",
  },
  {
    taskNum: 7,
    title: "HTML: Text layout",
    task: HtmlTask07,
    solution: "<p>Homocoderus-<i>programming</i><b>courses</b></p>",
    solution2:"", 
  },
  {
    taskNum: 8,
    title: "HTML: Headings",
    task: HtmlTask08,
    solution: "<h1>Thebestbookonearth</h1><h2>Chapter1</h2>",
    solution2:"",
  },
  {
    taskNum: 9,
    title: "HTML: Lists",
    task: HtmlTask09,
    solution:
      "<ol><li>Buyfood</li><li>GotoAlex</li><li>Cookdinner</li><li>Ridebicycle</li><li>Playfootball</li></ol>",
    solution2:"",
    },
  {
    taskNum: 10,
    title: "HTML: Nested lists",
    task: HtmlTask10,
    solution:
       "<ol><li>TheJavaScriptprofession<ul><li>Frontend</li><li>Backend</li></ul></li><li>ThePHPProfession</li></ol>",
    solution2:'блабла',
  },
];

export default HtmlTasks;
