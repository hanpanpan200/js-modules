var myModule = {
  name: 'Grace',
  age: 18,
  sayName: function() {
    alert(this.name)
  },
  setName: function(newName) {
    this.name = newName
  },
}
