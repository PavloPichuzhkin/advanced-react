/* eslint max-len: off */
import { Article, ArticleType, ArticleBlockType } from '@/entities/Article';
import { UserRole } from '@/entities/User';
import image from './mockImageForArticleDetailsPage.png';

export const article: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'Gogi',
        roles: [UserRole.ADMIN],
    },
    title: 'Javascript news',
    subtitle: "What's new in JS for 2023? Що нового в JS у 2023 році?",
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1023,
    createdAt: '26.02.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '11',
            type: ArticleBlockType.TEXT,
            title: 'The title of this block',
            paragraphs: [
                'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                "Let's start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types",
            ],
        },
        {
            id: '41',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
        },
        {
            id: '51',
            type: ArticleBlockType.TEXT,
            title: 'The title of this block',
            paragraphs: [
                'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
            ],
        },
        {
            id: '21',
            type: ArticleBlockType.IMAGE,
            src: image,
            title: 'Figure 1 - a screenshot of the site',
        },
        {
            id: '31',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '71',
            type: ArticleBlockType.TEXT,
            title: 'The title of this block',
            paragraphs: [
                'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                'Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.',
            ],
        },
        {
            id: '81',
            type: ArticleBlockType.IMAGE,
            src: image,
            title: 'Figure 1 - a screenshot of the site',
        },
        {
            id: '91',
            type: ArticleBlockType.TEXT,
            title: 'The title of this block',
            paragraphs: [
                'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
            ],
        },
    ],
};
