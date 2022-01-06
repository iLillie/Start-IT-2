const model = {
  // 1: app
  app: {
    page: "home",
  },

  // 2: inputs
  inputs: {
    home: {
      textbox: ['', '']
    }
  },

  // 3: shared data
  tasks: [
    {
      id: 0,
      authorId: 0,
      content: "Buy groceries",
      isCompleted: false,
      creationDate: new Date(),
      completionDate: null,
    },
    {
      id: 1,
      authorId: 0,
      content: "Make dinner",
      isCompleted: false,
      creationDate: new Date(),
      completionDate: null,
    },
    {
      id: 2,
      authorId: 1,
      content: "Daily coding",
      isCompleted: false,
      creationDate: new Date(),
      completionDate: null,
    },
  ],
  users: [
    {
      id: 0,
      name: "Lillie",
    },
    {
      id: 1,
      name: "Terje",
    },
  ],
};
