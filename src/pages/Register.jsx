import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', form);
      localStorage.setItem('auth_token', response.data.token);
      setMessage('تم تسجيل الدخول بنجاح');
      // هنا يمكنك توجيه المستخدم لصفحة أخرى
    } catch (error) {
      setMessage('فشل تسجيل الدخول. تحقق من بيانات الاعتماد.');
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
          <h2 className="mb-4 text-center text-success">Log in</h2>
          {message && <div className={`alert ${message.includes('نجاح') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
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
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">Log in</button>
          </form>

          <div className="text-center mt-3">
            <Link to="/forgot-password" className="d-block">Forgot Password?</Link>
            <span>Don't have an account? </span>
            <Link to="/SignUp" style={{ marginBottom: '110px' }}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
