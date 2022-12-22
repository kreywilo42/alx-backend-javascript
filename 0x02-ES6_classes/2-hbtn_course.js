export default class HolbertonCourse {
  /* eslint no-underscore-dangle: 0 */
  /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

  static _throw(error) {
    throw new TypeError(error);
  }

  constructor(name, length, students) {
    this._name = typeof name !== 'string' ? HolbertonCourse._throw('Name must be a string!') : name;
    this._length = typeof length !== 'number' ? (() => { throw new TypeError('Length must be a number!'); })() : length;
    this._students = Array.isArray(students) && students.every((i) => typeof i === 'string') ? students : HolbertonCourse._throw('Students must be an array of strings!');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    typeof value === 'string' ? this._name = value : HolbertonCourse._throw('Name must be a string!');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    typeof value === 'number' ? this._length = value : HolbertonCourse._throw('Length must be a number!');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    Array.isArray(value) && value.every((i) => typeof i === 'string') ? this._students = value : HolbertonCourse._throw('Students must be an array of strings!');
  }
}
