import { useRouter } from "next/router";

interface Props {
  name: string;
  lastMessage: string;
  newChatMessage?: boolean;
}

/* id of chatFriend to load the image @TODO: Backend consultation */
/* possible reword depending on how the data comes from the db */
const ActiveChatCard = ({
  name,
  lastMessage,
  newChatMessage = false,
}: Props) => {
  const { push } = useRouter();
  return (
    <div
      onClick={() => push(`/chat/${name}`)}
      className={`${newChatMessage && "new"} chat card`}
    >
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FPE8Wf5GkzEE%2Fhqdefault.jpg&f=1&nofb=1"
        alt=""
      />
      <div className="column">
        <h4 id="name">{name}</h4>
        <p id="last-sent">{lastMessage}</p>
      </div>
    </div>
  );
};

export default ActiveChatCard;
