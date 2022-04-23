let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, its my first post', likesCount: 12},
      {id: 2, message: 'second', likesCount: 1},
      {id: 3, message: 'third', likesCount: 9},
      {id: 4, message: '4', likesCount: 2},
      {id: 5, message: '5'},
      {id: 6, message: 'sixth'}
    ]
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dmitriy'},
      {id: 2, name: 'Valentin'},
      {id: 3, name: 'Anton'},
      {id: 4, name: 'Viktor'},
      {id: 5, name: 'Andrey'},
      {id: 6, name: 'German'}
    ],
      messages: [
        {id: 1, text: 'hello'},
        {id: 2, text: 'hi'},
        {id: 3, text: 'privet'},
        {id: 4, text: 'lol'},
        {id: 5, text: 'aloha'},
        {id: 6, text: 'yo'}
      ]
  }
}

export default state;