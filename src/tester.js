// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const YourComponent = ({ userId, walletEntity }) => {
//   const [value, setValue] = useState('');
//   const [error, setError] = useState('');
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     if (walletEntity && walletEntity.balance) {
//       setBalance(walletEntity.balance);
//     }
//   }, [walletEntity]);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = async () => {
//     if (!Number.isInteger(Number(value))) {
//       setError('Please enter a valid integer.');
//       return;
//     }

//     try {
//       const newValue = parseInt(value);
//       const updatedWallet = await axios.put(`http://localhost:8080/wallet/${userId}`, {
//         balance: newValue
//       });

//       setBalance(newValue);
//       setValue('');
//       setError('');
//       // Handle updated wallet data received from the backend if needed
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle error from axios request if needed
//     }
//   };

//   return (
//     <div>
//       <p>Current Balance: {balance}</p>
//       <input
//         type="text"
//         value={value}
//         onChange={handleChange}
//         placeholder="Enter an integer"
//       />
//       <button onClick={handleSubmit}>Add Money</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default YourComponent;
