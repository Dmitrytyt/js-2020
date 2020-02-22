class ColumnChart {
  constructor(data, options = {}) {
    this.data = data;
    this.options = options;

    return this.render();
  }

  getColumnBody() {
    return this.data
      .map(({ value }) => {
        return `<div data-tooltip="${value}%" style="--value: ${value}"></div>`;
      })
      .join('');
  }

  getLink() {
    const { link } = this.options;

    return link ? `<a class="column-chart__link" href="${link}">View all</a>` : '';
  }

  render() {
    this.$element = document.createElement('div');
    this.$element.className = 'column-chart';
    this.$element.innerHTML = `
      <div class="column-chart__header">
        <div class="column-chart__title">
          Total ${this.options.label}
          ${this.getLink()}
        </div>
        <div class="column-chart__container">
          <div class="column-chart__header">${this.options.value}</div>
          <div class="column-chart__chart">
            ${this.getColumnBody()}
          </div>
        </div>
      </div>
    `;

    return this.$element;
  }

  destroy() {
    this.$element.remove();
  }
}
