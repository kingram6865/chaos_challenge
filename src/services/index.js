function getDieRoll(max){
	return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}`;

/**
 *  Best of 3 rule.
 *  Roll 3D6, 3 times, best set is the attribute
 * 
 */

export function generateAttribute(){
  let result = 0;
  for (let i=1; i<=3; i++){
    let thisResult = getDieRoll(6) + getDieRoll(6) + getDieRoll(6);
    result = (thisResult > result) ? thisResult : result;
  }
  // console.log(result);
  return result;
}

export function generateRace(){
	return getDieRoll(8);
}

export function generateClass(){
	return getDieRoll(12);
}

export function getDate(choice){
  const today = new Date();
  const year = today.getUTCFullYear();
  const month = today.getUTCMonth();
  const day = today.getUTCDay();
  const hours = today.getUTCHours();
  const minutes = today.getUTCDay();
  const seconds = today.getUTCSeconds();

  if (choice === 'std') {
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } else if (choice === 'utc'){
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
  }  
}