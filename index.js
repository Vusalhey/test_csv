import _ from 'lodash';

export default function solution(content) {
  // BEGIN

  // перви шак
  const formatting = content.trim().split('\n').slice(0, -1);
  const result1 = formatting.map((el) => el.slice(0, -1).split(','));
  console.log(`Число пассажиров: ${result1.length}`);cd 


  //step2
  const findEmbar = result1.map((n) => n[12]);
  const sorted = findEmbar.sort();
  console.log(`Все наименования портов посадки: ${_.uniq(sorted)}`)

  //step3
  const malePassenger = result1.filter((q) => q[5] === 'male');
  const femalePassenger = result1.filter((q) => q[5] === 'female');

  const calcMale = Math.round((malePassenger.length/result1.length) * 100);
  const calcFemale = Math.round((femalePassenger.length/result1.length) * 100);

  console.log(`соотношение пассажиров мужчин и женщин: ${calcMale} к ${calcFemale}`);

  //step4
  const survived = result1.filter((q) => q[2] === '1');
  const calcSurv = Math.round((survived.length/result1.length) * 100);

  console.log(`процент выживших пассажиров: ${calcSurv}%`);

  step5 
  const namesPassengers = result1.map((n) => n.toString().split(',')[4]);
  const result5 = namesPassengers.map((qq) => qq[1] === 'A');
  console.log(`имена всех пассажиров, начинающиеся на букву А: ${result5}`)
stepp
const formating = content.split('\n').slice(0, -1);
const result1 = formating.map((el) => el.slice(0, -1).split('| '));
console.log(`Число писей: ${result1.length}`)
stepp
const format = content.split('\n').slice(1, -1);
const newResult = format.map((el) => el.slice(1, -2).split(' | '));
const sunCityTier = newResult.map((el) => el[4]);
const uniqCities = _.uniq(subCityTier).sort();
console.log(`Список: ${uniqCities.join(', ')}`);
// stepp 
// const place = newResult.flatmap((el) => _.camelCase(el[2]));
// const maxPlace = Math.max(...place);
// console.log(`Максимальная: ${maxPlace}`);
  // END
}