const kredi = document.getElementById("kredi");
// console.log(kredi);

const vade = document.getElementById("vade");
// console.log(vade);

const tutar = document.getElementById("tutar");
// console.log(tutar);

const hesapla = document.querySelector(".btn-dark");
// console.log(hesapla);

const th0 = document.querySelectorAll(".th")[0];
const th1 = document.querySelectorAll(".th")[1];
const th2 = document.querySelectorAll(".th")[2];
const th3 = document.querySelectorAll(".th")[3];
const th4 = document.querySelectorAll(".th")[4];

hesapla.addEventListener("click", () => {
  if (!(kredi.value && vade.value && tutar.value)) {
    alert("Bilgileri eksiksiz giriniz!!!");
  } else {
    if (kredi.value === "ihtiyac") {
      th0.innerText = "İhtiyaç Kredisi";
      th1.innerText = tutar.value;
      th2.innerText = "%20";
      th3.innerText = vade.value;
      th4.innerText = `${(tutar.value * vade.value) / 12}`;
    } else if (kredi.value === "konut") {
      th0.innerText = "Konut Kredisi";
      th1.innerText = tutar.value;
      th2.innerText = "%10";
      th3.innerText = vade.value;
      th4.innerText = `${(tutar.value * vade.value) / 10}`;
    } else if (kredi.value === "tasit") {
      th0.innerText = "Taşıt Kredisi";
      th1.innerText = tutar.value;
      th2.innerText = "%25";
      th3.innerText = vade.value;
      th4.innerText = `${(tutar.value * vade.value) / 10}`;
    }
    document.querySelector(".tablo").style.display = "block";
    tutar.value = "";
    vade.value = "";
    kredi.value = "";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    hesapla.click();
  }
});
