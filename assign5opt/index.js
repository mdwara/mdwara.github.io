alert("Welcome!!")

let bill = prompt("Enter the bill amount:");


bill = Number(bill);

let tipPercentage = (bill > 30 && bill < 300) ? 0.15 : 0.20;
let tip = bill * tipPercentage;

let totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}.`);


// Function to open the modal window
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Function to close the modal window
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // Attach click event listeners to the buttons
  document.getElementById("btn1").addEventListener("click", function() {
    openModal("modal1");
  });
  
  document.getElementById("btn2").addEventListener("click", function() {
    openModal("modal2");
  });
  
  document.getElementById("btn3").addEventListener("click", function() {
    openModal("modal3");
  });
  
  // Attach click event listeners to the close (x) symbols
  document.querySelectorAll(".close").forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function() {
      const modalId = this.parentElement.parentElement.id;
      closeModal(modalId);
    });
  });
  
