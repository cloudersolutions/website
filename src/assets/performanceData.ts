import { formatCurrency, formatPercent, formatValue } from '@utils/format';

function getValues(budgetMwh: number, adjustedMwh: number, yearEndMwh: number) {
  const adjustedDiffMwh = budgetMwh - adjustedMwh;
  const adjustedDiffPercent = adjustedDiffMwh / budgetMwh;
  const yearEndGapMwh = yearEndMwh - adjustedMwh;
  const yearEndGapPercent = yearEndGapMwh / adjustedMwh;
  const noiImpact = yearEndGapMwh * 100;
  const valueGap = noiImpact / 0.05;
  return {
    budgetMwh: formatValue(budgetMwh, 'MWh', 0),
    adjustedMwh: formatValue(adjustedMwh, 'MWh', 0),
    adjustedMwhDesc: `Weather adjusted target is ${formatValue(Math.abs(adjustedDiffMwh), 'MWh', 0)} (${formatPercent(Math.abs(adjustedDiffPercent))}) ${adjustedMwh > budgetMwh ? 'above' : 'below'} original budget`,
    yearEndMwh: formatValue(yearEndMwh, 'MWh', 0),
    yearEndMwhDesc:
      yearEndMwh > adjustedMwh
        ? `<span class="text-rose-600 dark:text-rose-400">${formatValue(Math.abs(yearEndGapMwh), 'MWh', 0)} (${formatPercent(Math.abs(yearEndGapPercent))})</span> above adjusted target`
        : `<span class="text-blue-600 dark:text-blue-400">${formatValue(Math.abs(yearEndGapMwh), 'MWh', 0)} (${formatPercent(Math.abs(yearEndGapPercent))})</span> below adjusted target`,
    noiImpact: formatCurrency(noiImpact * -1, {
      roundingMode: 'trunc',
      roundingIncrement: 100,
      signDisplay: 'always'
    }),
    valueGap: formatCurrency(Math.max(valueGap, 0), {
      roundingMode: 'trunc',
      roundingIncrement: 1000
    })
  };
}

export const data = {
  prev: {
    ...getValues(1300, 1320, 1745),
    year: new Date().getFullYear() - 1,
    forecastTitle: 'Actual',
    forecastTitleSub: null,
    valueGapDesc: null,
    actual: Array.from({ length: 13 }, (_, i) => (i / 12) * (100 - ((1320 - 1745) / 1320) * 100)),
    estimate: Array(13).fill(null)
  },
  curr: {
    ...getValues(1300, 1290, 1275),
    year: new Date().getFullYear(),
    forecastTitle: 'Forecast',
    forecastTitleSub: '(Year end)',
    valueGapDesc: 'Energy targets have been exceeded',
    actual: [0, 10.6, 20.6, 28.6, 36.4, 44.2],
    estimate: [null, null, null, null, null, 44.2, 52.0, 59.8, 67.6, 75.4, 83.2, 91.0, 98.8]
  }
};
