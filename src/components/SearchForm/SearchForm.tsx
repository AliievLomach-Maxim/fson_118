interface Props {
  onSearch: (searchValue: string) => void;
}
const SearchForm = ({ onSearch }: Props) => {
  const handleSearch = (formData: FormData) => {
    const searchValue = formData.get("search") as string;
    onSearch(searchValue);
  };
  return (
    <form action={handleSearch}>
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
