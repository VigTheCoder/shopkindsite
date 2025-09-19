export function calculateRoundedDonation(price, percentage) {
  const donation = (price * percentage) / 100;
  const lower = Math.floor(donation);
  const upper = Math.ceil(donation);

  const diffLower = Math.abs(donation - lower);
  const diffUpper = Math.abs(upper - donation);

  return diffLower < diffUpper ? lower : upper;
}
