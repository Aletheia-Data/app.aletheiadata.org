import { UserModel } from "../models/UserModel";

export class UsersTableMock {
  public static table: Array<UserModel> = [
    {
      id: 1,
      account: "none",
      provider: "metamask",
      auth: {
        accessToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
        refreshToken: "access-token-f8c137a2c98743f48b643e71161d90aa",
      },
      avatar: {
        type: 1,
      },
    },
  ];
}
