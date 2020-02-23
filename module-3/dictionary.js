let dictionary = Object.create(null);

dictionary.toString = function() {
  return Object.keys(this).join();
};

Object.defineProperty(dictionary, "toString", {
  writable: false,
  configurable: false,
  enumerable: false
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  // alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
// alert(dictionary.toString());
