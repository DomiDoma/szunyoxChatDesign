interface Props {
  content: string;
  isSentByUser: boolean;
}

const Message = ({ content, isSentByUser }: Props) => {
  return <div className={`message ${isSentByUser ? "user" : ''}`}>{content}</div>;
};

export default Message;
