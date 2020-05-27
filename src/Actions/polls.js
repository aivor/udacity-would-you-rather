export const IS_ANSWERED = "IS_ANSWERED";

export function isAnswered(isAnswered) {
  return {
    type: IS_ANSWERED,
    isAnswered: isAnswered,
  };
}
