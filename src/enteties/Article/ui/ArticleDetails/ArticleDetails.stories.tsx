import type { Meta, StoryObj } from '@storybook/react';
import { Article } from 'enteties/Article';
import { ArticleBlockType, ArticleType } from 'enteties/Article/model/types/article';
import { PartialStoreDecorator } from 'shared/config/storybook/StoreProviderDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/context/ThemeContext';
import { ArticleDetails } from './ArticleDetails';

const meta: Meta<typeof ArticleDetails> = {
    title: 'Enteties/ArticleDetails',
    component: ArticleDetails,
    // tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: "What's new in JS for 2023? Що нового в JS у 2023 році?",
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
                "Let's start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript offers seven primitive types",
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
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
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
};
export const Primary: Story = {
    args: {},
    decorators: [
        PartialStoreDecorator({
            articleDetails: {
                data: article,
            },
        })],
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                data: article,
            },
        })],
};

export const Loading: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        })],
};

export const Error: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK),
        PartialStoreDecorator({
            articleDetails: {
                error: 'error',
            },
        })],
};
