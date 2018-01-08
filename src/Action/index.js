
import {dispatcher} from './config';
export const RETURN = 'RETURN';
const initialState = {
  data:'saurav'
}
export function getOrder(){
   return{
       type:RETURN,
       payload:initialState
     };

}
