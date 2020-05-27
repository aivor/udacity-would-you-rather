export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUSTION_TO_USER = "ADD_QUESTION_TO_USER";

export function addAnswerToUser(authedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authedUser,
    qid,
    answer,
  };
}
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
export function addQuestionToUser(id, author) {
  return {
    type: ADD_QUSTION_TO_USER,
    id,
    author,
  };
}
