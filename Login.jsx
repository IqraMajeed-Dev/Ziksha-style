
// import React, { useState } from 'react';
// import axios from 'axios'; // Ensure Axios is imported

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/token/', {
//                 username,
//                 password,
//             });
//             localStorage.setItem('access_token', response.data.access);
//             localStorage.setItem('refresh_token', response.data.refresh);
//             alert('Login successful!');
//         } catch (err) {
//             console.error('Error logging in:', err);
//             alert('Login failed! Please check your username and password.');
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <label>Username:</label>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//             />
//             <label>Password:</label>
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;
// import React, { useState } from 'react';
// import axios from 'axios'; // Ensure Axios is imported

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             // Send login request to obtain tokens
//             const response = await axios.post('http://127.0.0.1:8000/api/token/', {
//                 username,
//                 password,
//             });

//             // Save tokens to localStorage
//             const access = response.data.access;
//             const refresh = response.data.refresh;
//             localStorage.setItem('access_token', access);
//             localStorage.setItem('refresh_token', refresh);

//             // Log tokens in the console
//             console.log('Access Token:', access);  // Log the access token to the console
//             console.log('Refresh Token:', refresh);  // Log the refresh token to the console

//             alert('Login successful!');
//         } catch (err) {
//             console.error('Error logging in:', err);
//             alert('Login failed! Please check your username and password.');
//         }
//     };

//     return (
//         <form onSubmit={handleLogin}>
//             <label>Username:</label>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//             />
//             <label>Password:</label>
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);

//     // Fetch products after login
//     const fetchProducts = async () => {
//         try {
//             const accessToken = localStorage.getItem('access_token');
//             if (!accessToken) {
//                 throw new Error('No access token found');
//             }
//             const response = await axios.get('http://127.0.0.1:8000/api/products/', {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//             });
//             setProducts(response.data);
//         } catch (err) {
//             console.error('Error fetching products:', err);
//             setError('Failed to load products');
//         }
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             // Send login request to obtain tokens
//             const response = await axios.post('http://127.0.0.1:8000/api/token/', {
//                 username,
//                 password,
//             });

//             // Save tokens to localStorage
//             const access = response.data.access;
//             const refresh = response.data.refresh;
//             localStorage.setItem('access_token', access);
//             localStorage.setItem('refresh_token', refresh);

//             // Log tokens in the console
//             console.log('Access Token:', access);  // Log the access token to the console
//             console.log('Refresh Token:', refresh);  // Log the refresh token to the console

//             alert('Login successful!');
//             // After login, fetch the products
//             fetchProducts();
//         } catch (err) {
//             console.error('Error logging in:', err);
//             alert('Login failed! Please check your username and password.');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleLogin}>
//                 <label>Username:</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>

//             {/* Show products and images if login is successful */}
//             {error && <p>{error}</p>}
//             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {products.map((product) => (
//                     <div key={product.id} style={{ margin: '10px' }}>
//                         <img
//                             src={product.image_url} // Assuming 'image_url' is the correct path to the image
//                             alt={product.name}
//                             style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                         />
//                         <p>{product.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Login;
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);

//     // Fetch products after login
//     const fetchProducts = async () => {
//         try {
//             const accessToken = localStorage.getItem('access_token');
//             if (!accessToken) {
//                 throw new Error('No access token found');
//             }
//             const response = await axios.get('http://127.0.0.1:8000/api/products/', {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//             });
//             setProducts(response.data);
//         } catch (err) {
//             console.error('Error fetching products:', err);
//             setError('Failed to load products');
//         }
//     };

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             // Send login request to obtain tokens
//             const response = await axios.post('http://127.0.0.1:8000/api/token/', {
//                 username,
//                 password,
//             });

//             // Save tokens to localStorage
//             const access = response.data.access;
//             const refresh = response.data.refresh;
//             localStorage.setItem('access_token', access);
//             localStorage.setItem('refresh_token', refresh);

//             // Log tokens in the console
//             console.log('Access Token:', access);  // Log the access token to the console
//             console.log('Refresh Token:', refresh);  // Log the refresh token to the console

//             alert('Login successful!');
//             // After login, fetch the products
//             fetchProducts();
//         } catch (err) {
//             console.error('Error logging in:', err);
//             alert('Login failed! Please check your username and password.');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleLogin}>
//                 <label>Username:</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <label>Password:</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>

//             {/* Show products and images if login is successful */}
//             {error && <p>{error}</p>}
//             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {products.length > 0 ? (
//                     products.map((product) => (
//                         <div key={product.id} style={{ margin: '10px' }}>
//                             {/* Ensure that 'product.image_url' provides the correct image URL */}
//                             <img
//                                 src={`http://127.0.0.1:8000/media/${product.image_url}`} // Assuming 'image_url' is the correct path to the image
//                                 alt={product.name}
//                                 style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                             />
//                             <p>{product.name}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products found</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Login;
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple dummy login check
    if (username === "iqra malik" && password === "1234") {
      alert("Login successful!");
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </div>
          <button type="submit" style={{ width: "100%", padding: "10px" }}>
            Login
          </button>
        </form>
      ) : (
        <h2>Welcome, {username}!</h2>
      )}
    </div>
  );
};

export default Login;
