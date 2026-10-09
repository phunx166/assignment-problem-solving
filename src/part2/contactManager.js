class TrieNode {
  constructor() {
    this.children = new Map();
    this.contactIds = new Set();
  }
}

export class ContactManager {
  constructor() {
    this.contacts = new Map();
    this.root = new TrieNode();
  }

  _insertNameToTrie(name, id) {
    let curr = this.root;
    const clean = name.toLowerCase();
    for (const ch of clean) {
      if (!curr.children.has(ch)) {
        curr.children.set(ch, new TrieNode());
      }
      curr = curr.children.get(ch);
      curr.contactIds.add(id);
    }
  }

  addContact(contact) {
    const { id, name, phone } = contact;
    if (!id || !name || !phone) throw new Error("Thông tin liên hệ không đầy đủ");
    this.contacts.set(id, { id, name, phone });
    this._insertNameToTrie(name, id);
  }

  searchByNamePrefix(prefix) {
    let curr = this.root;
    const clean = prefix.toLowerCase();
    for (const ch of clean) {
      if (!curr.children.has(ch)) return [];
      curr = curr.children.get(ch);
    }
    return Array.from(curr.contactIds).map(id => this.contacts.get(id));
  }

  deleteContact(id) {
    return this.contacts.delete(id);
  }
}