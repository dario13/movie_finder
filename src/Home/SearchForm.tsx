import React from "react";

type SearchFormProps = {
  handleSubmit: (movieEntered: string) => void;
};

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const [inputMovie, setInputMovie] = React.useState<string | null>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMovie(event.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputMovie !== undefined) props.handleSubmit(inputMovie!);
        }}
      >
        <div className="field has-addons">
          <div className="control">
            <input
              className="input is-large"
              onChange={handleChange}
              type="text"
              placeholder="Find a movie"
            />
          </div>
          <div className="control">
            <button className="button is-info is-large">Search</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
