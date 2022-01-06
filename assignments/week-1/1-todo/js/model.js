const model = {
  // 1: App
  app: {
    page: "home",
  },

  // 2: Inputs
  inputs: {
      home: {
        currentUserId: '',
      }
  },

  // 3: Felles data
  users: [{id: 0, name: "Lillie"}, {id: 1, name: "Amy"}
  ],
  tasks: [
    {
      id: 0,
      userID: 0,
      description: "Handle middag",
      isCompleted: false,
      creationDate: new Date(),
      completionDate: null,
    },
    {
        id: 1,
        userID: 1,
        description: "Gå tur",
        isCompleted: false,
        creationDate: new Date(),
        completionDate: null,
      },
  ],
};
