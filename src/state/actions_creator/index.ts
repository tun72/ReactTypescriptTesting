import { Dispatch } from "redux";
import { ActionType } from "../action_types";
import axios from "axios";
import { Action } from "../actions";

export function searchRepositories(term: string) {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SEARCH_REPOSITORIES });
    try {
      const request = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: { text: term },
        }
      );
      const data = request.data;

      const names = data.objects.map((result: any) => result.package.name);

      console.log(names);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
}
