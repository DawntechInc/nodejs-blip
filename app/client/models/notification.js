module.exports = class Notification {
  constructor(id, to, event) {
    this.id = id;
    this.to = to;
    this.event = event;
  }
  setId(id) {
    this.id = id;
  }
  setTo(to) {
    this.to = to;
  }
  setEvent(event) {
    this.event = event;
  }
  getId() {
    return this.id;
  }
  getTo() {
    return this.to;
  }
  getEvent() {
    return this.event;
  }
}
