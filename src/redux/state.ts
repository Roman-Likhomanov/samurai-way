let state = {
    profilePage: {
        posts: [
            {id: 1,message:'Hi, how are you?', likesCount:0},
            {id: 2,message:"It's my first post", likesCount:10},
        ]
    },
   dialogsPage: {
       dialogs: [
           {id: 1,name:'Dimych'},
           {id: 2,name:'Andrey'},
           {id: 3,name:'Sveta'},
           {id: 4,name:'Sasha'},
           {id: 5,name:'Victor'},
           {id: 6,name:'Batman'}
       ],
       messages: [
           {id: 1,message:'Hi'},
           {id: 2,message:'How are you?'},
           {id: 3,message:'Hello'},
           {id: 4,message:'One'},
           {id: 5,message:'two'},
       ],
   }
}

export default state;