import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    date: '',
    city: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.includes('@')) newErrors.email = 'Valid email required';
    if (form.password.length < 6) newErrors.password = 'Minimum 6 characters';
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
  
      try {
        const response = await axios.post('http://localhost:8000/api/register', form);
        console.log('تم التسجيل بنجاح:', response.data);
      } catch (error) {
        console.error('فشل التسجيل:', error);
      }
    }
  };

  return (
    <div style={{ position: 'relative', height: '800px', overflow: 'hidden' }}>
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
          <h2 className="mb-4 text-center text-success">Sign In</h2>
          {submitted && <div className="alert alert-success">Login successful!</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                value={form.password}
                onChange={handleChange}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="mb-3">
              <label>Date</label>
              <input
                type="date"
                name="date"
                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                value={form.date}
                onChange={handleChange}
              />
              {errors.date && <div className="invalid-feedback">{errors.date}</div>}
            </div>

            <div className="mb-3">
              <label>City</label>
              <input
                type="text"
                name="city"
                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                value={form.city}
                onChange={handleChange}
              />
              {errors.city && <div className="invalid-feedback">{errors.city}</div>}
            </div>

            <button type="submit" className="btn btn-success w-100">Sign In</button>
          </form>

          <div className="text-center mt-3">
            <Link to="/forgot-password" className="d-block">Forgot Password?</Link>
            <span>Have an account? </span>
            <Link to="/register" style={{ marginBottom: '110px' }}>Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
