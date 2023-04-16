function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg")
}
  
document.addEventListener('DOMContentLoaded', () => { //sprječavanje izvršavanje js koda prije HTML koda
    const form = document.getElementById('formUser');
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Sprječavanje slanje obrasca na uobičajen način
  
      // Dohvaćanje vrijednosti polja obrasca
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;
      const file = document.querySelector('#upload-input').files[0];
  
      // Kreira se objekat koji sadrži podatke obrasca
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('file', file);

      console.log(name);
      console.log(email);
      console.log(message);
      console.log(file);
  
      // Brisanje polja obrasca nakon slanja
      document.querySelector('#name').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#message').value = '';
      document.querySelector('#upload-input').value = '';
      Swal.fire({
        title: 'Forma je uspješno poslana!',
        icon: 'success',
        showCloseButton: true,
        showConfirmButton: false,
        timer: 5000
    });
      
    });
});