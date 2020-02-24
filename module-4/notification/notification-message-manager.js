class NotificationMessageManager {
  static activeNotification = [];
  static counter = 0;
  static stackLimit = 5;

  constructor (message, {
    duration = 20000,
    type = 'success',
  } = {}) {

    if (NotificationMessageManager.activeNotification.length > (NotificationMessageManager.stackLimit - 1)) {
      NotificationMessageManager.activeNotification.shift().remove();
    }

    this.message = message;
    this.type = type;
    this.duration = duration;

    this.render();
    return this;
  }

  render () {
    let counter = NotificationMessageManager.counter++;

    const $element = document.createElement('div');
    const duration = (this.duration / 1000) + 's';

    $element.innerHTML = `
      <div class="notification ${this.type}" style="--value:${duration}">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${counter} ${this.message}
          </div>
        </div>
      </div>
    `;

    this.$element = $element.firstElementChild;
    NotificationMessageManager.activeNotification.push(this.$element);
  }

  show (parent) {
    const root = parent || document.body;

    root.append(this.$element);

    setTimeout(() => {
      this.remove();
    }, this.duration);

    return this.$element;
  }

  remove () {
    this.$element.remove();
  }

  destroy () {
    this.remove();
    NotificationMessageManager.activeNotification = null;
    NotificationMessageManager.counter = 0;
  }
}
