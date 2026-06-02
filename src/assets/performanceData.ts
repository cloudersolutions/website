export const data = {
  prev: {
    year: new Date().getFullYear() - 1,
    budgetMwh: '1,300 MWh',
    adjustedMwh: '1,215 MWh',
    adjustedMwhDesc: '6.5% below budget due to lower heating need',
    forecastTitle: 'Actual',
    actualMwh: '1,756 MWh',
    actualMwhDesc: '44.5% above adjusted target',
    valuePotTitle: 'Value potential',
    valuePot: '€901,667',
    valuePotDesc: 'NOI leakage €54,100',
    kwhPsm: '130 kWh/m²',
    kgCo2Psm: '23kg CO₂e/m²',
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
    adjustedMwhDesc: '0.8% below budget due to lower heating need',
    forecastTitle: 'Forecast, year end',
    actualMwh: '1,275 MWh',
    actualMwhDesc: '1.2% below adjusted target',
    valuePotTitle: 'Value created',
    valuePot: '€25,000',
    valuePotDesc: 'NOI increased by €1,500',
    kwhPsm: '95 kWh/m²',
    kgCo2Psm: '17kg CO₂e/m²',
    actual: [0, 10.6, 20.6, 28.6, 36.4, 44.2],
    estimate: [null, null, null, null, null, 44.2, 52.0, 59.8, 67.6, 75.4, 83.2, 91.0, 98.8]
  }
};
