export const CHANGE_LOGGED_IN = "CHANGE_LOGGED_IN";

export function changeLoggedIn(newValue) {
  return {
    type: CHANGE_LOGGED_IN,
    newValue: newValue,
  };
}
