import MockAdapter from "axios-mock-adapter";
import { UserModel } from "../models/UserModel";
import {
  LOGIN_URL,
  GET_USER_BY_ACCESSTOKEN_URL,
  REGISTER_URL,
  REQUEST_PASSWORD_URL,
} from "../redux/AuthCRUD";
import { UsersTableMock } from "./usersTableMock";

export function mockAuth(mock: MockAdapter): void {
  mock.onPost(LOGIN_URL).reply(({ data }) => {
    const { account, provider } = JSON.parse(data);

    if (account && provider) {
      const user = UsersTableMock.table.find(
        (x) =>
          x.account.toLowerCase() === account.toLowerCase() &&
          x.provider === provider
      );

      if (user) {
        const { auth } = user;

        return [200, { ...auth, provider: undefined }];
      }
    }

    return [400];
  });

  mock.onPost(REGISTER_URL).reply(({ data }) => {
    const { account, firstname, lastname, provider } = JSON.parse(data);

    if (account && firstname && lastname && provider) {
      const user: UserModel = {
        id: generateUserId(),
        account,
        provider,
        auth: {
          accessToken: "access-token-" + Math.random(),
          refreshToken: "access-token-" + Math.random(),
        },
        avatar: {
          type: 1,
        },
      };

      UsersTableMock.table.push(user);
      const { auth } = user;

      return [200, { ...auth, provider: undefined }];
    }

    return [400];
  });

  mock.onPost(REQUEST_PASSWORD_URL).reply(({ data }) => {
    const { account } = JSON.parse(data);

    if (account) {
      const user = UsersTableMock.table.find(
        (x) => x.account.toLowerCase() === account.toLowerCase()
      );
      let result = false;
      if (user) {
        user.provider = undefined;
        result = true;

        return [200, { result, provider: undefined }];
      }
    }

    return [400];
  });

  mock
    .onGet(GET_USER_BY_ACCESSTOKEN_URL)
    .reply(({ headers: { Authorization } }) => {
      const accessToken =
        Authorization &&
        Authorization.startsWith("Bearer ") &&
        Authorization.slice("Bearer ".length);

      if (accessToken) {
        const user = UsersTableMock.table.find(
          (x) => x.auth?.accessToken === accessToken
        );

        if (user) {
          return [200, { ...user, provider: undefined }];
        }
      }

      return [401];
    });

  function generateUserId(): number {
    const ids = UsersTableMock.table.map((el) => el.id);
    const maxId = Math.max(...ids);

    return maxId + 1;
  }
}
