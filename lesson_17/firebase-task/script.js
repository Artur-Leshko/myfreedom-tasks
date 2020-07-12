// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBAmzqDTptdT8d_SdeCUoSBZshVoI7jnHw",
    authDomain: "myfirstproject-835e1.firebaseapp.com",
    databaseURL: "https://myfirstproject-835e1.firebaseio.com",
    projectId: "myfirstproject-835e1",
    storageBucket: "myfirstproject-835e1.appspot.com",
    messagingSenderId: "415155490365",
    appId: "1:415155490365:web:7ff3d9d08efe5ca720a454",
    measurementId: "G-RJZYT3FK7T"
};

// Initialize Firebase with a default Firebase project
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function readAllData() {
    return db.collection("Artur").get();
}

function showData() {
    let ul = document.querySelector('ul');
    ul.innerHTML = null;
    readAllData().then((tasks) => {
      tasks.forEach((doc) => {
        let li = document.createElement('li');
        li.textContent = `Имя: ${doc.data().name}; возраст: ${doc.data().age}`;
        li.style.marginTop = '1rem';
        ul.append(li);
      });
    });
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.querySelector('.name').value;
    let age = document.querySelector('.age').value;

    db.collection("Artur").add({
        name: name,
        age: age
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    document.querySelector('.name').value = '';
    document.querySelector('.age').value = '';

    showData();
});

showData();
