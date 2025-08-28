import { useState } from "react";
import Tag from "../Tag/Tag";
import css from "./TagManager.module.css";

interface TagManagerProps {
  tags: string[];
}

const TagManager = ({ tags }: TagManagerProps) => {
  const [tagsState, setTagsState] = useState(tags);

  const removeTag = (name: string) => {
    // setTagsState([]);
    // const filtered = tagsState.filter((tag) => tag !== name);
    setTagsState((prevState) => {
      return prevState.filter((tag) => tag !== name);
    });
  };

  return (
    <div className={css.tagList}>
      {tagsState.map((tag) => (
        <Tag name={tag} onRemove={removeTag} />
      ))}
    </div>
  );
};

export default TagManager;
