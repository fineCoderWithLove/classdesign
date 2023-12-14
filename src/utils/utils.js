// 清空一个对象
function clearPersonProperties(person) {
    for (let prop in person) {
      if (person.hasOwnProperty(prop)) {
        person[prop] = '';
      }
    }
  }