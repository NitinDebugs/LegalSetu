function flipCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle("flipped");
  }
  
  document.getElementById("clientForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const password = this.password.value;
    console.log("Client Signed Up:", { name, email, password });
    alert("Client signed up successfully!");
  });
  
  document.getElementById("lawyerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const password = this.password.value;
    const speciality = this.speciality.value;
    console.log("Lawyer Signed Up:", { name, email, password, speciality });
    alert("Lawyer signed up successfully!");
  });
  