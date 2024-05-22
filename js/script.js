

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu li a');
  
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
  });
  
 
  document.addEventListener('DOMContentLoaded', function() {
    var productsSection = document.querySelector('section.products');
  
    if (productsSection) {
        
        var products = [
            { id: 1, name: "Apple", description: "The Apple Watch is a versatile smartwatch that integrates health tracking, fitness monitoring, and seamless connectivity with your iPhone." },
            { id: 2, name: "Citizen", description: "The Citizen watch is a renowned timepiece known for its precision, innovative Eco-Drive technology, and elegant design." },
            { id: 3, name: "Rolex", description: "The Rolex watch is a prestigious luxury timepiece celebrated for its exceptional craftsmanship, timeless design, and reliability." }
        ];
  
        let productTable = productsSection.querySelector('table');
        products.forEach(function(product) {
            let row = document.createElement('tr');
  
            let cellName = document.createElement('td');
            cellName.textContent = product.name;
  
            let cellDescription = document.createElement('td');
            cellDescription.textContent = product.description;
  
            row.appendChild(cellName);
            row.appendChild(cellDescription);
  
            productTable.appendChild(row);
        });
    }
  });
  