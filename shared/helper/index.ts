export const formatCurrency = (
  value: number,
  type: "long" | "short" = "long",
  fixed: number = 2,
) => {
  const isMinus = value < 0;
  const formatValue = Math.abs(value);

  if (type === "short") {
    if (formatValue >= 1_000_000_000) {
      return (
        (isMinus ? "-" : "") +
        (formatValue / 1_000_000_000).toFixed(fixed).replace(/\.0$/, "") +
        "B"
      );
    }

    if (formatValue >= 1_000_000) {
      return (
        (isMinus ? "-" : "") +
        (formatValue / 1_000_000).toFixed(fixed).replace(/\.0$/, "") +
        "M"
      );
    }

    if (formatValue >= 1_000) {
      return (
        (isMinus ? "-" : "") +
        (formatValue / 1_000).toFixed(fixed).replace(/\.0$/, "") +
        "K"
      );
    }

    return (isMinus ? "-" : "") + formatValue.toString();
  }

  const result = formatValue.toLocaleString("de-DE", {
    minimumFractionDigits: fixed,
    maximumFractionDigits: fixed,
  });

  return isMinus ? `-${result}` : `${result}`;
};

export const formatPercent = (value: number, fixed: number = 2) => {
  const isMinus = value < 0;
  const num = Math.abs(value);

  return (isMinus ? "-" : "") + num.toFixed(fixed).replace(/\.0$/, "") + "%";
};
