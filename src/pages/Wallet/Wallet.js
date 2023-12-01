// // OrdersPage.js
// import React, { useState } from "react";
// // import "./OrdersPane.css";
// import LeftPane from "../../components/LeftPane/LeftPane";
// import year1books from "../../assets/books1.jpg";
// import "./Wallet.css";
// import NavigationBar from "../../components/NavigationBar/NavigationBar";

// function Wallet({ availableWallet }) {
//   const [walletToAdd, setWalletToAdd] = useState("");

//   const handleAddWallet = () => {
//     // Implement the logic to handle adding wallet
//     console.log(`Adding wallet: ${walletToAdd}`);
//     // Here you would typically make an API call to update the wallet in the database
//   };

//   return (
//     <div>
//       <NavigationBar />
//       <div className="wallet-container">
//         <LeftPane />
//         <div className="wallet-right-pane">
//           <h1 className="wallet-header">Wallet</h1>
//           <div className="wallet-details">
//             <div className="available-wallet">
//               Available Wallet: ₹{availableWallet}
//             </div>
//             <div className="wallet-input-section">
//               <input
//                 type="number"
//                 className="wallet-input"
//                 value={walletToAdd}
//                 onChange={(e) => setWalletToAdd(e.target.value)}
//                 placeholder="Enter amount"
//               />
//               <button className="add-wallet-button" onClick={handleAddWallet}>
//                 Add Wallet
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Wallet;

import React, { useState } from "react";
import LeftPane from "../../components/LeftPane/LeftPane";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "./Wallet.css";

function Wallet() {
const [availableWallet, setAvailableWallet] = useState(0);
const [walletToAdd, setWalletToAdd] = useState(0);

const handleAddWallet = () => {
const amountToAdd = Number(walletToAdd);
if (!isNaN(amountToAdd) && amountToAdd > 0) {
setAvailableWallet(availableWallet + amountToAdd);
setWalletToAdd(0); // Optionally reset the input field
console.log(`Adding wallet: ${amountToAdd}`);
// Implement the logic to handle adding wallet, like an API call
}
};

return (
<div>
<NavigationBar />
<div className="wallet-container">
<LeftPane />
<div className="wallet-right-pane">
<h1 className="wallet-header">Wallet</h1>
<div className="wallet-details">
<div className="available-wallet">
Available Wallet: ₹{availableWallet}
</div>
<div className="wallet-input-section">
<input
type="number"
className="wallet-input"
value={walletToAdd}
onChange={(e) => setWalletToAdd(e.target.value)}
placeholder="Enter amount"
/>
<button className="add-wallet-button" onClick={handleAddWallet}>
Add Wallet
</button>
</div>
</div>
</div>
</div>
</div>
);
}

export default Wallet;

