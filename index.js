// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD02OIGVV74Z34S5ox2E09Y3_O1mNgpY4",
  authDomain: "altruistech-eec9c.firebaseapp.com",
  projectId: "altruistech-eec9c",
  storageBucket: "altruistech-eec9c.appspot.com",
  messagingSenderId: "154397714092",
  appId: "1:154397714092:web:6efc8545c40fcaaf57a109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Forms

  // Capture contact form submission event
  var contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form input values
    var name = contactForm.elements['name'].value;
    var email = contactForm.elements['email'].value;
    var message = contactForm.elements['message'].value;

    // Save the form data to Firestore
    db.collection('contactforms').add({
      name: name,
      email: email,
      message: message
    })
      .then(function (docRef) {
        console.log('Contact message saved with ID: ', docRef.id);
        // Optionally, display a success message or redirect to a thank you page
      })
      .catch(function (error) {
        console.error('Error adding contact message: ', error);
        // Optionally, display an error message to the user
      });

    // Reset the form
    contactForm.reset();
  });
