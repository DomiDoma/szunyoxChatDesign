interface Props {
  content: string;
}

const Tag = ({ content }: Props) => {
  return (
    <a href="" className="tag">
      {content}
    </a>
  );
};

export default Tag;
