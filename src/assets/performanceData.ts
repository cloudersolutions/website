export const data = {
  prev: {
    budgetMwh: '1,300 MWh',
    adjustedMwh: '1,215 MWh',
    adjustedMwhDesc: '-6.5% below budget due to lower heating need',
    forecastTitle: 'Actual',
    actualMwh: '1,756 MWh',
    actualMwhDesc: 'Operational gap 44.5% above adjusted target',
    valuePotTitle: 'Value potential',
    valuePot: '€1,350,000',
    valuePotDesc: 'Consumption 541 MWh above adjusted target. NOI leakage €54,000.',
    kwhPsm: '130 kWh/m²',
    kgCo2Psm: '23kg CO₂e/m²',
    actual: [
      0, 12.13333333, 24.16666667, 36.2, 48.23333333, 60.26666667, 72.3, 84.33333333, 96.36666667,
      108.4, 120.4333333, 132.4666666666, 144.5
    ],
    estimate: Array(13).fill(null)
  },
  curr: {
    budgetMwh: '1,300 MWh',
    adjustedMwh: '1,290 MWh',
    adjustedMwhDesc: '-0.8% below budget due to lower heating need',
    forecastTitle: 'Forecast, year end',
    actualMwh: '1,289 MWh',
    actualMwhDesc: 'Operational gap is -0.8% below adjusted target.',
    valuePotTitle: 'Value created',
    valuePot: '€25,000',
    valuePotDesc: 'Consumption 1 MWh below adjusted target. NOI improved €1,000.',
    kwhPsm: '95 kWh/m²',
    kgCo2Psm: '17kg CO₂e/m²',
    actual: [0, 11.53333333, 22.86666667, 30.4999999999, 38.2333333333],
    estimate: [
      null,
      null,
      null,
      null,
      38.2333333333,
      45.7666666666,
      53.3999999999,
      61.1333333333,
      68.6666666666,
      76.2999999999,
      83.933333333,
      91.5666666666,
      99.2
    ]
  }
};
