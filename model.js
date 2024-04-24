const model = {
    app: {
        userID: null,
        currentView: 'homescreen',
        darkmode: false,
        loggedIn: false,
        currentprofile: false,
        currentprofiletab: null,
        darkmodeurl: "img/sun.png",
        muteurl: "img/mute.png",
        html: app = document.getElementById('app'),
        wethebestmusic: {
            yarr: yarr = new Audio('img/piratemusic.mp3'),
            volume: yarr.volume = 0.3,   
            loop: yarr.loop = true,
            matey: yarr.play(), 
        }
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
                profilePicture: '',
                phoneNr: '',
                age: ' ',
                bio: "",
                country: '',
                city: '',
                github: '',
                linkedIn: '',
                friends: [],
                projects: [],
            }
        ],
        editProfile: {
                username: "",
                eMail: "",
                passwordOne: "",
                passwordTwo: "",
                firstName: "",
                lastName: "",
                profilePicture: '',
                phoneNr: '',
                age: ' ',
                bio: "",
                country: '',
                city: '',
                github: '',
                linkedIn: '',
        },
        projects: [
            {
                name: "",
                description: '',
                picture: null,
                files: [
                    {
                        id: null,
                        picture: '',
                        content: '',
                        percentEachLanguage: {},
                    }
                ],
            }
        ], 
        userActivity: {
            message: '',
            comment: '',
            searchbar: [""],
        },
    },

    data: {
        wordCloud: {
            Javascript: 5,
            C: 0,
            'C#': 0,
            CSS: 0,
            Ruby: 0,
            'C++': 0,
            HTML: 0,
            Python: 0,
            Binary: 0,
        },
        adminpanel: {
            users: [0],
            forReview: [3],
        },
         messages: [         
            {
                from: 0, to: 1, Datesent: '2024-04-17 07:37', content: 'Very nice',
             },
            {
                from: 1, to: 0, Datesent: '2024-04-17 07:37', content: 'Not very nice',
             },
        ],
        friends: [],
        users: [
            {
                id: 0,
                username: "BjarnePirat",
                eMail: "yarr@getAcademy.com",
                passwordOne: "Bjarne",
                firstName: "Bjarne",
                lastName: "Pirat",
                profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Bjarne_H%C3%A5kon_Hanssen_2005-10-17.jpg',
                phoneNr: 12345678,
                age: 60,
                projects: [0],
                bio: "i am Bjarne",
                country: "Cuba",
                city: "Abra Havn",
                github: 'url',
                linkedIn: 'url',
                friends: [1],
            },
            {
                id: 1,
                username: "Anita",
                eMail: "yarr@getAcademy.com",
                passwordOne: "Anita",
                firstName: "Bjarne",
                lastName: "Pirat",
                profilePicture: 'https://viover60.no/app/uploads/2022/05/NTB_fI8b1WdilZs.jpg',
                phoneNr: 12345678,
                age: 60,
                projects: [],
                bio: "i am Anita",
                country: "Cuba",
                city: "Abra Havn",
                github: 'url',
                linkedIn: 'url',
                friends: [0],
            },
            {
                id: 2,
                username: "Per",
                eMail: "yooooo",
                passwordOne: "Per",
                firstName: "Per",
                lastName: "Pirat",
                profilePicture: 'https://premium.vgc.no/v2/images/51248aae-ea9f-44f2-a5ec-32a7b9cecc84?fit=crop&format=auto&h=1285&w=1976&s=c57addd3ba57d1eca204c2d0519c912d54ca21e1',
                phoneNr: 12345678,
                age: 60,
                projects: [],
                bio: "i am Per",
                country: "Cuba",
                city: "Abra Havn",
                github: 'url',
                linkedIn: 'url',
                friends: [],
            },
        ],
        projects: [
            {
                id: 0,
                approved: true,
                name: "Pirat Skip",
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
                    },
                    {
                        id: 0,
                        name: 'View.js',
                        picture: 'url',
                        content: 'yaaaaaaaaaaaaaaaaa',
                        language: 'Javascript',
                        percentEachLanguage: {},
                    }
                ],
                comments: [
                    {
                        from: 0,
                        dateSent: '02-05-2024',
                        comment: 'blah'
                    },
                    {
                        from: 1,
                        dateSent: '05-05-1900',
                        comment: 'sdfgjsdfgsd'
                    },
                    {
                        from: 2,
                        dateSent: '10-05-2023',
                        comment: 'yo'
                    }
                ],
            },
            {
                id: 1,
                approved: true,
                name: "Coloseum",
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
                name: "Legoshus :)",
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
            },
            {
                id: 3,
                approved: false,
                name: "Lego hus i Javascript",
                lastUpdated: '05-05-2024',
                dateCreated: '05-05-2024',
                description: 'kek',
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

