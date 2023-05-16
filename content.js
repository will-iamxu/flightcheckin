chrome.storage.local.get(['confirmationNumber', 'firstName', 'lastName'], (result) => {
    const confirmationNumberInput = document.querySelector('#confirmationNumber');
    const firstNameInput = document.querySelector('#passengerFirstName');
    const lastNameInput = document.querySelector('#passengerLastName');
    const submitButton = document.querySelector('#form-mixin--submit-button');
  
    if (confirmationNumberInput && firstNameInput && lastNameInput && submitButton) {
      confirmationNumberInput.value = result.confirmationNumber;
      firstNameInput.value = result.firstName;
      lastNameInput.value = result.lastName;
  
      setTimeout(() => {
        submitButton.click();
      }, 1000);
    }
  });


