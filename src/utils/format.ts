export function formatPrice(
  amount: number,
  monthly: string = '',
  locale: string = 'en-IE'
): string {
  const number = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
  return [number, monthly].filter(Boolean).join('\u00a0/\u00a0');
}
