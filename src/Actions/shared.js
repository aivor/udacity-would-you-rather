import { getInitialData } from "../Utils/api";
import { receiveUsers } from "../Actions/users";
import { receiveQuestions } from "../Actions/questions";

export default function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
