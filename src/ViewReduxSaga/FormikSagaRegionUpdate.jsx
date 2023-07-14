import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { UpdateRegionRequest } from '../ReduxSaga/Action/RegionAction';

export default function FormikSagaRegionUpdate(props) {
  const dispatch = useDispatch();
  const [previewImg, setPreviewImage] = useState();
  const [upload, setUpload] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: props.setName,
      file: undefined,
      id: props.setId,
    },
    onSubmit: async (values) => {
      const payload = {
        name: values.name,
        file: values.file,
      };
      const id = values.id;
      dispatch(UpdateRegionRequest(payload, id));
      props.setEdit(false);
      window.alert('Data Successfully Update');
      props.setRefresh(true);
    },
  });

  const uploadConfig = (name) => (event) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = () => {
      formik.setFieldValue('file', file);
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };

  const onClear = (event) => {
    event.preventDefault();
    setPreviewImage();
    setUpload(false);
  };

  return (
    <div>
      <div>
        <label>Region Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.id}
          hidden
        ></input>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange('name')}
        ></input>
      </div>
      <div>
        <label>Photo</label>
        <div>
          {upload === false ? (
            <>
              <span>Kosong</span>
            </>
          ) : (
            <>
              <img src={previewImg} alt="img" width={100}></img>
              <span onClick={onClear}>Remove</span>
            </>
          )}
        </div>
        <div>
          <label>
            <span>upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              onChange={uploadConfig('file')}
            ></input>
          </label>
        </div>
        <div>
          <button type="submit" onClick={formik.handleSubmit}>
            Simpan
          </button>
          <button type="submit" onClick={() => props.setEdit(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
