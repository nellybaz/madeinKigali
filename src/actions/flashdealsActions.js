import {FETCH_FLASHDEALS, DISPLAY_FLASHDEALS} from './types';
import request from 'superagent';

// let itemID = 0;
// export const fetchFlashDeals = data => ({
//   type: FETCH_FLASHDEALS,
//   payload:{
//     id: ++itemID,
//     data: data,
//   }
// });
export const fetchFlashDeals = () => dispatch => {
  console.log("fetching");
  
  fetch('https://madeinkigali.com/API/api2/homepage/')
  .then(res => res.json())
  .then(flashdeals => 
    
    dispatch({
      type:FETCH_FLASHDEALS,
      payload: flashdeals
    })
    
    );        // try {      
        //     request
        //       .post('https://madeinkigali.com/API/api2/homepage/')
        //       .set('Content-Type', 'application/x-www-form-urlencoded')
        //       .send({ token: "mik9876543210", tag: 'flashdeals' })
        //       // .parse(({ res }) => JSON.parse(res))
        //       .end(function (err, res) {
      
        //         if (res != null) {
        //           if (res.body.flashdeals != null) {     
        //             console.log("hello there ");
                     
        //             dispatch({
        //                 type: FETCH_FLASHDEALS,
        //                 payload: res.body.flashdeals
        //             });

                    
                    
      
        //           }
      
        //           else if (res.body.res === 0) {
        //             console.log('not registered');
      
        //           }
      
        //         }
        //         else {
        //           console.log(res, err);
      
        //         }
      
        //       });
      
      
        //   } catch (e) {
        //     console.log(e);
        //   }

};

// export const displayFlashdeals = ()=> dispatch =>{
//     dispatch(
//         {
//             type: DISPLAY_FLASHDEALS,
//             payload: 1,
//         }
//     );

// }
