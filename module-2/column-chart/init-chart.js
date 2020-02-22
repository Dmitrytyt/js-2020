const data = {
  orders: [
    { value: 10 },
    { value: 20 },
    { value: 80 },
    { value: 100 },
    { value: 35 },
    { value: 25 },
  ],
  sales: [
    { value: 30 },
    { value: 40 },
    { value: 20 },
    { value: 80 },
    { value: 35 },
    { value: 15 }
  ],
  customers: [
    { value: 100 },
    { value: 90 },
    { value: 80 },
    { value: 35 },
    { value: 90 },
    { value: 25 },
  ],
};

for (let key in data) {
  let renderChart = new ColumnChart(data[key], {
    label: key,
    value: 344,
    link: '#'
  });

  document.getElementById(key).appendChild(renderChart);
}
