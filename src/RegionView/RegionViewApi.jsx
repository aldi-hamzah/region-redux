import React, { useEffect, useState } from 'react';
import RegionApi from '../api/RegionApi';
import RegionCreate from './RegionCreate';
import RegionEdit from './RegionEdit';

export default function RegionViewApi() {
  const [region, setRegion] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [val, setVal] = useState('');

  useEffect(() => {
    RegionApi.list().then((data) => {
      setRegion(data);
    });
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id) => {
    RegionApi.deleted(id).then(() => {
      window.alert('Data Succesfully Deleted');
      setRefresh(true);
    });
  };

  return (
    <div>
      <h2>List Region</h2>
      {display ? (
        <RegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : edit ? (
        <RegionEdit
          setEdit={setEdit}
          setRefresh={setRefresh}
          setVal={val}
          setId={id}
        />
      ) : (
        <>
          <button onClick={() => setDisplay(true)}>Add Regions</button>
          <table>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Action</th>
            <tbody>
              {region &&
                region.map((reg) => (
                  <tr key={reg.regionId}>
                    <td>{reg.regionId}</td>
                    <td>{reg.regionName}</td>
                    <td>
                      <button
                        onClick={() => {
                          setEdit(true);
                          setVal(reg.regionName);
                          setId(reg.regionId);
                        }}
                      >
                        Edit
                      </button>
                      <button onClick={() => onDelete(reg.regionId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
