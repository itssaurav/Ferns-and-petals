import { RETURN } from '../Action';
const auth = {
  isLoading:true,
  loginIn:false,
  data:[],
}
export default function chefContactList(state = auth, action)
{
  console.log(action);
    switch(action.type){
          case RETURN:
            return {
              ...state,
              isLoading:false,
              loginIn:true,
              data:action.payload
            }
        default:
        return state;
    }
}
