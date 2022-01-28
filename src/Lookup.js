import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getAutoPopulateData } from "./redux/actions/googleAction"
import Navigation from "./Navigation"

const Lookup = () => {

  const dispatch = useDispatch();
  let { data } = useSelector(state => state.googleData)
  const [myOptions, setMyOptions] = useState([])

  const getGoogleData = () => {
    dispatch(getAutoPopulateData());
  }
  useEffect(() => {
    if (data) {
      const options = data && data.map((list, i) => {
        return list.first_name
      })
      setMyOptions(options)
    }
  }, [data])


  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <Navigation />
      <h3>Greetings from May Bank!</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getGoogleData}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
}

export default Lookup