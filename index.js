import _ from 'lodash';

export default function solution(content){
  // BEGIN

  //step1
  const formatting = content.trim().split('\n').slice(0, -1);
  const result1 = formatting.map((el) => el.slice(0, -1).split(','));
  console.log(`Число пассажиров: ${result1.length}`);

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

  //step5 
  //const namesPassengers = result1.map((n) => n.toString().split(',')[4]);
  //const result5 = namesPassengers.map((qq) => qq[1] === 'A');
  //console.log(`имена всех пассажиров, начинающиеся на букву А: ${result5}`)


  // END
}