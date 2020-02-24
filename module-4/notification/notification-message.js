class NotificationMessage {
  static activeNotification = [];
  static counter = 0;
  static stackLimit = 5;

  constructor (message, {
    duration = 20000,
    type = 'success',
  } = {}) {

    if (NotificationMessageManager.activeNotification.length > NotificationMessage.stackLimit -1) {
      NotificationMessageManager.activeNotification.shift().remove();
    }

    this.message = message;
    this.type = type;
    this.duration = duration;

    this.render();
    return this;
  }

  render () {
    const counter = NotificationMessage.counter++;
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
    NotificationMessage.activeNotification.push(this.$element);
    this.serialNumber = NotificationMessage.activeNotification.length;
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
    delete NotificationMessage.activeNotification[this.serialNumber];
    NotificationMessage.counter--;
  }

  destroy () {
    this.remove();
    NotificationMessage.activeNotification = null;
    NotificationMessage.counter = 0;
  }
}
