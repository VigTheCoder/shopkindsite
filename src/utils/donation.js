// src/utils/donation.js
export function calculateRoundedDonation(price, percentage) {
  const donation = (price * percentage) / 100;

  if (donation < 1) {
    return 1; // minimum donation of $1
  }

  // Round to nearest integer
  const lower = Math.floor(donation);
  const upper = Math.ceil(donation);

  const diffLower = Math.abs(donation - lower);
  const diffUpper = Math.abs(upper - donation);

  return diffLower < diffUpper ? lower : upper;
}
