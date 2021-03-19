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
]

export {tasks, status};