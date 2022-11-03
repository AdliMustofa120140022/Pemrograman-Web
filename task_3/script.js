// 1. Membuat Teks (Manipulasi Element)
const judul = document.getElementById("judul"); // Deklarasi Variabel 
judul.innerHTML = 'PORTOFOLIO'; // innerHTML

function terimakasih(){
  // 2. Membuat Element (Manipulasi Node)
  const div = document.createElement('p'); // Deklarasi Variabel untuk membuat elements
  const teksDiv = document.createTextNode('Terimakasih!'); // Deklarasi Variabel untuk mengisi teks

  div.appendChild(teksDiv); // Fungsi untuk memasukkan isi teks kedalam element yg telah dibuat

  const cetak = document.getElementById("tombol1"); // Deklarasi Variabel untuk mencetak element yg telah dibuat

  cetak.appendChild(div); // Fungsi untuk mencetak element yg telah dibuat
}

const tombol2 = document.getElementById("tombol2");

function ubahtampilan() {
  var styles = `html{margin: 0;padding: 0;}
  body {
    font-family: bahnschrift;
    background-color: rgb(219, 212, 143);
  }
  .box1{
    background-color: rgb(162, 181, 207);
    margin: 10px 10px 10px 10px;
    border-radius: 25px;
    padding: 30px;
    width: 700px;
    box-shadow: 0 12.5px 20px 1px rgba(0, 0, 0, 0.3);
    
  }
  .box1:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  .button {
    background-color: #3e647e;
    border: none;
    color: white;
    padding: 10px 40px;
    margin-top: 20px;
    text-align: center;
    text-decoration: none;
    align-items: center;
    font-size: 16px;
    margin: 20px auto 0;
    cursor: pointer;
    border-radius: 12px;
  }
  .button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  img{
    border-radius : 20px
  }
  `;
  var styleSheet = document.querySelector("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// 3. Events Handler (Click di HTML)
tombol1.addEventListener("click", terimakasih);
tombol2.addEventListener("click", ubahtampilan);
