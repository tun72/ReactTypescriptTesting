import { ActionType } from "../action_types";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { ...state, loading: true };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { data: [], loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
