function showForm(type) {
    const clientForm = document.getElementById("clientForm");
    const lawyerForm = document.getElementById("lawyerForm");
    const clientBtn = document.getElementById("clientBtn");
    const lawyerBtn = document.getElementById("lawyerBtn");
  
    if (type === "client") {
      clientForm.classList.remove("hidden");
      lawyerForm.classList.add("hidden");
      clientBtn.classList.add("active");
      lawyerBtn.classList.remove("active");
    } else {
      clientForm.classList.add("hidden");
      lawyerForm.classList.remove("hidden");
      lawyerBtn.classList.add("active");
      clientBtn.classList.remove("active");
    }
  }
  
  function signupSuccess() {
    alert("Signed up successfully!");
  }
  