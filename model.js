const app = document.getElementById('app')
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
                password: "",
                repassword: "",
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
                password: "treasure123",
                firstName: "Bjarne",
                lastName: "Pirat",
                profilePicure: 'url',
                phoneNr: 12345678,
                age: 60,
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
                password: "treasure123",
                firstName: "Bjarne",
                lastName: "Pirat",
                profilePicure: 'url',
                phoneNr: 12345678,
                age: 60,
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
                password: "treasure123",
                firstName: "Bjarne",
                lastName: "Pirat",
                profilePicure: 'url',
                phoneNr: 12345678,
                age: 60,
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
                name: "hehexD",
                lastUpdated: '05-05-2024',
                dateCreated: '05-05-2024',
                description: 'bla bla',
                author: 1,
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
                name: "hehexD",
                lastUpdated: '05-05-2024',
                dateCreated: '05-05-2024',
                description: 'bla bla',
                author: 1,
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

