'use client';

import {
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import Tiptap from '../Tiptap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_KEY, SET_INITIAL } from '../../lib/store';

export default function JobDetails({ interview, id }) {
  const locations = useSelector((store) => store.locations);
  const form = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const [errors, setErrors] = useState(['title', 'description']);

  useEffect(() => {
    validateForm(form);
  }, [form]);

  function validateForm(form) {
    for (const [key, value] of Object.entries(form)) {
      if (!value) {
        setErrors((prev) => [...prev, key]);
        return;
      }
      setErrors((e) => e.splice(key, 1));
    }
  }

  function handleChange(key, value) {
    dispatch(SET_KEY({ key, value }));
  }

  useEffect(() => {
    if (!id) {
      dispatch(SET_INITIAL());
      return;
    }
    const data = interview;
    delete data.id;

    for (const [key, value] of Object.entries(data)) {
      dispatch(SET_KEY({ key, value }));
    }
  }, [id]);

  return (
    <div className='tab-container'>
      <div className='tab-container__title'>
        <h2>{id ? 'Update Job' : 'Create Job'}</h2>
        <p>Job Description</p>
      </div>
      <TextField
        required
        id='outlined-required'
        label='Job Title'
        defaultValue={form.title}
        onChange={(e) => handleChange('title', e.target.value)}
        error={errors.includes('title')}
      />

      <Tiptap
        text={form.description}
        error={errors.includes('description')}
        handleChange={handleChange}
      />

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>
          Interview Duration
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={form.duration}
          label='Interview Duration'
          onChange={(e) => handleChange('duration', e.target.value)}
        >
          <MenuItem value={10}>10 Minutes</MenuItem>
          <MenuItem value={20}>20 Minutes</MenuItem>
          <MenuItem value={30}>30 Minutes</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Job Location</FormLabel>
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          value={form.location}
          onChange={(e) => handleChange('location', e.target.value)}
        >
          {locations.map((l) => (
            <FormControlLabel
              key={l.id}
              value={l.id}
              control={<Radio />}
              label={l.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
