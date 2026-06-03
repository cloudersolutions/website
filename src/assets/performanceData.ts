export const data = {
  prev: {
    year: new Date().getFullYear() - 1,
    budgetMwh: '1,300 MWh',
    adjustedMwh: '1,215 MWh',
    adjustedMwhDesc: 'Weather adjusted target is 85 MWh (6.5%) below original budget',
    forecastTitle: 'Actual',
    forecastTitleSub: null,
    actualMwh: '1,756 MWh',
    actualMwhDesc:
      '<span class="text-rose-600 dark:text-rose-400">541 MWh (44.5%)</span> above adjusted target',
    noiImpact: '-€54,100',
    valuePot: '€901,667',
    valuePotDesc: '',
    actual: [
      0, 12.13333333, 24.16666667, 36.2, 48.23333333, 60.26666667, 72.3, 84.33333333, 96.36666667,
      108.4, 120.4333333, 132.4666666666, 144.5
    ],
    estimate: Array(13).fill(null)
  },
  curr: {
    year: new Date().getFullYear(),
    budgetMwh: '1,300 MWh',
    adjustedMwh: '1,290 MWh',
    adjustedMwhDesc:
      'Weather adjusted target is 10 MWh (0.8%) below budget due to lower heating need',
    forecastTitle: 'Forecast',
    forecastTitleSub: '(Year end)',
    actualMwh: '1,275 MWh',
    actualMwhDesc:
      '<span class="text-blue-600 dark:text-blue-400">15 MWh (1.2%)</span> below adjusted target',
    noiImpact: '+€1,500',
    valuePot: '€0',
    valuePotDesc: 'Energy targets have been exceeded',
    actual: [0, 10.6, 20.6, 28.6, 36.4, 44.2],
    estimate: [null, null, null, null, null, 44.2, 52.0, 59.8, 67.6, 75.4, 83.2, 91.0, 98.8]
  }
};
