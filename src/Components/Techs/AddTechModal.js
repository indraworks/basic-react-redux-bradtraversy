import React, { useState } from 'react';
import M from 'materialize-css';
const AddTechModal = () => {
  const [firstname, setFirstname] = useState('');
  //ini berita utk technician
  const [lastname, setLastname] = useState('');

  const onSubmit = (e) => {
    if (firstname === '' || lastname === '') {
      M.toast({ html: 'Please fill first and last Name !' });
    } else {
      console.log(firstname, lastname);
      //clear field after setState

      setFirstname('');
      setLastname('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4 style={{ textAlign: 'center' }}>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              name='firstname'
              type='text'
            />
            <label htmlFor='firstname' className='active'>
              Log firstName
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              name='lastname'
              type='text'
            />
            <label htmlFor='lastname' className='active'>
              Log lastname
            </label>
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

// const modalStyle = {
//   width: '75%',
//   height: '75%',
// };
export default AddTechModal;
