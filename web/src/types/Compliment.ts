import Tag from "./Tag";
import User from "./User";

type Compliment = {
  id: number;
  userReceiver: User;
  userSender: User;
  message: string;
  tag: Tag;
  elapsedTime: string
};

export default Compliment
