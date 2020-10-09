//state logs disini nnti masuk sbagai props
//actions dari component kereducer kmudian reducer update state
//brdasarkan action type yg diterima
//state nama  yg ada di component harus sama dgn yg diepport
//di rootreducers dari filelogReducers ini !
import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
  logs: null, //brupa nilai state ini ada di component level state addLog dll /sejenisnya
  current: null, //nilai skrg ini dipakai utk update atau edit log!
  loading: false, //true nnti jika data fecth ada
  error: null, //error jika ada error dari server
};

//stiap return dari reducer ini utk upate state itu sndir yg ada distore
//yaitu initial state diatas yg udah kita declare
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    //case jika data logs ditrima
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload, //ingat variable yg direturn ke reducer dan ke komponet mesti sama!
        loading: false, //payload brupa data
      };
    //case add log
    case ADD_LOG:
      return {
        ...state, //artinya tampilkan keadaan smua state sblunya logs[],loadng,error etc
        logs: [...state.logs, action.payload],
        //logs akan ditammbah caranya: -...state.logs tampikan sluruh array logs peridividu sd sblum ditambahkan
        //,action.payload -->tambahkan dgn aray yg baru dari actionpayload ini
        loading: false,
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload, //current adalah initial state yg ada di logs lihat declasaris diatas
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null, //current adalah initial state yg ada di logs lihat didieklarasikan diatas
      };
    case UPDATE_LOG:
      return {
        //utk update staes di logs addalah bernilai hasil dari  map dgn action.log.id yg diupdate apa match?
        //jka match maka sama dgn log id yg diupdate jika tidak sama dgn yg awal
        //action.payload = data,ini artinya bandingkan log.id === data.id
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false,
      };
    default:
      return state;
  }
};

//////KETERANGAN DISPRATE  trutama utk state
/*ARTI ...state : maksudnya adalah tampilkan seluruh keadaan state sblumnya 
per-individu baik itu state yg sblumnya maupun juga props2 seblumnya yg ada distate tersebut
dalam hal ini ...state ini adalah mencakups 

jadi didalam ...state adalah  keadaan state2 saat ini  yaitu :logs,current,.oading ,error
sblum ada action utk ubahnya jadi ditampilkan keadaan sblum diubah atau sstatus terakhir sissate2 tadi 
*/
