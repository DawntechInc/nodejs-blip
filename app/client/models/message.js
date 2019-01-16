module.exports = class Message {
  constructor(type, content, to, id) {
    this.type = type;
    this.content = content;
    this.to = to;
    this.id = id; // For notifications
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
  setId(id) {
    this.id = id;
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
  getId() {
    return this.id;
  }
}
