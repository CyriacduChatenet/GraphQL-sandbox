const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jimmy Doe",
  },
];

const message = "Hello, world!";

const resolvers = {
  Query: {
    message: () => message,
    users: () => users,
    user: (parent, { id }) => users.find((user) => user.id == id),
  },
  Mutation: {
    createUser: (parent, { id, name }) => {
      let checkID = users.findIndex((user) => user.id == id);
      if (checkID == -1) {
        const newUser = { id, name };
        users.push(newUser);
        return newUser;
      } else {
        throw new Error("ID is already taken");
      }
    },
  },
};

export default resolvers;
