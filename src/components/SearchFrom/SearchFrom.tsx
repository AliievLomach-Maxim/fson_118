interface Props {
  onSearch: (searchValue: string) => void;
  disabled: boolean;
}
const SearchFrom = ({ onSearch, disabled }: Props) => {
  const handleSubmit = (formData: FormData) => {
    const searchValue = formData.get("search") as string;
    onSearch(searchValue);
  };
  return (
    <form action={handleSubmit}>
      <input type="text" name="search" />
      <button type="submit" disabled={disabled}>
        Search
      </button>
    </form>
  );
};

export default SearchFrom;
