export function calculateVotePercentage(
  votes: number,
  totalVoters: number
): number {
  if (totalVoters === 0) {
    throw new Error("Total voters cannot be zero");
  }
  let percentage = (votes / totalVoters) * 100;
  return Math.round(percentage);
}
