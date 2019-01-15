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
  getId(id) {
    return this.id;
  }
  getTo(to) {
    return this.to;
  }
  getEvent(event) {
    return this.event;
  }
}

