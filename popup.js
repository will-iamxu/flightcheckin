chrome.storage.local.get(['confirmationNumber', 'firstName', 'lastName', 'flightDateTime'], (result) => {
  document.getElementById('confirmationNumber').value = result.confirmationNumber || '';
  document.getElementById('firstName').value = result.firstName || '';
  document.getElementById('lastName').value = result.lastName || '';
  document.getElementById('flightDateTime').value = result.flightDateTime || '';
});

document.getElementById('flight-details-form').addEventListener('submit', (e) => {
  e.preventDefault();

  let confirmationNumber = document.getElementById('confirmationNumber').value;
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let flightDateTime = document.getElementById('flightDateTime').value;

  // Validation
  if (!/^[\da-z]{6}$/i.test(confirmationNumber)) {
    alert('Please enter a valid confirmation number.');
    return;
  }

  chrome.storage.local.set({
    confirmationNumber: confirmationNumber,
    firstName: firstName,
    lastName: lastName,
    flightDateTime: flightDateTime
  }, () => {
    chrome.runtime.sendMessage({ type: 'SET_ALARM', flightDateTime: flightDateTime });
    alert('Flight details saved.');
  });
});
