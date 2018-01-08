import { RETURN } from '../Actions';

export default function chefContactList(state = 'default',action)
{
    switch(action.type){
          case type.RETURN:
            return action.payload;
        default:
        return state;
    }
}
