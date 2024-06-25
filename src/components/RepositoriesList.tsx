import { useState } from "react";
import useActions from "../hooks/useActions";

import { useTypedSelector } from "../hooks/useTypeSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );
  const { searchRepositories } = useActions();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>

      <div>
        {loading && <p>Loading...</p>}
        {!loading &&
          !error &&
          data.map((name, index) => <div key={index}>{name}</div>)}
        {!loading && error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default RepositoriesList;
