// dumy data until Django is setup

const tasks = [
    {
        "id": "1",
        "title": "Requirement Elicitation",
        "status": "Completed",
        "description": "Lorem ipsum dolor sit amet.",
        "PM": "Hagop",
        "staff": ["Alex", "Jason", "Kattie", "Alice"]
    },
    {
        "id": "2",
        "title": "UI Prototyping",
        "status": "In progress",
        "description": "Lorem ipsum dolor sit amet.2",
        "PM": "Ani",
        "staff": ["Alex", "Jason", "Kattie", "Alice"]
    },
    {
        "id": "3",
        "title": "Class Diagrams",
        "status": "Not started",
        "description": "Lorem ipsum dolor sit amet.3",
        "PM": "Setta",
        "staff": ["Alex", "Jason", "Kattie", "Alice"]
    },
    {
        "id": "4",
        "title": "Backend Development",
        "status": "On hold",
        "description": "Lorem ipsum dolor sit amet.4",
        "PM": "Yervant",
        "staff": ["Alex", "Jason", "Kattie", "Alice"]
    },

];

const status = [
    "Completed",
    "In progress",
    "Not started",
    "On hold",
];

const members = [
    {
        "name": "Hagop",
        "role": "Project Manager",
        "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`

    },
    {
        "name": "Alex",
        "role": "Full-Stack Developer",
        "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`

    },
    {
        "name": "Jason",
        "role": "UX Designer",
        "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`

    },
    {
        "name": "Kattie",
        "role": "Product Manager",
        "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`

    },
    {
        "name": "Alice",
        "role": "Backend Developer",
        "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`

    },
];

const roles = ["Backend Developer", "Project Manager", "Product Manager", "UX Designer"];

// this holds the most recent message between contacts
// it is used to display the lates message in the chat sidebar
const messagesAndMembers = [
    {
        "chatRoomId": 1,
        "member": {
            "name": "Johnny1",
            "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
        },
        "message": {
            "content": "Hey! Did you get the chance to review my work?",
            "timestamp": "02/12/21",
            "read": true,
        },
    },
    {
        "chatRoomId": 2,
        "member": {
            "name": "Johnny2",
            "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
        },
        "message": {
            "content": "Hey! Did you get the chance to review my work?",
            "timestamp": "02/12/21",
            "read": true,
        },
    },
    {
        "chatRoomId": 3,
        "member": {
            "name": "Johnny3",
            "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
        },
        "message": {
            "content": "Hey! Did you get the chance to review my work?",
            "timestamp": "02/12/21",
            "read": true,
        },
    },
    {
        "chatRoomId": 4,
        "member": {
            "name": "Johnny4",
            "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
        },
        "message": {
            "content": "Hey! Did you get the chance to review my work?",
            "timestamp": "02/12/21",
            "read": true,
        },
    },
    {
        "chatRoomId": 5,
        "member": {
            "name": "Johnny5",
            "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
        },
        "message": {
            "content": "Hey! Did you get the chance to review my work?",
            "timestamp": "02/12/21",
            "read": true,
        },
    },
    {
        "chatRoomId": 6,
        "member": {
            "name": "Johnny6",
            "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
        },
        "message": {
            "content": "Hey! Did you get the chance to review my work?",
            "timestamp": "02/12/21",
            "read": true,
        },
    }
];

const chatRooms = [
    {
        "chatRoomId": 1,
        "members": [
            {
                "name": "Johnny1",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
            {
                "name": "Johnny",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
        ],
        "messages": [
            {
                "sender": "Johnny6",
                "timstamp": "14/3/2021",
                "message": "Hey Johnny, how are you?"
            },
            {
                "sender": "Johnny",
                "timstamp": "14/3/2021",
                "message": "hi Johnny6, i'm good thanks :)"
            },
        ]
    },
    {
        "chatRoomId": 2,
        "members": [
            {
                "name": "Johnny2",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
            {
                "name": "Johnny",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
        ],
        "messages": [
            {
                "sender": "Johnny3",
                "timstamp": "14/3/2021",
                "message": "Hey Johnny, how are you?"
            },
            {
                "sender": "Johnny",
                "timstamp": "14/3/2021",
                "message": "hi Johnny2, i'm good thanks :)"
            },
        ]
    },
    {
        "chatRoomId": 3,
        "members": [
            {
                "name": "Johnny3",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
            {
                "name": "Johnny",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
        ],
        "messages": [
            {
                "sender": "Johnny6",
                "timstamp": "14/3/2021",
                "message": "Hey Johnny, how are you?"
            },
            {
                "sender": "Johnny",
                "timstamp": "14/3/2021",
                "message": "hi Johnny3, i'm good thanks :)"
            },
        ]
    },
    {
        "chatRoomId": 4,
        "members": [
            {
                "name": "Johnny4",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
            {
                "name": "Johnny",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
        ],
        "messages": [
            {
                "sender": "Johnny6",
                "timstamp": "14/3/2021",
                "message": "Hey Johnny, how are you?"
            },
            {
                "sender": "Johnny",
                "timstamp": "14/3/2021",
                "message": "hi Johnny4, i'm good thanks :)"
            },
        ]
    },
    {
        "chatRoomId": 5,
        "members": [
            {
                "name": "Johnny5",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
            {
                "name": "Johnny",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
        ],
        "messages": [
            {
                "sender": "Johnny6",
                "timstamp": "14/3/2021",
                "message": "Hey Johnny, how are you?"
            },
            {
                "sender": "Johnny",
                "timstamp": "14/3/2021",
                "message": "hi Johnny5, i'm good thanks :)"
            },
        ]
    },
    {
        "chatRoomId": 6,
        "members": [
            {
                "name": "Johnny6",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
            {
                "name": "Johnny1",
                "profile_pic": `${process.env.PUBLIC_URL}/assets/images/profile_page.png`
            },
        ],
        "messages": [
            {
                "sender": "Johnny6",
                "timstamp": "14/3/2021",
                "message": "Hey Johnny, how are you?"
            },
            {
                "sender": "Johnny",
                "timstamp": "14/3/2021",
                "message": "hi Johnny6, i'm good thanks :)"
            },
        ]
    }
]

export { tasks, status, members, roles, messagesAndMembers, chatRooms };