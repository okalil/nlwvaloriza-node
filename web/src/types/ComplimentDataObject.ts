type ComplimentDataObject = {
  id: string;
  userReceiver: { name: string };
  userSender: { name: string };
  message: string;
  tag: { name: string };
  created_at: number;
};

export default ComplimentDataObject;
