export default function(state = null, action){

  switch(action.type){

    case 'PROJECT_SELECTED':
    console.log('actionpayload', action.payload);
    return state;
  }

  return state;

}
