const app = document.getElementById('app')
const yarr = new Audio('img/yohooo')
yarr.play()
yarr.volume = 0.12
const model = {
    app: {
        userID: null,
        currentView: 'homescreen',
        darkmode: false,
        loggedIn: false,
    },
    input: {       
        login: {
            id: null,
            password: null,
        },
        createAccount: [
            {
                id: null,
                username: "",
                eMail: "",
                passwordOne: "",
                passwordTwo: "",
                firstName: "",
                lastName: "",
                profilePicure: '',
                phoneNr: '',
                age: ' ',
                bio: "",
                country: '',
                github: '',
                linkedIn: '',
                friends: [],
                projects: [],
            }
        ],
        projects: [
            {
                id: null,
                approved: false,
                name: "",
                description: '',
                author: null,
                files: [
                    {
                        id: null,
                        picture: '',
                        content: '',
                        percentEachLanguage: {},
                    }
                ],
                comments: [
                    {
                        id: null,
                        comment: '',
                    }
                ],
            }
        ],
        userActivity: {
/*            messages: [           //nice to have          
                {
                    toUserId: null,
                    time: "",
                    message: "",
                },
            ],
            */
            comments: [
                {
                    projectId: null,
                    time:"",
                    comment:"",
                }
            ],
            searchbar: ["",],
        },
    },

    data: {
        wordCloud: {
            Javascript: '1',
            C: '2',
            CSharp: '3',
            CSS: '4',
            Ruby: '4',
            CPlusPlus: '2',
            HTML: '3',
            Python: '6',
            Binary: '1',
        },
        adminpanel: {
            users: [],
            forReview: []
        },
        //  messages: [         
        //     {
        //         id: 0,
        //         to: 0,
        //         from: 0,
        //         dateSent: '05-05-2024',
        //         content: 'hei på deg'
        //      }
        // ],
        users: [
            {
                id: 0,
                username: "BjarnePirat",
                eMail: "yarr@getAcademy.com",
                passwordOne: "treasure123",
                firstName: "Bjarne",
                lastName: "Pirat",
                profilePicure: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Bjarne_H%C3%A5kon_Hanssen_2005-10-17.jpg',
                phoneNr: 12345678,
                age: 60,
                projects: [],
                bio: "i like turtles",
                country: "Cuba",
                github: 'url',
                linkedIn: 'url',
                friends: [],
            },
            {
                id: 1,
                username: "Anita",
                eMail: "yarr@getAcademy.com",
                passwordOne: "treasure123",
                firstName: "Bjarne",
                lastName: "Pirat",
                profilePicure: 'https://viover60.no/app/uploads/2022/05/NTB_fI8b1WdilZs.jpg',
                phoneNr: 12345678,
                age: 60,
                projects: [],
                bio: "i like turtles",
                country: "Cuba",
                github: 'url',
                linkedIn: 'url',
                friends: [],
            },
            {
                id: 2,
                username: "Per",
                eMail: "yooooo",
                passwordOne: "treasure123",
                firstName: "Bjarne",
                lastName: "Pirat",
                profilePicure: 'https://premium.vgc.no/v2/images/51248aae-ea9f-44f2-a5ec-32a7b9cecc84?fit=crop&format=auto&h=1285&w=1976&s=c57addd3ba57d1eca204c2d0519c912d54ca21e1',
                phoneNr: 12345678,
                age: 60,
                projects: [],
                bio: "i like turtles",
                country: "Cuba",
                github: 'url',
                linkedIn: 'url',
                friends: [],
            },
        ],
        projects: [
            {
                id: 0,
                approved: true,
                name: "hehexD",
                lastUpdated: '05-05-2024',
                dateCreated: '05-05-2024',
                description: 'bla bla',
                author: 1,
                picture: 'https://www.grunge.com/img/gallery/the-most-famous-pirate-ships-in-history/l-intro-1656447227.jpg',
                files: [
                    {
                        id: 0,
                        name: 'View.js',
                        picture: 'url',
                        content: 'code',
                        language: 'Javascript',
                        percentEachLanguage: {},
                    }
                ],
                comments: [
                    {
                        userID: 1,
                        from: 0,
                        dateSent: '05-05-2024',
                        comment: 'blah'
                    }
                ],
            },
            {
                id: 1,
                approved: true,
                name: "Anita",
                lastUpdated: '05-05-2024',
                dateCreated: '05-05-2024',
                description: 'bla bla',
                author: 0,
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg',
                files: [
                    {
                        id: 0,
                        name: 'View.js',
                        picture: 'url',
                        content: 'code',
                        language: 'Javascript',
                        percentEachLanguage: {},
                    }
                ],
                comments: [
                    {
                        userID: 1,
                        from: 0,
                        dateSent: '05-05-2024',
                        comment: 'blah'
                    }
                ],
            },
            {
                id: 2,
                approved: true,
                name: "BJarneman",
                lastUpdated: '05-05-2024',
                dateCreated: '05-05-2024',
                description: 'bla bla',
                author: 2,
                picture: 'https://i.etsystatic.com/12310347/r/il/690746/1316811182/il_fullxfull.1316811182_gpqc.jpg',
                files: [
                    {
                        id: 0,
                        name: 'View.js',
                        picture: 'url',
                        content: 'code',
                        language: 'Javascript',
                        percentEachLanguage: {},
                    }
                ],
                comments: [
                    {
                        userID: 1,
                        from: 0,
                        dateSent: '05-05-2024',
                        comment: 'blah'
                    }
                ],
            }
        ]
    },
}

