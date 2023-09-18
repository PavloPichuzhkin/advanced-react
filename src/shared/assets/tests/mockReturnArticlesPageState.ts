/* eslint max-len: off */
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import {
    ArticleSortField, ArticleType, ArticleView, ArticleBlockType,
} from '@/entities/Article';
import { UserRole } from '@/entities/User';
import { SortOrder } from '@/shared/types';

export const mockReturnArticlesPageState = (

    isLoading: boolean = false,
    view: ArticleView = ArticleView.SMALL,
    error: string|undefined = undefined,
    order: SortOrder = 'asc',
    sort: ArticleSortField = ArticleSortField.VIEWS,
    // page: number;
    // limit?: number;
    // hasMore: boolean;
    // search: string;
    // type: ArticleType;
    // _inited: boolean;
):ArticlesPageSchema => {
    return {
        error,
        isLoading,
        view,
        page: 1,
        hasMore: true,
        _inited: true,
        limit: 9,
        sort,
        search: '',
        order,
        type: ArticleType.ALL,
        ids: isLoading ? [] : [
            '19',
            '15',
            '20',
            '1',
            '2',
            '3',
            '4',
            '17',
            '5',
        ],
        entities: isLoading ? {} : {
            1: {
                id: '1',
                // userId: '1',
                title: 'Javascript news',
                subtitle: 'What\'s new in JS for 2023? Що нового в JS у 2023 році?',
                img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                views: 1023,
                createdAt: '26.02.2023',
                type: [
                    ArticleType.IT,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                    {
                        id: '2',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '11',
                        type: ArticleBlockType.TIPS,
                        title: 'Note',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '3',
                        type: ArticleBlockType.CODE,
                        code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
                    },
                    {
                        id: '12',
                        type: ArticleBlockType.TIPS,
                        title: 'Tips',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '7',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                            'Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.',
                        ],
                    },
                    {
                        id: '8',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '9',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                        ],
                    },
                ],
                user: {
                    id: '1',
                    username: 'admin',
                    // password: '123',
                    roles: [
                        UserRole.ADMIN,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            2: {
                id: '2',
                // userId: '1',
                title: 'Kotlin news',
                subtitle: 'What\'s new in Kotlin for 2023? Що нового в Kotlin у 2023 році?',
                img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
                views: 1023,
                createdAt: '26.02.2023',
                type: [
                    ArticleType.IT,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                    {
                        id: '2',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                ],
                user: {
                    id: '1',
                    username: 'admin',
                    // password: '123',
                    roles: [
                        UserRole.ADMIN,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            3: {
                id: '3',
                // userId: '1',
                title: 'Python news',
                subtitle: 'What\'s new in Python for 2023? Що нового в Python у 2023 році?',
                img: 'https://scontent.fiev8-2.fna.fbcdn.net/v/t1.6435-9/157657003_1087050955149490_1862413444576549321_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=p2SRD5-ZLjMAX_fGM_h&_nc_ht=scontent.fiev8-2.fna&oh=00_AfA-41911tUldvVLGvm8rwASLuJLY7fwTP1D9Zy8w3RVOg&oe=65020A14',
                views: 1023,
                createdAt: '26.02.2023',
                type: [
                    ArticleType.IT,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                    {
                        id: '2',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '11',
                        type: ArticleBlockType.TIPS,
                        title: 'Note',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '3',
                        type: ArticleBlockType.CODE,
                        code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
                    },
                    {
                        id: '12',
                        type: ArticleBlockType.TIPS,
                        title: 'Tips',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '7',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                            'Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.',
                        ],
                    },
                    {
                        id: '8',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '9',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                        ],
                    },
                ],
                user: {
                    id: '1',
                    username: 'admin',
                    roles: [
                        UserRole.ADMIN,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            4: {
                id: '4',
                // userId: '1',
                title: 'Ruby news',
                subtitle: 'What\'s new in Ruby for 2023? Що нового в Ruby у 2023 році?',
                img: 'https://www.devteam.space/wp-content/uploads/2022/05/What-is-Ruby-660x371.jpg',
                views: 1023,
                createdAt: '26.02.2023',
                type: [
                    ArticleType.IT,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                    {
                        id: '2',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '11',
                        type: ArticleBlockType.TIPS,
                        title: 'Note',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '3',
                        type: ArticleBlockType.CODE,
                        code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
                    },
                    {
                        id: '12',
                        type: ArticleBlockType.TIPS,
                        title: 'Tips',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                ],
                user: {
                    id: '1',
                    username: 'admin',
                    roles: [
                        UserRole.ADMIN,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            5: {
                id: '5',
                // userId: '1',
                title: 'C news',
                subtitle: 'What\'s new in JS for 2023? Що нового в JS у 2023 році?',
                img: 'https://www.trainingnepal.com/wp-content/uploads/2023/04/C-Programming.png',
                views: 1043,
                createdAt: '16.08.2023',
                type: [
                    ArticleType.IT,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,

                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                ],
                user: {
                    id: '1',
                    username: 'admin',
                    // password: '123',
                    roles: [
                        UserRole.ADMIN,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            15: {
                id: '15',
                // userId: '1',
                title: 'Javascript news',
                subtitle: 'What\'s new in JS for 2018? Що нового в JS у 2018 році?',
                img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                views: 102,
                createdAt: '26.02.2018',
                type: [
                    ArticleType.ECONOMICS,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                    {
                        id: '2',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '11',
                        type: ArticleBlockType.TIPS,
                        title: 'Note',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '3',
                        type: ArticleBlockType.CODE,
                        code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
                    },
                    {
                        id: '12',
                        type: ArticleBlockType.TIPS,
                        title: 'Tips',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '7',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                            'Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.',
                        ],
                    },
                    {
                        id: '8',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '9',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                        ],
                    },
                ],
                user: {
                    id: '1',
                    username: 'admin',
                    // password: '123',
                    roles: [
                        UserRole.ADMIN,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            17: {
                id: '17',
                // userId: '1',
                title: 'Python news',
                subtitle: 'What\'s new in Python for 2023? Що нового в Python у 2023 році?',
                img: 'https://scontent.fiev8-2.fna.fbcdn.net/v/t1.6435-9/157657003_1087050955149490_1862413444576549321_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=p2SRD5-ZLjMAX_fGM_h&_nc_ht=scontent.fiev8-2.fna&oh=00_AfA-41911tUldvVLGvm8rwASLuJLY7fwTP1D9Zy8w3RVOg&oe=65020A14',
                views: 1023,
                createdAt: '26.02.2023',
                type: [
                    ArticleType.IT,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                    {
                        id: '2',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '11',
                        type: ArticleBlockType.TIPS,
                        title: 'Note',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '3',
                        type: ArticleBlockType.CODE,
                        code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
                    },
                    {
                        id: '12',
                        type: ArticleBlockType.TIPS,
                        title: 'Tips',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '7',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                            'Every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.',
                        ],
                    },
                    {
                        id: '8',
                        type: ArticleBlockType.IMAGE,
                        src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
                        title: 'Figure 1 - a screenshot of the site',
                    },
                    {
                        id: '9',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
                        ],
                    },
                ],
                user: {
                    id: '1',
                    username: 'admin',
                    // password: '123',
                    roles: [
                        UserRole.ADMIN,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            19: {
                id: '19',
                // userId: '1',
                title: 'C+ news',
                subtitle: 'What\'s new in JS for 2023? Що нового в JS у 2023 році?',
                img: 'https://www.trainingnepal.com/wp-content/uploads/2023/04/C-Programming.png',
                views: 10,
                createdAt: '16.08.2023',
                type: [
                    ArticleType.IT,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                ],
                user: {
                    id: '1',
                    username: 'admin',
                    // password: '123',
                    roles: [
                        UserRole.ADMIN,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/05/56/29/10/1000_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg',
                },
            },
            20: {
                id: '20',
                // userId: '2',
                title: 'PHP+ news',
                subtitle: 'What\'s new in PHP for 2023? Що нового в PHP у 2023 році?',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1920px-PHP-logo.svg.png',
                views: 109,
                createdAt: '16.08.2023',
                type: [
                    ArticleType.IT,
                    ArticleType.ECONOMICS,
                ],
                blocks: [
                    {
                        id: '1',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                            'Let\'s start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types',
                        ],
                    },
                    {
                        id: '10',
                        type: ArticleBlockType.TIPS,
                        title: 'Warning',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. ',
                        ],
                    },
                    {
                        id: '4',
                        type: ArticleBlockType.CODE,
                        code: '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="myH"></h1>\n<p id="myP"></p>\n\n<script>\n// Change heading:\ndocument.getElementById("myH").innerHTML = "JavaScript Comments";\n// Change paragraph:\ndocument.getElementById("myP").innerHTML = "My first paragraph.";\n</script>\n\n</body>\n</html>\n',
                    },
                    {
                        id: '5',
                        type: ArticleBlockType.TEXT,
                        title: 'The title of this block',
                        paragraphs: [
                            'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.',
                            'JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object.\n\n',
                        ],
                    },
                ],
                user: {
                    id: '2',
                    username: 'user1',
                    // password: '123',
                    roles: [
                        UserRole.USER,
                    ],
                    avatar: 'https://as1.ftcdn.net/v2/jpg/06/19/33/30/1000_F_619333024_IfgNj7pGIeoG3BUPHfEkBT15l7yi7HbG.jpg',
                },
            },
        },
    };
};
