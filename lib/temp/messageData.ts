const msgData = [
  {
    content: "Lorem Ipsum is known pri",
    isSentByUser: false,
    id: Math.random() * 100 * Math.random() * 50 - 23,
    time: new Date("2015-05-05")
  },
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pri",
    isSentByUser: true,
    id: Math.random() * 100 * Math.random() * 50 - 23,
    time: new Date("2016-05-05")
  },
  {
    content:
      "Lorem Ipsum is simmmy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pri",
    isSentByUser: false,
    id: Math.random() * 100 * Math.random() * 50 - 23,
    time: new Date("2017-05-05")
  },
];

const UserData = {
  name: "Floppa",
  age: 420,
  bio: "Niggers",
  tags: ["tag1", "tag2", "tag3"],
};

const savedChatCardData = new Array(20).fill(UserData);

export { msgData, UserData, savedChatCardData };
