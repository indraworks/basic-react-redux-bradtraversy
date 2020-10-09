import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

//kita masukan log sbgai props dari logs swwaktu maping data/log
const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'delete log item done!' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(log)} //ktika muncul modal dklik utk set
          //value yg saat itu dari log diatas modal, kit aakan bawa hasil editLog action
          //k modal ini,dan itu componennya ada di EditLogModal (kita impirt editlog action disini)
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by :
          <span className='black-text'>{log.tech}</span> On :
          <Moment format='MMMM Do YYYY ,h:mm:ss a'>{LogItem.date}</Moment>
        </span>
        <a href='!#' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  //ktlik ptor utk snippet
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);

/* PENEJJASLAN  <a
          href='#edit-log-modal'
          className=`modal-triger red-text ` ini diisi otomatis dari program kita

        >
 jadi gini dijson utk object logs.attention ;true ,maka kita kasih text tersbut warna merah
 nah krtigernya dari aplikasi material cs a href sptrti diatas :D
jadi kalau di css <log className="Modal" attention ></log>


*/
