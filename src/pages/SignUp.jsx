import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    email: '',
    password: '',
    date: '',
    city: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await axios.post('http://localhost:8000/api/register', form);
      setMessage('تم التسجيل بنجاح');
      setForm({
        name: '',
        gender: '',
        email: '',
        password: '',
        date: '',
        city: '',
      });
    } catch (err) {
      setError('فشل التسجيل، تحقق من البيانات أو من الخادم.');
      console.error(err);
    }
  };

  return (
    <div style={{ position: 'relative', height: '900px', overflow: 'hidden' }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="VidioSheep/Why so many sheep in Ireland_.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: '100vh', marginTop: "130px" }}
      >
        <div
          className="bg-white p-4 rounded shadow"
          style={{ width: '100%', maxWidth: '500px', opacity: 0.85 }}
        >
          <h2 className="mb-4 text-center text-success">Sign Up</h2>

          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Gender</label>
              <select
                name="gender"
                className="form-control"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Date</label>
              <input
                type="date"
                name="date"
                className="form-control"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-success w-100">Sign Up</button>
          </form>

          <div className="text-center mt-3">
            <Link to="/forgot-password" className="d-block">Forgot Password?</Link>
            <span>Have an account? </span>
            <Link to="/register">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
