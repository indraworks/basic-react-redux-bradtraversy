//ini samma kayak logs hanya ambil data tech dari servver
import React, { useState, useEffect } from 'react';
import TechsItem from './TechsItem';
const Techs = () => {
  const [techs, setTechs] = useState([]); //logsnya kosong aray kosong jka blum load dari sserver
  const [loading, setLoading] = useState(false); //default false jk blum load/da data

  useEffect(() => {
    getTechs();
    //eslint-disable-next
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs'); // gk pke url 5000kit auda pake proxy dipakagejson
    const data = await res.json();

    setTechs(data); //update statenya
    setLoading(false); //kmblikan loaading ke smula
    console.log(data);
    console.log('techs ', techs);
  };

  //perama logs aray kosong stlah setLogs(data) maka logs brisi data
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map((tech) => <TechsItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default Techs;

//utk colectios mis collections with-header atau collection-item dan sejenisnya
// bisa liat di https://materializecss.com/collections.html
/*
kita akan memasukan logItem  child dan injek log.id dan log.message sbgai props 

ini dibuat component sendiri :
 <li className='collection-item' key={tech.id}>
                {tech.firstName} {tech.lastName}
              </li>
nama TechsItem
*/
