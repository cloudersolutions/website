const locale = 'en';

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

export function formatNumber(value: number, precision?: number): string {
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: precision ?? 0,
    maximumFractionDigits: precision ?? 2
  }).format(value);
}

export function formatPercent(value: number): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value);
}
