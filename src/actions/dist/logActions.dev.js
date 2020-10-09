"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCurrent = exports.setCurrent = exports.updateLog = exports.deleteLog = exports.addLog = exports.setLoading = exports.getLogs = void 0;

var _types = require("./types");

//GET LOGS
//direfactor
var getLogs = function getLogs() {
  return function _callee(dispatch) {
    var res, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setLoading();
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch('/logs'));

          case 4:
            res = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(res.json());

          case 7:
            data = _context.sent;
            dispatch({
              //artinya didpstahc ke reducers krim dgn action type GET_LOGS ,payload :dataserver
              type: _types.GET_LOGS,
              payload: data
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            //jitak trjadi error yg dikirm adlaah  type data erorr dan value errornya
            dispatch({
              type: _types.LOGS_ERROR,
              payload: _context.t0.response.statusText
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}; //ADD LOG
//log props /payload yg dikirm ke db
//set loading to 'true'


exports.getLogs = getLogs;

var setLoading = function setLoading() {
  return {
    type: _types.SET_LOADING
  };
}; //ADD NEW LOG
// Add new log


exports.setLoading = setLoading;

var addLog = function addLog(log) {
  return function _callee2(dispatch) {
    var res, data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setLoading();
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch('/logs', {
              method: 'POST',
              //kesalahannya disini JSON.stringify nya hruf kecil
              body: JSON.stringify(log),
              headers: {
                'Content-Type': 'application/json'
              }
            }));

          case 4:
            res = _context2.sent;
            _context2.next = 7;
            return regeneratorRuntime.awrap(res.json());

          case 7:
            data = _context2.sent;
            dispatch({
              type: _types.ADD_LOG,
              payload: data
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _types.LOGS_ERROR,
              payload: _context2.t0.response.statusText
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}; //DELETE Log from server
//kalau delete base on idnya /param id yg dimasukan oleh client
//url/:id


exports.addLog = addLog;

var deleteLog = function deleteLog(id) {
  return function _callee3(dispatch) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            setLoading(); //tikdam perlu dimasukan variable

            _context3.next = 4;
            return regeneratorRuntime.awrap(fetch("/logs/".concat(id), {
              method: 'DELETE'
            }));

          case 4:
            dispatch({
              //artinya didpstahc ke reducers krim dgn action type GET_LOGS ,payload :dataserver
              type: _types.DELETE_LOG,
              payload: id
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            //jitak trjadi error yg dikirm adlaah  type data erorr dan value errornya
            dispatch({
              type: _types.LOGS_ERROR,
              payload: _context3.t0.response.statusText
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}; /// UPDATE_LOG :udate based on id nya  Log


exports.deleteLog = deleteLog;

var updateLog = function updateLog(log) {
  return function _callee4(dispatch) {
    var res, data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            setLoading();
            _context4.next = 4;
            return regeneratorRuntime.awrap(fetch("/logs/".concat(log.id), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(log) //yg diupdate ksuluruhan (req.body)

            }));

          case 4:
            res = _context4.sent;
            _context4.next = 7;
            return regeneratorRuntime.awrap(res.json());

          case 7:
            data = _context4.sent;
            console.log('data', data);
            dispatch({
              type: _types.UPDATE_LOG,
              payload: data
            });
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            dispatch({
              type: _types.LOGS_ERROR,
              payload: _context4.t0.response.statusText
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
}; //SET CURRENT and CLEAR CURRENT
//( ini fornt end gak ada hub sama backend)


exports.updateLog = updateLog;

var setCurrent = function setCurrent(log) {
  return {
    type: _types.SET_CURRENT,
    payload: log
  };
}; //clear Current


exports.setCurrent = setCurrent;

var clearCurrent = function clearCurrent() {
  return {
    type: _types.CLEAR_CURRENT
  };
}; //FORMAT LAMA
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


exports.clearCurrent = clearCurrent;