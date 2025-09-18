import { useState } from "react";

type useToggleResponse = [isOpen: boolean, open: () => void, close: () => void];

const useToggle = (): useToggleResponse => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return [isOpen, open, close];
};
export default useToggle;
