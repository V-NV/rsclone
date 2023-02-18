import cssTask01 from "./cssTask01";
import cssTask02 from "./cssTask02";
import cssTask03 from "./cssTask03";
import cssTask04 from "./cssTask04";
import cssTask05 from "./cssTask05";
import cssTask06 from "./cssTask06";
import cssTask07 from "./cssTask07";
import cssTask08 from "./cssTask08";
import cssTask09 from "./cssTask09";
import cssTask10 from "./cssTask10";

const cssTasks = [
  {
    taskNum: 1,
    title: "CSS: Introduction in CSS",
    task: cssTask01,
    solution: '<pstyle="font-size:25px;">ThefirststylechangewithCSS</p>',
    solution2: "888",
  },
  {
    taskNum: 2,
    title: "CSS: Using CSS in HTML",
    task: cssTask02,
    solution: '<pstyle="font-size:12px;">Smalltext</p>',
    solution2: '<pstyle="font-size:12px">Smalltext</p>',
  },
  {
    taskNum: 3,
    title: "CSS: Style inheritance",
    task: cssTask03,
    solution: '<divstyle="font-size:40px;">Block<pstyle="font-size:20px;">Paragraph</p></div>',
    solution2: '<divstyle="font-size:40px">Block<pstyle="font-size:20px">Paragraph</p></div>',
  },
  {
    taskNum: 4,
    title: "CSS: Tag style",
    task: cssTask04,
    solution: '<style>p{font-size:20px;}</style><pstyle="font-size:44px;">Styletag</p>',
    solution2: '<pstyle="font-size:44px;">Styletag</p><style>p{font-size:20px;}</style>',
  },
  {
    taskNum: 5,
    title: "CSS: Basic tag styles",
    task: cssTask05,
    solution: "<h1>Newfirstlevelheadingsize</h1><style>h1{font-size:20px;}</style>",
    solution2: "<style>h1{font-size:20px;}</style><h1>Newfirstlevelheadingsize</h1>",
  },
  {
    taskNum: 6,
    title: "CSS: Classes",
    task: cssTask06,
    solution: '<pclass="paragraph">Colorparagraph</p><style>.paragraph{color:#a1b2c3;</style>',
    solution2: '<style>.paragraph{color:#a1b2c3;</style><pclass="paragraph">Colorparagraph</p>',
  },
  {
    taskNum: 7,
    title: "CSS: Selectors",
    task: cssTask07,
    solution: '<pid="red"class="bold">RedID,Boldclass</p><style>#red{color:red;}.bold{font-weight:bold;}</style>',
    solution2: '<style>#red{color:red;}.bold{font-weight:bold;}</style><pid="red"class="bold">RedID,Boldclass</p>',
  },
  {
    taskNum: 8,
    title: "CSS: Cascade",
    task: cssTask08,
    solution: '<pclass="cascade">CSSstylecascading</p><style>.cascade{font-size:25px;}p{letter-spacing:15px;}</style>',
    solution2: '<style>.cascade{font-size:25px;}p{letter-spacing:15px;}</style><pclass="cascade">CSSstylecascading</p>',
  },
  {
    taskNum: 9,
    title: "CSS: Priority",
    task: cssTask09,
    solution: '',
    solution2: '',
  },
  {
    taskNum: 10,
    title: "CSS: Colors",
    task: cssTask10,
    solution: '',
    solution2: '',
  },
];

export default cssTasks;
