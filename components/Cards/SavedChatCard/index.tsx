interface Props {
  name: string;
}
/* @TODO: next/image for pfp render from db */
const SavedChatCard = ({ name }: Props) => {
  return (
    <div className="profile card">
      <img
        src="https://media.karousell.com/media/photos/products/2022/2/8/big_floppa_1644303126_391dfcc8_progressive.jpg"
        alt=""
      />
      <p>{name}</p>
    </div>
  );
};

export default SavedChatCard;
