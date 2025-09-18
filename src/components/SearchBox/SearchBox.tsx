import { DebouncedState } from "use-debounce";

interface Props {
  onSearch: DebouncedState<(val: string) => void>;
  value: string;
}
const SearchBox = ({ onSearch, value }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return <input type="text" defaultValue={value} onChange={handleChange} />;
};

export default SearchBox;
