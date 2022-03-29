import { UserModel } from "../models/UserModel";

export class UsersTableMock {
  public static table: Array<UserModel> = [
    {
      id: 1,
      account: "none",
      provider: "metamask",
      auth: {
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
      },
      avatar: {
        type: 1,
      },
    },
  ];
}
