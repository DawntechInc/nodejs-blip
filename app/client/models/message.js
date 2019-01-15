module.exports = class Message {
  constructor(type, content, to) {
    this.type = type;
    this.content = content;
    this.to = to;
  }
  setType(type) {
    this.type = type;
  }
  setContent(content) {
    this.content = content;
  }
  setTo(to) {
    this.to = to;
  }
  getType() {
    return this.type;
  }
  getContent() {
    return this.content;
  }
  getTo() {
    return this.to;
  }
}
