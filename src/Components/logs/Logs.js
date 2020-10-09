import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions'; //acation mau didispatch dari component
//utk itu harus diimport

const Logs = ({ log: { logs, loading }, getLogs }) => {
  //kitamasukan props log dari state reducer  dan yg bawah ini kit amatikan
  //krn smua action dan ubahan state dari redux skarang bukan local component
  // const [logs, setLogs] = useState([]); //logsnya kosong aray kosong jka blum load dari sserver
  // const [loading, setLoading] = useState(false); //default false jk blum load/da data

  useEffect(() => {
    getLogs();
    //eslint-disable-next
  }, []);

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/logs'); // gk pke url 5000kit auda pake proxy dipakagejson
  //   const data = await res.json();

  //   setLogs(data); //update statenya
  //   setLoading(false); //kmblikan loaading ke smula
  // };

  if (loading || logs === null) {
    return <Preloader />;
  }
  //perama logs aray kosong stlah setLogs(data) maka logs brisi data
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No Logs to Show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

//ptor snipednya
Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});
//ket mapStaeToProps
//nama log sblah krii trserah utk jadi props mewakii statle logs,loading di logreducers
//diconect disini  nah nama state di sblha kana dari : ,hrus sama dgn yg ada di rootreducer
//yg mana state brasal dari logReducer

export default connect(mapStateToProps, { getLogs })(Logs);

/*
catatan action :utk action kita tambahkan di sblah mapStateToprops
agar dikenali component ,dan kita pasang di bagaina awal sbagai props
did estructing disitu  const Logs=({getLogs})=> {},jadi udah gak perlu pakai 
props.getLogs lagi 

*/

//catatan:coletion
//utk colectios mis collections with-header atau collection-item dan sejenisnya
// bisa liat di https://materializecss.com/collections.html
/*
kita akan memasukan logItem  child dan injek log.id dan log.message sbgai props 

*/
