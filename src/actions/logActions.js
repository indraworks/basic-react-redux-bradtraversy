import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';

//GET LOGS
//direfactor
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      //artinya didpstahc ke reducers krim dgn action type GET_LOGS ,payload :dataserver
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    //jitak trjadi error yg dikirm adlaah  type data erorr dan value errornya
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//ADD LOG
//log props /payload yg dikirm ke db
//set loading to 'true'
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//ADD NEW LOG

// Add new log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      //kesalahannya disini JSON.stringify nya hruf kecil
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//DELETE Log from server
//kalau delete base on idnya /param id yg dimasukan oleh client
//url/:id

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    //tikdam perlu dimasukan variable
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      //artinya didpstahc ke reducers krim dgn action type GET_LOGS ,payload :dataserver
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    //jitak trjadi error yg dikirm adlaah  type data erorr dan value errornya
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

/// UPDATE_LOG :udate based on id nya  Log

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log), //yg diupdate ksuluruhan (req.body)
    });
    const data = await res.json();
    console.log('data', data);
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//SET CURRENT and CLEAR CURRENT
//( ini fornt end gak ada hub sama backend)

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};
//clear Current
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
//FORMAT LAMA
//mlkaukan action ambil data fectdata logs dari server
//kmbaliannya adalah sbuah fucntion  yaaitu  setloading
//jik abrnilai true maka diispatch  ambil data

//kita refactor
// export const getLogs = () => {
//   return async (dispatch) => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();
//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

//catatan async await
/*
https://javascript.info/async-await

sbnarnya asal dari sini async func() {} -> nunggu response
jika nunggu response maka bisa di buat dalam constant dan mrupakan sbauh promise

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f(); //panggil functonya

nah skarang jika ada 2 fungsi dalam fungsi maka bisa speti ini 
function A() {
 async function B() {

 }

}
 function B slsai baru ke A bisa kita tulis :
 const A=()=>{
   async B=>(){
        }
 }
// bosa do tulis sprti ini  
const A=()=>async B=>() {
  
}
*/
