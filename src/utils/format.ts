const locale = 'de';

export function formatPrice(amount: number, monthly: string = ''): string {
  const number = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
  return [number, monthly].filter(Boolean).join('\u00a0/\u00a0');
}

export function formatNumber(value: number, precision?: number): string {
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: precision ?? 0,
    maximumFractionDigits: precision ?? 2
  }).format(value);
}
