import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteRegionRequest,
  GetRegionRequest,
} from '../ReduxSaga/Action/RegionAction';
import FormikSagaRegion from './FormikSagaRegion';
import { useFormik } from 'formik';
import RegionApi from '../api/RegionApi';
import FormikSagaRegionUpdate from './FormikSagaRegionUpdate';

export default function RegionSagaView() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.regionState);
  const [display, setDisplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [name, setName] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetRegionRequest());
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
      {display ? (
        <FormikSagaRegion setDisplay={setDisplay} setRefresh={setRefresh} />
      ) : edit ? (
        <FormikSagaRegionUpdate
          setEdit={setEdit}
          setRefresh={setRefresh}
          setName={name}
          setId={id}
        />
      ) : (
        <>
          <h2>List Regions</h2>
          <button onClick={() => setDisplay(true)}>Add Region</button>
          <table>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Action</th>
            <tbody>
              {regions &&
                regions.map((reg) => (
                  <tr key={reg.regionId}>
                    <td>{reg.regionId}</td>
                    <td>{reg.regionName}</td>
                    <td>
                      <button
                        onClick={() => {
                          setEdit(true);
                          setName(reg.regionName);
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
