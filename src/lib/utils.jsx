export const formatUSD = (value) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export const LABELS = {
  ledger_balance: "Ledger Balance",
  total_payout: "Total Payout",
  total_revenue: "Total Revenue",
  pending_payout: "Pending Payout",
};

export const ORDER = [
  "ledger_balance",
  "total_payout",
  "total_revenue",
  "pending_payout",
];

export const transactionTypeOptions = [
  "withdrawal",
  "deposit",
];

export const transactionStatusOptions = [
  "Successful",
  "Failed",
  "Pending",
];

export const formatPeriodText = (period) => {
  if (!period) return "";

  let formatted = period.charAt(0).toLowerCase() + period.slice(1);

  if (period.startsWith("L")) {
    formatted = "the " + formatted;
  }

  return formatted;
};