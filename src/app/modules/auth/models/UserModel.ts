import { UserAvatar } from "./UserAvatar";
import { AuthModel } from "./AuthModel";

export interface UserModel {
  id: any;
  provider: string | undefined;
  account: string;
  avatar?: UserAvatar;
  auth?: AuthModel;
}
