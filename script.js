function hitungTotal() {
  let inputHarga = document.getElementById("input-harga").value;
  let harga = Number(inputHarga);
  let tampilanHarga = document.querySelector(".nama1").innerHTML;
  let tampilanDiskon = document.querySelector(".nama2").innerHTML;
  let tampilanVoucer = document.querySelector(".nama3").innerHTML;
  let tampilanPajak = document.querySelector(".nama4").innerHTML;
  let tampilanAndim = document.querySelector(".nama5").innerHTML;
  let tampilanTotal = document.querySelector(".nama6").innerHTML;
 
  let diskon = 0;
  let voucer = 0;
  let pajak = 0;
  let admin = 0;
  
  if (inputHarga === "") {
    tampilanHarga.innerHTML = "Masukkan Harga disini";
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
    tampilanDiskon.innerHTML = "Tidak ada Diskon";
  }
  let setelahDiskon = harga - diskon;
  
  if (voucer === "HEMAT50") {
    voucer = 50000;
  }
  let setelahVoucer = setelahDiskon - voucer;
  let pesanVoucer = "";
  if (voucer === 0) {
    tampilanVoucer.innerHTML = " Tidak ada Voucer";
  }
  
  if(setelahVoucer >= 500000) {
    pajak = setelahVoucer * 0.05;
  }
  let setelahPajak = setelahVoucer + pajak;
  let pesanPajak = "";
  if (pajak ==== 0) {
    tampilanPajak.innerHTML = " Belanja di bawah Rp.500.000 tifak kena pajak";
  }
  
  if (setelahPajak >= 500000) {
    admin = setelahPajak * 0.02;
  }
  let setelahAdmin = setelahPajak + admin;
  let tampilanTotal.innerHTML = setelahAdmin;
}