import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/94.55.132.38
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

const nesneliFonksiyon = (nesne) => {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  const flagImg = document.createElement("img");
  flagImg.setAttribute("src", "https://flagsapi.com/TR/shiny/64.png");
  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.setAttribute("class", "card-info");
  const h3 = document.createElement("h3");
  h3.setAttribute("class", "ip");
  h3.textContent = nesne["sorgu"];
  const pUlke = document.createElement("p");
  pUlke.setAttribute("class", "ulke");
  pUlke.textContent = nesne["ülke"] + "(" + nesne["ülkeKodu"] + ")";
  const pEnlem = document.createElement("p");
  pEnlem.textContent =
    "Enlem: " + nesne["enlem"] + " Boylam: " + nesne["boylam"];
  const pSehir = document.createElement("p");
  pSehir.textContent = "Sehir: " + nesne["şehir"];
  const pSaat = document.createElement("p");
  pSaat.textContent = "Saat Dilimi: " + nesne["saatdilimi"];
  const pPara = document.createElement("p");
  pPara.textContent = "Para Birimi: " + nesne["parabirimi"];
  const pIsp = document.createElement("p");
  pIsp.textContent = "ISP : " + nesne["isp"];

  cardInfoDiv.append(h3, pUlke, pEnlem, pSehir, pSaat, pPara, pIsp);
  cardDiv.append(flagImg);
  cardDiv.append(cardInfoDiv);

  console.log("Card oluşturuldu. 4");

  return cardDiv;
};

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

console.log("Axios Öncesi :1 ");
axios
  .get("https://apis.ergineer.com/ipgeoapi/85.105.61.97")
  .then((response) => {
    console.log("Axios Döndü : 2");
    document.querySelector(".cards").append(nesneliFonksiyon(response.data));
    return response.data;
  });

console.log("Axios Sonrası : 3");

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
