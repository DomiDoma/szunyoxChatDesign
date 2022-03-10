import Tag from "@components/Chat/Tag";

interface Props {
  name: string;
  age: number;
  bio: string;
  tags: Tag[];
}
type Tag = string;

const ChatPartnerInfo = ({ name, age, bio, tags }: Props) => {
  return (
    <div className="user-info card">
      <div className="user-header">
        <h2 id="name">{name}</h2>
        <h2 id="age">{age}</h2>
      </div>
      <div className="bio">{bio}</div>
      <div className="tags">
        {/* temp key due to fake data */}
        {tags.map((tag, idx) => (
          <Tag content={tag} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ChatPartnerInfo;
