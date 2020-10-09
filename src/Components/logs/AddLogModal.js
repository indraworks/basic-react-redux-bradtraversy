import React, { useState } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import { PropTypes } from 'prop-types';

//

//

//

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState(''); //utk isi message di modal->tablelist =>ini
  //ini berita utk technician
  const [attention, setAttention] = useState(false); //beri warna ada atention or not
  const [tech, setTech] = useState(''); //nama technician yg in charge

  const onSubmit = (e) => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please fill message and tech properly!' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLog(newLog);

      M.toast({ html: `Log added by ${tech}` });

      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };
  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4 style={{ textAlign: 'center' }}>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name='message'
              type='text'
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              name='tech'
              className='browser-default'
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='Sam Smith'>sam Smith</option>
              <option value='Ryan Dhungel'>Ryan Dhungel</option>
              <option value='Brad Traversy'>Brad Travrsy</option>
              <option value='Indra Surya'>Indra Surya</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close btn waves-effect blue waves-light'
        >
          Enter
        </a>
      </div>
    </div>
  );
};
AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: '75%',
  height: '75%',
};
export default connect(null, { addLog })(AddLogModal);
