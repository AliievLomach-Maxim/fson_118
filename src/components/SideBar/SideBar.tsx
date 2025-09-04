import css from "./SideBar.module.css";
import { createPortal } from "react-dom";

interface Props {
  content: string;
  onClose: () => void;
}

const SideBar = ({ content, onClose }: Props) => {
  return createPortal(
    <div className={css.drop}>
      <div className={css.sidebar}>
        <div className={css.content}>
          <button onClick={onClose}>Close</button>
          <hr />
          {content}
        </div>
      </div>
    </div>,
    document.getElementById("sidebar-root") as HTMLDivElement
  );
};

export default SideBar;
