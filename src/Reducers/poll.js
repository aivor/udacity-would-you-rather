import { IS_ANSWERED } from "../Actions/polls";

export default function poll(state = null, action) {
  switch (action.type) {
    case IS_ANSWERED:
      return action.isAnswered;
    default:
      return state;
  }
}
