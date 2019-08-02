import React from 'react';

const AdminPostAirport = () => {
  const [airport, setAirport] = useState({
    arrivalAirport: '',
    departureAirport: ''
  });

  const handleChange = e => {
    setAirport({
      ...airport,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
      e.preventDefault();
      addAirport(airport);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Departure Airport</label>
          <input
            type='text'
            className='form-control'
            name='departureAirport'
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label>Arrival Airport></label>
          <input
            type='email'
            className='form-control'
            name='arrivalAirport'
            aria-describedby='emailHelp'
            placeholder='Enter email'
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPostAirport;
