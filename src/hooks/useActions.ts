import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../state/index";

function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreator, dispatch);
}

export default useActions;


