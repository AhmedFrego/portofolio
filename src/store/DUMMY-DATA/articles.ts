import { ArticleClass } from "../../models/AricleClass";

export const articlesData = [
  new ArticleClass(
    "title ",
    '````{javascript} *17* const location = useLocation()\nconst articles = useSelector((state: RootState) => state.articles.articles)\nconst id = location.hash.replace(location.hash[0], ```555 ipsum dolor sit amet consectetur,555 adipisicing elit. Reprehenderit ````{html}<div class="feature feature--blue">\n<div class="feature__img-box"> <img src="imgs/features-03.jpg" alt=" quality feature 3" class="feature__img">\n</div>\n<h3 class="heading--tertiary u-margin-center">passion</h3>\n<p class="paragraph paragraph--large-1 u-align-center"> Lorem ipsum dolor sit amet sdfglkhjdf kjasdhfgkasldhfg lkjahsdfglkhasdf lkjh aklsjdfhl consecteturadipisicing elit. Odit harum hic veniam eligendi minima </p> \n<a href="#"class="btn-colored btn-colored--blue u-margin-center">more</a>\n</div>"\n````{javascript} *17* const location = useLocation()\nconst articles = useSelector((state: RootState) => state.articles.articles)\nconst id = location.hash.replace(location.hash[0], ```555 ipsum dolor sit amet consectetur,555 adipisicing elit. Reprehenderit ',
    [5, 4, 3, 2, 1, 5, 4, 5, 3, 5, 5, 5, 5, 5],
    "e9e38f30-6800-40e7-8957-419cac6a12cd"
  ),
  new ArticleClass(
    "title ",
    '````{javascript}*15*export const insertAtCursor = (element: HTMLInputElement | HTMLTextAreaElement,changeHandler: (value: string) => void,myValue: string\n) => \n\nconst caretPosition = element?.selectionStart || 0;\nconst textBeforeCaret = element.value.slice(0, caretPosition);\n\nchangeHandler(textBeforeCaret + myValue + " " + element.value.replace(textBeforeCaret, ""));\n\nsetTimeout(() => {\nelement.setSelectionRange(caretPosition + myValue.length + 1, caretPosition + myValue.length + 1);\nelement.blur();\nelement.focus();\n}, 1);\n}',
    [5, 4],
    "3b2a884e-7bf5-4b05-bc04-85bc5fc32267"
  ),
  new ArticleClass(
    "title ",
    '````{html} *17*\n<div class="feature feature--blue">\n<div class="feature__img-box">\n<img src="imgs/features-03.jpg" alt=" quality feature 3" class="feature__img">\n</div>\n<h3 class="heading--tertiary u-margin-center">passion</h3>\n<p class="paragraph paragraph--large-1 u-align-center"> Lorem ipsum dolor sit amet sdfglkhjdf elit. Odit harum hic veniam eligendi minima </p> \n<a href="#"class="btn-colored btn-colored--blue u-margin-center">more</a>\n</div>"\n````{typescript}\nexport const insertAtCursor = (\nelement: HTMLInputElement | HTMLTextAreaElement,\nchangeHandler: (value: string) => void,\nmyValue: string\n) => {\nconst caretPosition = element?.selectionStart || 0;\nconst beforeCaret = element.value.slice(0, caretPosition);\nchangeHandler(beforeCaret + myValue + "" + element.value.replace(beforeCaret, ""));\nsetTimeout(() => {\nelement.focus();\nelement.selectionEnd = caretPosition + myValue.length;\nelement.selectionStart = caretPosition + myValue.length;\n}, 1);\n};\n````{css} * ,*::after,*::before {\nbox-sizing: inherit;\nmargin: 0;\npadding: 0;\n}\n\nhtml {\nbox-sizing: border-box;\nscroll-behavior: smooth;\n}\n\nul {\nlist-style: none;\nmargin: 0;\npadding: 0;\n}\na { text-decoration: none;}\n\nsvg {\nmax-width: 10rem;\n}\n\nbutton {\nbackground-color: transparent;\nborder: none;\n}\n\ntextarea{\nresize:none;\n}\n',
    [5, 4, 3, 2, 1, 5, 4, 5, 3, 3, 1, 2, 5, 4, 4, 3, 2, 2, 3, 3],
  ),
  new ArticleClass(
    "title ",
    '````{html} *17*\n<div class="feature feature--blue">\n<div class="feature__img-box">\n<img src="imgs/features-03.jpg" alt=" quality feature 3" class="feature__img">\n</div>\n<h3 class="heading--tertiary u-margin-center">passion</h3>\n<p class="paragraph paragraph--large-1 u-align-center"> Lorem ipsum dolor sit amet sdfglkhjdf elit. Odit harum hic veniam eligendi minima </p> \n<a href="#"class="btn-colored btn-colored--blue u-margin-center">more</a>\n</div>"\n````{typescript}\nexport const insertAtCursor = (\nelement: HTMLInputElement | HTMLTextAreaElement,\nchangeHandler: (value: string) => void,\nmyValue: string\n) => {\nconst caretPosition = element?.selectionStart || 0;\nconst beforeCaret = element.value.slice(0, caretPosition);\nchangeHandler(beforeCaret + myValue + "" + element.value.replace(beforeCaret, ""));\nsetTimeout(() => {\nelement.focus();\nelement.selectionEnd = caretPosition + myValue.length;\nelement.selectionStart = caretPosition + myValue.length;\n}, 1);\n};\n````{css} * ,*::after,*::before {\nbox-sizing: inherit;\nmargin: 0;\npadding: 0;\n}\n\nhtml {\nbox-sizing: border-box;\nscroll-behavior: smooth;\n}\n\nul {\nlist-style: none;\nmargin: 0;\npadding: 0;\n}\na { text-decoration: none;}\n\nsvg {\nmax-width: 10rem;\n}\n\nbutton {\nbackground-color: transparent;\nborder: none;\n}\n\ntextarea{\nresize:none;\n}\n',
    [5, 4, 3, 2, 1, 5, 4, 5, 3, 5, 5, 4, 4, 5, 2, 1, 3, 2, 1],
  ),
  new ArticleClass(
    "title ",
    '````{python}def http_error(status):\nmatch status:\ncase 400:\nreturn "Bad request"\ncase 404:\nreturn "Not found"\ncase 418:\nreturn "I\'m a teapot"\ncase _:\nreturn "Something\'s wrong with the internet"',
    [5, 4, 3, 2, 1, 5, 4, 5, 3, 2, 3, 5, 4, 2, 3, 3, 2, 5, 4],
  ),
  new ArticleClass(
    "title ",
    '````*17* const location = useLocation()\nconst articles = useSelector((state: RootState) => state.articles.articles)\nconst id = location.hash.replace(location.hash[0], ```555 ipsum dolor sit amet consectetur,555 adipisicing elit. Reprehenderit ````{html}<div class="feature feature--blue">\n<div class="feature__img-box"> <img src="imgs/features-03.jpg" alt=" quality feature 3" class="feature__img">\n</div>\n<h3 class="heading--tertiary u-margin-center">passion</h3>\n<p class="paragraph paragraph--large-1 u-align-center"> Lorem ipsum dolor sit amet sdfglkhjdf kjasdhfgkasldhfg lkjahsdfglkhasdf lkjh aklsjdfhl consecteturadipisicing elit. Odit harum hic veniam eligendi minima </p> \n<a href="#"class="btn-colored btn-colored--blue u-margin-center">more</a>\n</div>"\n',
    [5, 4, 3, 2, 1, 5, 4, 5, 3, 2, 2, 3, 3, 5, 5, 1, 2, 4, 2, 1, 4, 2, 3],
  ),
  new ArticleClass(
    "title ",
    '````{javascript}*15*export const insertAtCursor = (element: HTMLInputElement | HTMLTextAreaElement,changeHandler: (value: string) => void,myValue: string\n) => \n\nconst caretPosition = element?.selectionStart || 0;\nconst textBeforeCaret = element.value.slice(0, caretPosition);\n\nchangeHandler(textBeforeCaret + myValue + " " + element.value.replace(textBeforeCaret, ""));\n\nsetTimeout(() => {\nelement.setSelectionRange(caretPosition + myValue.length + 1, caretPosition + myValue.length + 1);\nelement.blur();\nelement.focus();\n}, 1);\n}',
    [5, 4, 3, 2, 1, 5, 4, 5, 3, 2, 1, 4, 2, 1, 3, 1, 5, 1, 2, 3, 4],
  ),
  new ArticleClass(
    "title ",
    '````{html} *17*\n<div class="feature feature--blue">\n<div class="feature__img-box">\n<img src="imgs/features-03.jpg" alt=" quality feature 3" class="feature__img">\n</div>\n<h3 class="heading--tertiary u-margin-center">passion</h3>\n<p class="paragraph paragraph--large-1 u-align-center"> Lorem ipsum dolor sit amet sdfglkhjdf elit. Odit harum hic veniam eligendi minima </p> \n<a href="#"class="btn-colored btn-colored--blue u-margin-center">more</a>\n</div>"\n````{typescript}\nexport const insertAtCursor = (\nelement: HTMLInputElement | HTMLTextAreaElement,\nchangeHandler: (value: string) => void,\nmyValue: string\n) => {\nconst caretPosition = element?.selectionStart || 0;\nconst beforeCaret = element.value.slice(0, caretPosition);\nchangeHandler(beforeCaret + myValue + "" + element.value.replace(beforeCaret, ""));\nsetTimeout(() => {\nelement.focus();\nelement.selectionEnd = caretPosition + myValue.length;\nelement.selectionStart = caretPosition + myValue.length;\n}, 1);\n};\n````{css} * ,*::after,*::before {\nbox-sizing: inherit;\nmargin: 0;\npadding: 0;\n}\n\nhtml {\nbox-sizing: border-box;\nscroll-behavior: smooth;\n}\n\nul {\nlist-style: none;\nmargin: 0;\npadding: 0;\n}\na { text-decoration: none;}\n\nsvg {\nmax-width: 10rem;\n}\n\nbutton {\nbackground-color: transparent;\nborder: none;\n}\n\ntextarea{\nresize:none;\n}\n',
    [5, 4, 3, 2, 1, 5, 4, 5, 3, 1, 2, 3, 5, 4, 1, 2, 3],
  ),
];
