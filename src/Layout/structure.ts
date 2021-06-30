
export const sections = [
    {
        url: "/about",
        title: 'About',
        description: 'About section',
        Comp: 'About',
        links: [
            ,
            {
                href: 'https://www.typescriptlang.org/docs/handbook/intro.html',
                text: 'TypeScript book'
            },
            {
                href: 'https://www.typescriptlang.org/docs/handbook/2/basic-types.html',
                text: 'TypeScript book v2 beta'
            },
            {
                href: 'https://github.com/Microsoft/TypeScript/wiki/FAQ',
                text: 'TypeScript FAQ'
            },
            {
                href: "https://www.stephanboyer.com/",
                text: "https://www.stephanboyer.com/",
            },
            {
                href: "http://cliffle.com/contact/",
                text: "http://cliffle.com/contact/",
            },
            {
                href: "https://fettblog.eu/",
                text: "https://fettblog.eu/",
            },
            {
                href: 'https://blog.joshuakgoldberg.com/',
                text: 'https://blog.joshuakgoldberg.com/'
            },
            {
                href: 'https://thenewtoys.dev/blog',
                text: 'T.J. Crowder \'s blog'
            }
        ],
        id: -1,
        date: '',
        type: 'section',
        tags: []
    },
    {
        url: "/contact",
        title: 'Contact',
        description: 'About section',
        Comp: 'Contact',
        links: [],
        id: -2,
        date: '',
        type: 'section',
        tags: []
    },
    {
        url: '/',
        title: 'Home',
        description: 'Home section',
        Comp: 'Home',
        links: [],
        id: -3,
        date: '',
        type: 'section',
        tags: []
    },
];

export const blogArticles = [
    {
        url: "/math",
        title: "Math operations",
        description:
            "Let's assume, You want to make some math operations either on number or bigint.",
        Comp: 'MathOperations',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/65280785/is-it-possible-to-declare-a-typescript-function-which-works-on-both-numbers-and#answer-65281351",
                text: "Function that work both on numbers and bigints",
            },
            {
                href: 'https://stackoverflow.com/questions/65508351/is-it-possible-to-use-intersection-to-make-function-overloadings-with-generics',
                text: 'Overloadings with generics'
            }
        ],
        tags: ['number', 'bigint', 'math'],
        date: 'December 13, 2020'
    },
    {
        url: "/typed-react-children",
        title: "Type React component children",
        description:
            "Let's assume you want to create component which will accept array of children components with certain props.",
        Comp: 'ReactChildren',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/64967447/adding-required-props-to-child-react-elements-with-typescript",
                text: "Adding required props to child react elements",
            },
        ],
        tags: ['react', 'children'],
        date: 'November 23, 2020'
    },
    {
        url: "/react-return-type",
        title: "Type React component return type",
        description:
            "What if you need to make sure that some component will always return other component with some particular props",
        Comp: 'ReactReturnType',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/65406516/react-typescript-difference-between-react-fc-t-and-function",
                text: "DIff between typed function component and untyped",
            },
        ],
        tags: ['ReturnType', 'react'],
        date: 'December 22, 2020'
    },
    {
        url: "/compare-arguments",
        title: "Compare array arguments",
        description: "Compare length of arrays as arguments",
        Comp: 'CompareArguments',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/65361696/arguments-of-same-length-typescript",
                text: "How to restrict arguments to same length",
            },
            {
                href: 'https://stackoverflow.com/questions/65549062/template-string-literal-with-variable-cause-argument-of-type-s-not-assignable-t/65549738#65549738',
                text: 'StringNumber hack'
            }
        ],
        tags: ['array', 'arguments', 'narrow'],
        date: 'December 18, 2020'
    },

    {
        url: "/range-numbers",
        title: "Generate numbers in range",
        description: "How to generate numbers range as a literal type",
        Comp: 'RangeNumbers',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/65307438/how-to-define-properties-in-a-typescript-interface-with-dynamic-elements-in-the",
                text: "Make number range",
            },
        ],
        tags: ['number', 'range', 'template literals'],
        date: 'December 15, 2020'
    },
    {
        url: "/tuples",
        title: "Handle literal arrays/tuples",
        description: "Filter, map, reduce, findIndex etc ...",
        Comp: 'Tuples',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/65476787/how-to-dynamically-create-an-object-based-on-a-readonly-tuple-in-typescript/65478618#65478618",
                text: "Typing arrays",
            },
            {
                href: 'https://stackoverflow.com/questions/65899183/typescript-template-literals-convert-array-to-a-list#answer-65899432',
                text: 'Reduce array to template string'
            },
            {
                href: 'https://stackoverflow.com/questions/65931013/defining-a-mixed-array-of-tuples/65932929#65932929',
                text: 'Mixed array of tuples'
            },
            {
                href: 'https://stackoverflow.com/questions/66075326/define-an-array-with-infered-types-related-to-first-prop-in-the-array/66077819#66077819',
                text: 'Map union to array'
            },
            {
                href: 'https://stackoverflow.com/questions/67021405/ts-types-convert-arrays-of-keys-and-array-of-values-to-object#answer-67022175',
                text: 'Zip two arrays into object'
            }
        ],
        tags: ['array', 'tuples'],
        date: 'April 9, 2021'
    },
    {
        url: "/union-array",
        title: "Transform Union to Array",
        description: "How to transform unions to array",
        Comp: 'UnionArray',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/65533827/get-keys-of-an-interface-in-generics/65534971#65534971",
                text: "Get keys from interface",
            },
        ],
        tags: ['union', 'array', 'transform'],
        date: 'January 2, 2021'
    },
    {
        url: "/unions",
        title: "Handle unions in React components",
        description: "How to work with unions",
        Comp: 'Unions',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/64899974/require-at-least-one-prop-to-be-passed-to-component-typescript",
                text: "Pass union props to React component - 1",
            },
            {
                href:
                    "https://stackoverflow.com/questions/65805600/struggling-with-building-a-type-in-ts",
                text: "How to make strict union",
            },
            {
                href: "https://dev.to/gcanti/functional-design-algebraic-data-types-36kf",
                text: 'Algebraic data types'
            },
            {
                href: 'https://stackoverflow.com/questions/65811270/problem-with-union-and-intersection-type-in-react-props',
                text: 'Pass union props to React component - 2'
            },
            {
                href: 'https://stackoverflow.com/questions/65842153/property-id-is-optional-in-type-a-but-required-in-type-b-after-if-statement#answer-65842560',
                text: 'Pass union props to React component - 3'
            },
            {
                href: 'https://stackoverflow.com/questions/65668969/event-maps-and-type-guards#answer-65890181',
                text: 'Use event map'
            }
        ],
        tags: ['union', 'react'],
        date: 'November 18, 2020'
    },
    {
        url: "/callbacks",
        title: "Callbacks",
        description: "How to properly type callbacks",
        Comp: 'Callbacks',
        links: [
            {
                href:
                    "https://stackoverflow.com/questions/65540887/typescript-type-can-not-be-inferred-if-function-parameter-is-used/65543597#65543597",
                text: "Callback typings",
            },
            {
                href:
                    "https://en.wikipedia.org/wiki/Type_system#:~:text=In%20programming%20languages%2C%20a%20type,%2C%20expressions%2C%20functions%20or%20modules.",
                text: "Type system",
            },
            {
                href:
                    "https://en.wikipedia.org/wiki/Covariance_and_contravariance_(computer_science)",
                text: "Covariance_and_contravariance",
            },
            {
                href:
                    "https://basarat.gitbook.io/typescript/type-system/type-compatibility",
                text: "TS book",
            },
            {
                href: 'https://stackoverflow.com/questions/66706012/infer-function-generic-type-u-from-return-value-of-passed-function/66725927#66725927',
                text: 'Infer argument and return type of callback when they are depend on each other'
            },
            {
                href: 'https://stackoverflow.com/questions/66668428/typescript-doesnt-figure-out-the-generic',
                text: 'Generic quirks'
            },
            {
                href: 'https://stackoverflow.com/questions/65028565/how-to-overload-optional-boolean-in-typescript',
                text: 'Union types and callbacks'
            }, {
                href: 'https://stackoverflow.com/questions/67337050/typescript-failing-to-correctly-infer-types-from-generic-using-keyof-as-property#answer-67337548',
                text: 'Union type and callbacks 2'
            }
        ],
        tags: ['callback', 'infer'],
        date: 'April 30, 2021'
    },
    {
        url: "/publish-subscribe",
        title: "Publish subscribe pattern",
        description: "Type safe publish subscribe pattern",
        Comp: 'PubSub',
        links: [{
            href: 'https://stackoverflow.com/questions/65668969/event-maps-and-type-guards#answer-65890181',
            text: 'Event mapping'
        }],
        tags: ['pattern'],
        date: 'January 25, 2021'
    },
    {
        url: "/type-state",
        title: "Type state pattern",
        description: "Type safe handler",
        Comp: 'TypeState',
        links: [
            {
                href:
                    "https://docs.google.com/presentation/d/1po3-zRQCp8m8cwg-CF5dUL_6RPe9gIaKIT5P_DNbGE8/edit#slide=id.g6baf2c25cf_0_33",
                text: "presentation",
            },
            { href: "http://cliffle.com/blog/rust-typestate/", text: "Cliff L. Biffle's blog" },
            {
                href:
                    "https://stackoverflow.com/questions/65431379/type-property-relying-on-return-type-of-another-property",
                text: "Typing data structure with callbacks",
            },
            {
                href: 'https://stackoverflow.com/questions/65891135/how-to-define-map-with-correlation-between-a-key-type-and-a-value-type-while-th',
                text: 'Make illegal Map irrepresentable'
            },
            {
                href: 'https://stackoverflow.com/questions/65978153/typescript-mapenum-setenum-no-overload-matches-this-call-but-i-dont-get',
                text: 'Map typing'

            }
        ],
        tags: ['pattern', 'Map', 'callback'],
        date: 'December 23, 2020'
    },
    {
        url: "/api",
        title: "Api requests",
        description: "Make type safe api requests with TypeScript",
        Comp: 'Api',
        links: [{
            href: 'https://stackoverflow.com/questions/65658633/how-to-determine-the-type-of-generic-in-a-class/65664455#65664455',
            text: 'Restrict using of methods by generic value'
        }],
        tags: ['pattern'],
        date: 'January 11, 2021'
    },

    {
        url: '/template-literals',
        title: 'Working with template literals',
        description: 'Here you can find some advanced examples with template literals',
        Comp: 'TemplateLiterals',
        links: [
            {
                href: 'https://stackoverflow.com/questions/65844206/how-to-avoid-ambiquity-in-typescript-template-literal-type-inference',
                text: 'How to avoid ambiquity in TypeScript template literal type inference?',
            }, {
                href: 'https://stackoverflow.com/questions/65899183/typescript-template-literals-convert-array-to-a-list/65899432#65899432',
                text: 'Convert array to string'
            },
            {
                href: 'https://stackoverflow.com/questions/66140451/typescript-add-kebab-case-types-form-actual-camel-case-keys#answer-66142561',
                text: 'Classic example with templates string'
            },
            {
                href: 'https://github.com/microsoft/TypeScript/pull/40336',
                text: 'TypeScript main merge request'
            }
        ],
        tags: ['template literals'],
        date: 'January 22, 2021'
    },
    {
        url: '/chain-callbacks',
        title: 'How to chain callbacks',
        description: 'Here you can find information about callbacks chaining',
        Comp: 'CallbackChain',
        links: [
            {
                href: 'https://stackoverflow.com/questions/66096137/cant-make-typescript-generics-chain-work',
                text: 'TypeScript callback chain',
            },
            {
                href: 'https://stackoverflow.com/questions/66075326/define-an-array-with-infered-types-related-to-first-prop-in-the-array#answer-66077819',
                text: 'Tuples with callbacks'
            }
        ],
        tags: ['callback', 'union', 'tuples'],
        date: 'February 10, 2021'
    },
    {
        url: '/flatten-union',
        title: 'How to flatten union',
        description: 'Here you can find information about union flattening',
        Comp: 'FlattenUnion',
        links: [
            {
                href: 'https://stackoverflow.com/questions/66116836/how-to-flatten-nested-union-types-in-typescript',
                text: 'Flatten union',
            }
        ],
        tags: ['union', 'flatten'],
        date: 'February 11, 2021'
    },
    {
        url: '/union-partial',
        title: 'Use union instead of Partial',
        description: 'Constrain object keys to enum\'s values while not requiring all keys to be present and object values are not considered undefined',
        Comp: 'UnionPartial',
        links: [
            {
                href: 'https://stackoverflow.com/questions/66257786/constrain-object-keys-to-enums-values-while-not-requiring-all-keys-to-be-presen#answer-66258085',
                text: 'Use union instead of Partial',
            }
        ],
        tags: ['union', 'partial', 'recursion', 'tuples'],
        date: 'February 18, 2021'
    },
    {
        url: '/dates',
        title: 'Working with Dates',
        description: 'Type safe objects with Dates',
        Comp: 'Dates',
        links: [
            {
                href: 'https://stackoverflow.com/questions/66563064/how-do-i-typescript-this-object-array#answer-66564065',
                text: 'Type safe dates',
            }
        ],
        tags: ['template literals'],
        date: 'March 21, 2021'
    },
    {
        url: '/type-negation',
        title: 'Type negation',
        description: 'I want any type except ...',
        Comp: 'TypeNegation',
        links: [
            {
                href: 'https://stackoverflow.com/questions/66745644/generic-argument-constrained-to-be-non-array#answer-66745744',
                text: 'Generic argument constrained to be non array',
            }, {
                href: 'https://stackoverflow.com/questions/66828502/conditional-type-based-on-a-non-empty-string#answer-66835100',
                text: 'Empty string negation'
            }
        ],
        tags: ['generic', 'negation'],
        date: 'April 12, 2021'
    },
    {
        url: '/hex-validation',
        title: 'HEX Validation',
        description: 'Validator for HEX values',
        Comp: 'HexValidation',
        links: [
            {
                href: 'https://stackoverflow.com/questions/66851513/a-way-to-mark-arbitrary-strings-in-typescript-template-literals#answer-66852494',
                text: 'Template literals HEX Validator',
            }
        ],
        tags: ['template literals', 'hex', 'tuples'],
        date: 'March 29, 2021'
    },
    {
        url: '/linked-list',
        title: 'Linked list',
        description: 'Linked List with recursive types',
        Comp: 'LinkedList',
        links: [
            {
                href: 'https://stackoverflow.com/questions/66849973/scala-snippet-to-typescript-how-to-convert-abstract-type-members',
                text: 'Linked List with recursive types in TypeScript',
            }
        ],
        tags: ['recursive', 'data structure'],
        date: 'April 26, 2021'
    },
    {
        url: '/deep-pick',
        title: 'Deep pick typings (updated)',
        description: 'I will try to implement smth similar to lodash.get typings',
        Comp: 'DeepPick',
        links: [
            {
                href: 'https://stackoverflow.com/questions/67242871/declare-a-type-that-allows-all-parts-of-all-levels-of-another-type#answer-67247652',
                text: 'Deep pick function ',
            },

        ],
        tags: ['deeppick'],
        date: 'May 28, 2021'
    },
    {
        url: '/validators',
        title: 'Type validators',
        description: 'How to implements several type validators in generic way',
        Comp: 'Validation',
        links: [
            {
                href: 'https://stackoverflow.com/questions/67282788/how-would-i-add-type-to-nested-object#answer-67284951',
                text: 'CSS validation',
            },

        ],
        tags: ['type validation'],
        date: 'April 27, 2021'
    },
    {
        url: '/FP-style',
        title: 'Functional programming tips & utils',
        description: 'Some useful typed pure functions',
        Comp: 'FP',
        links: [

        ],
        tags: ['fp'],
        date: 'May 8, 2021'
    },
    {
        url: '/react-props',
        title: 'Handle Props in React',
        description: 'Make illegal props unrepresentable',
        Comp: 'ReactProps',
        links: [

        ],
        tags: ['illegal state', 'react', 'props'],
        date: 'June 19, 2021'
    },
    {
        url: '/oop-style',
        title: 'OOP typings',
        description: 'Typings for classes',
        Comp: 'OOP',
        links: [
            {
                href: 'https://stackoverflow.com/questions/67084764/function-return-type-that-matches-parameter-types-when-using-the-spread-operato#answer-67089413',
                text: 'Typed inheritance, mixin pattern',
            },
            {
                href: 'https://stackoverflow.com/questions/67070250/typescript-class-generic-type-is-too-narrow-if-extends-something-else-is-not#answer-67071331',
                text: 'Infer strict type to more general'
            },
            {
                href: "https://stackoverflow.com/questions/67979663/typescript-keyof-instancetypet-cannot-be-used-to-index-type-error#answer-68118171",
                text: 'Infer keyof InstanceType'
            }
        ],
        tags: ['oop', 'inheritance'],
        date: 'June 24, 2021'
    },
    {
        url: '/mutations',
        title: 'Mutations in typescript',
        description: 'TypeScript is more about immutability',
        Comp: 'Mutations',
        links: [

        ],
        tags: ['fp', 'mutations'],
        date: 'June 30, 2021'
    },

].map((elem, index) => ({ ...elem, type: 'article', id: index + 1 }))

