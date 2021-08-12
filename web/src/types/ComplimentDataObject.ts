import Tag from './Tag';
import User from './User';

type ComplimentDataObject = {
  id: string;
  userReceiver: User;
  userSender: User;
  message: string;
  tag: Tag;
  created_at: number;
};

export default ComplimentDataObject;
