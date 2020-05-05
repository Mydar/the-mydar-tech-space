const initialState = {
    user: {
        "id": 1,
        "email": "",
        "password": "",
        "firstname": "",
        "lastname": "",
        "profilePhotoUrl": "",
        "Designation": "",
        "Review": "",
        "courses": [],
        "favorites": []
      },
      courses: [
        {
          "id": 1,
          "title": "Introduction to Web design",
          "photoUrl": "https://onlineabiolian.com.ng/wp-content/uploads/2019/12/web-design-course-1-400x320.jpg",
          "videoUrl": "https://res.cloudinary.com/mydar/video/upload/v1588008851/mydartechspace/Git_GitHub_Tutorial_for_Beginners_6_-_Making_Commits_p7gl3h.mp4",
          "description": "This Video Presentation is an introduction to web design with fundamentals and basics for newbies and beginners. See description for Topics covered in the video with Time Stamps to jump sections of your interest.\n Topics as Follows:\nWhat is a Website?\nHow to build a Web Page? \nParts of Web Page.\nWeb design Vs Web development\nFive Key Rules of high value web site development.",
          "Tutor": 1,
          "Hours": 5,
          "Track": "FrontEnd Development",
          "Rating": "5 stars"
        },
        {
          "id": 2,
          "title": "Introduction to Python",
          "photoUrl": "https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg",
          "videoUrl": "https://res.cloudinary.com/mydar/video/upload/v1588008851/mydartechspace/Git_GitHub_Tutorial_for_Beginners_6_-_Making_Commits_p7gl3h.mp4",
          "description": "This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time!\nContents\nIntroduction\nInstalling Python & PyCharm\nSetup & Hello World\nDrawing a Shape\nVariables & Data Types\nWorking With Strings\nWorking With Numbers\nGetting Input From Users\nBuilding a Basic Calculator\nMad Libs Game\nLists\nList Functions\nTuples\nFunctions\nReturn Statement\nIf Statements\nIf Statements & Comparisons\nBuilding a better Calculator\nDictionaries\nWhile Loop\nBuilding a Guessing Game\nFor Loops\nExponent Function\n2D Lists & Nested Loops\nBuilding a Translator\nComments\nTry / Except\nReading Files\nWriting to Files\nModules & Pip\nClasses & Objects\nBuilding a Multiple Choice Quiz\nObject Functions\nInheritance\nPython Interpreter",
          "Tutor": 2,
          "Hours": 3,
          "Track": "BackEnd Development",
          "Rating": "4 stars"
        },
        {
          "id": 3,
          "title": "Backend with GO Language",
          "photoUrl": "https://cdn-images-1.medium.com/max/1600/0*JJsCKXHlJRi1pL4t",
          "videoUrl": "https://res.cloudinary.com/mydar/video/upload/v1588008851/mydartechspace/Git_GitHub_Tutorial_for_Beginners_6_-_Making_Commits_p7gl3h.mp4",
          "description": "In this crash course we will get started with the Go programming language. There is no prior knowledge of Go required. We will setup a workspace and look at fundamentals like variables, slices, conditionals, maps, structs and more\nWorkspace. \nHello World. \nVariable & Types. \nPackages. \nFunctions. \nArrays / Slices. \nConditionals. \nLoops. \nMaps. \nRange. \nPointers. \nClosures. \nStructs. \nInterfaces. \nWeb.",
          "Tutor": 3,
          "Hours": 3.5,
          "Track": "BackEnd Development",
          "Rating": "4 stars"
        },
        {
          "id": 4,
          "title": "Introduction to Building Android Apps",
          "photoUrl": "https://sites.google.com/site/mobileappliction/_/rsrc/1533333014662/home/app.png",
          "videoUrl": "https://res.cloudinary.com/mydar/video/upload/v1588008851/mydartechspace/Git_GitHub_Tutorial_for_Beginners_6_-_Making_Commits_p7gl3h.mp4",
          "description": "Android development can be a great way to turn your idea into reality or start a promising career as an app developer... and getting started is probably easier than you think. \nThese days Android Development is done with a tool called Android Studio. Android Studio is kind of like the Microsoft Word of writing Android apps; it helps organize our projects and gives us a user friendly way to create what we’re looking for. \nIn this video we’ll walk through installing Android Studio and then make an app. Don’t worry if you don’t have any experience with Android or even programming in general; as long as you follow along we’ll all end up at the same place.  \nLearn from over 1,000 videos created by our expert teachers on web design, coding, business, and much more. Treehouse teaches the in-demand technology skills you need to land your dream job.",
          "Tutor": 4,
          "Hours": 4.5,
          "Track": "Mobile Development",
          "Rating": "5 stars"
        },
        {
          "id": 5,
          "title": "Fundamentals of Containers, Kubernetes, and Red Hat OpenShift",
          "photoUrl": "https://i1.wp.com/itsfoss.com/wp-content/uploads/2019/02/DevOps-for-Network-Engineers.png?fit=800%2C450&ssl=1",
          "videoUrl": "https://res.cloudinary.com/mydar/video/upload/v1588008851/mydartechspace/Git_GitHub_Tutorial_for_Beginners_6_-_Making_Commits_p7gl3h.mp4",
          "description": "Introduction to Containers, Kubernetes, and Red Hat OpenShift (DO180) helps you build core knowledge in managing containers through hands-on experience with containers, Kubernetes, and the Red Hat® OpenShift® Container Platform. These skills are needed for multiple roles, including developers, administrators, and site reliability engineers.",
          "Tutor": 5,
          "Hours": 6,
          "Track": "Devops Engineering",
          "Rating": "3 stars"
        }
      ],
      coursepage: {
        "id": 0,
        "title": "",
        "photoUrl": "",
        "videoUrl": "",
        "description": "",
        "Tutor": 0,
        "Hours": 0,
        "Track": "",
        "Rating": ""
      },
    isLoggedIn: false
}

function Reducer(state = initialState, action) {
    switch (action.type) {
        case "LOG_USER_IN":
            return {user: action.data, isLoggedIn: true}
        case "UPDATE_COURSES":
          return {...state, courses: action.data}
        case 'FETCH_COURSE_PAGE':
          return {...state, coursepage: action.data}
        case "UPDATE_USER_INFO":
          return {...state, user: action.data}
        default:
            return initialState
    }
}

export default Reducer