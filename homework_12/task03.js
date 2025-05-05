// Задание 3 дополнительное!
// Попробуйте сравнить метод grow во внешнем от объекта контексте
// и вызвать его с другими растениями при помощи bind или apply.

const oak = {
  height: 140,
  year: 2025,
  grow() {
    this.height += 30;
    this.year++;
    console.log(`height = ${this.height}, year = ${this.year}`); // to check
  },
};

const { grow } = oak;

const rosa = {
  height: 5,
  year: 2025,
};

const growUpRose = grow.bind(rosa);
growUpRose();

grow.apply({ height: 10, year: 2024 });
