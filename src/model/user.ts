class User {
  public id: number;
  public email: string;
  public firstName: string;
  public lastName: string;

  constructor(userId, email, firstName?, lastName?) {
    this.id = userId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export default User;
