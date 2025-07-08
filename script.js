const firebaseConfig = {
  apiKey: "AIzaSyB628by_Jbl8lpJdi8dgi04j0Ltv1MgWUo",
  authDomain: "motomind-ba6a1.firebaseapp.com",
  projectId: "motomind-ba6a1",
  storageBucket: "motomind-ba6a1.firebasestorage.app",
  messagingSenderId: "605111644804",
  appId: "1:605111644804:web:ebb4f1ca3260438bd308d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

fetch('bike_maintenance.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#maintenance-table tbody');
        data.forEach(service => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${service.date}</td>
                <td>${service.total_kilometer}</td>
                <td>${service.service_number}</td>
                <td>${service.next_service_km}</td>
                <td>
                    <ul>
                        ${service.items.map(item => `<li>${item.item}: ${item.name || ''} (${item.quantity} ${item.unit}) - ₹${item.total_cost}</li>`).join('')}
                    </ul>
                </td>
                <td>₹${service.total_invoice}</td>
            `;
            tableBody.appendChild(row);
        });
    });