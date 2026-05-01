
const inputHarga = document.getElementById("input-harga");

if (inputHarga) {
  inputHarga.addEventListener("input", function(e) {
    let angka = e.target.value.replace(/\D/g, "");
    if (angka === "") {
      e.target.value = "";
      return;
    }
    e.target.value = Number(angka).toLocaleString("id-ID");
  });
}


function hitungTotal() {
  let inputHarga = document.getElementById("input-harga").value;
  inputHarga = inputHarga.replace(/\D/g,"");
  let harga = Number(inputHarga);
  let inputVoucer = document.getElementById("input-voucer").value;
  let tampilanHarga = document.querySelector(".tampilanab1");
  let tampilanDiskon = document.querySelector(".tampilanab2");
  let tampilanVoucer = document.querySelector(".tampilanab3");
  let tampilanPajak = document.querySelector(".tampilanab4");
  let tampilanAdmin = document.querySelector(".tampilanab5");
  let tampilanTotal = document.querySelector(".tampilanab6");

  let diskon = 0;
  let voucer = 0;
  let pajak = 0;
  let admin = 0;
  
  if (isNaN(harga) || harga <= 0) {
  tampilanHarga.innerHTML = " Angka tidak valid";
  return;
}
  if (harga >= 800000) {
    diskon = harga * 0.2;
  } else if (harga >= 400000) {
    diskon = harga * 0.1;
  } else if (harga >= 200000) {
    diskon = harga * 0.05;
  }
  let pesanDiskon = "";
  if (diskon === 0) {
    pesanDiskon = "Tidak ada Diskon";
  }
  let setelahDiskon = harga - diskon;
  
  if (inputVoucer === "HEMAT50") {
    voucer = 50000;
  }
  let setelahVoucer = setelahDiskon - voucer;
  let pesanVoucer = "";
  if (voucer === 0) {
    pesanVoucer = "Tidak ada Voucer";
  }
  
  if (setelahVoucer >= 500000) {
    pajak = setelahVoucer * 0.05;
  }
  let setelahPajak = setelahVoucer + pajak;
  let pesanPajak = "";
  if (pajak === 0) {
    pesanPajak = "Tidak ada Pajak";
  }
  
  if (setelahPajak >= 500000) {
    admin = setelahPajak * 0.02;
  }
  let setelahAdmin = setelahPajak + admin;
  
  let pesanAdmin = "";
  if (admin === 0) {
    pesanAdmin = "Tidak ada Admin";
  }
  tampilanHarga.innerHTML = harga.toLocaleString("id-ID");

tampilanDiskon.innerHTML = diskon === 0 
  ? pesanDiskon 
  : diskon.toLocaleString("id-ID");

tampilanVoucer.innerHTML = voucer === 0 
  ? pesanVoucer 
  : voucer.toLocaleString("id-ID");

tampilanPajak.innerHTML = pajak === 0 
  ? pesanPajak 
  : pajak.toLocaleString("id-ID");

tampilanAdmin.innerHTML = admin === 0 
  ? pesanAdmin 
  : admin.toLocaleString("id-ID");

tampilanTotal.innerHTML = setelahAdmin.toLocaleString("id-ID");
}