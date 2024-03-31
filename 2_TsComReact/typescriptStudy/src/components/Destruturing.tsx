type Props = {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];

  //8-Enum
  category: Category;
};

export enum Category {
  Js = "Javascript",
  Ts = "Typescript",
  P = "Python",
}

const Destruturing = ({
  title,
  content,
  commentsQty,
  tags,
  category,
}: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h2>Categoria: {category}</h2>
    </div>
  );
};

export default Destruturing;
