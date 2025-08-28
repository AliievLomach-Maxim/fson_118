import css from "./Tag.module.css";

interface TagProps {
  name: string;
  onRemove: (name: string) => void;
}

const Tag = ({ name, onRemove }: TagProps) => {
  const handleRemove = () => {
    onRemove(name);
  };
  return (
    <div className={css.tag}>
      <p>{name}</p>
      <button onClick={handleRemove}>x</button>
    </div>
  );
};

export default Tag;
