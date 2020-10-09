import React, { useState, useEffect } from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';

const EditLogModal = ({ updateLog, current }) => {
  //current mrupakan state yg saat ini ada pada log
  //maka harus diktahui kondisi terupdatenya maka kit apakae
  //useEffect utk ambil status log state ,yaitu kita mau set formdata dgn log current yg ada

  const [message, setMessage] = useState(''); //utk isi message di modal->tablelist =>ini
  //ini berita utk technician
  const [attention, setAttention] = useState(false); //beri warna ada atention or not
  const [tech, setTech] = useState(''); //nama technician yg in charge
  console.log(current);
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please fill message and tech properly!' });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(updLog);
      M.toast({ html: `log update by ${tech}` });

      //clear field after setState
      setAttention(false);
      setTech('');
      setMessage('');
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
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

const modalStyle = {
  width: '75%',
  height: '75%',
};
EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

//note kit ajuga butuh state yaitu current dari state.log.current
//yatu kit aisi fordata dari curent (keadaan state log real saat itu) ini ,
//yg mana yg nilai state log sblum diunah dan yg akan diubah diedit dibagian modal
const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);

/*
JALANNYA program :





*/
