// @flow

class User implements DataModel {
  findById = (id: string) => ({
    id,
    name: "John Doe",
  });
}

export default new User();
