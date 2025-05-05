<script>
  // Fake login handler for demonstration
  document.getElementById('loginBtn').addEventListener('click', function () {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
      document.getElementById('emailError').textContent = !email ? 'Email is required' : '';
      document.getElementById('passwordError').textContent = !password ? 'Password is required' : '';
      return;
    }

    // Clear errors
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Simulate login success
    isLoggedIn = true;
    document.getElementById('authModal').style.display = 'none';

    // Proceed to payment
    startPayment();
  });

  // Fake account creation
  document.getElementById('signupBtn').addEventListener('click', function () {
    alert("Account creation feature coming soon.");
  });

  // Start payment
  function startPayment() {
    document.getElementById('paymentModal').style.display = 'block';

    const options = {
      key: "rzp_test_1234567890abcdef", // Replace with your Razorpay key
      amount: orderData.price * 100,
      currency: "INR",
      name: "Ajay Online Services",
      description: "PVC Card Order",
      handler: function (response) {
        document.getElementById('paymentModal').style.display = 'none';
        document.getElementById('confirmationModal').style.display = 'block';
        document.getElementById('orderId').textContent = response.razorpay_payment_id;
        localStorage.removeItem('orderData');
      },
      prefill: {
        name: orderData.name,
        contact: orderData.mobile
      },
      theme: {
        color: "#2e7d32"
      }
    };

    razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  }

  // Close confirmation modal
  document.getElementById('closeConfirmationBtn').addEventListener('click', function () {
    document.getElementById('confirmationModal').style.display = 'none';
    document.getElementById('aadharOrderForm').reset();
    document.getElementById('frontPreview').style.display = 'none';
    document.getElementById('backPreview').style.display = 'none';
    document.getElementById('frontPreviewText').style.display = 'block';
    document.getElementById('backPreviewText').style.display = 'block';
  });

  // Form validation function
  function validateForm() {
    let isValid = true;
    const requiredFields = ['fullName', 'address', 'city', 'state', 'pincode', 'mobile'];
    
    requiredFields.forEach(id => {
      const input = document.getElementById(id);
      const errorElement = document.getElementById(id + 'Error');
      if (!input.value.trim()) {
        errorElement.textContent = 'This field is required';
        isValid = false;
      } else {
        errorElement.textContent = '';
      }
    });

    return isValid;
  }
</script>
