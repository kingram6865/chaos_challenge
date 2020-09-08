function getDieRoll(max){
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}

/**
 *  Best of 3 rule.
 *  Roll 3D6, 3 times, best set is the attribute
 * 
 */

export function generateAttribute(){
  // var result = getDieRoll(6) + getDieRoll(6) + getDieRoll(6);
  let result = 0;
  for (let i=1; i<=3; i++){
    let thisResult = getDieRoll(6) + getDieRoll(6) + getDieRoll(6);
    result = (thisResult > result) ? thisResult : result;
  }

  return result;
}

export function generateRace(){
	return getDieRoll(8);
}

export function generateClass(){
	return getDieRoll(12);
}