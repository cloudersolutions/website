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

export function formatNumber(value: number, round?: boolean): string {
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: round ? 0 : 2
  }).format(value);
}
