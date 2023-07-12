import React, { useState } from 'react';
import RegionApi from '../api/RegionApi';

export default function RegionCreate(props) {
  const [value, setValue] = useState({
    name: props.setVal,
  });

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      name: value.name,
    };

    const id = props.setId;

    await RegionApi.update(payload, id).then(() => {
      window.alert(`Data success Updated`);
      props.setRefresh(true);
    });
  };

  return (
    <div>
      <h2>Edit Region</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            placeholder="Name"
            value={value.name}
            onChange={handleChange('name')}
          />
          <button type="submit">Simpan</button>
          <button onClick={() => props.setEdit(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
