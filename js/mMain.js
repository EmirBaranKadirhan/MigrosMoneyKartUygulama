let mesaj = 

`
MIGROS'A HOSGELDINIZ MONEY KART'INIZ VAR MI?

1-EVET
2-HAYIR
`

const urunBilgiDOM = document.querySelector("#urunBilgi");
const h1DOM = document.querySelector("h1");
const h2DOM = document.querySelector("h2");
const ulDOM = document.querySelector("#myList")

const urunler = [
    {
        urunAdi : "Elma 1kg",
        urunFiyat : 35
    },
    {
        urunAdi : "Zeytinyagi 1Lt",
        urunFiyat : 250
    },
    {
        urunAdi : "Somon Balik 3 Adet",
        urunFiyat : 800
    },
    {
        urunAdi : "Ice Tea Seftali 1Lt",
        urunFiyat : 45
    },
    {
        urunAdi : "Toz Şeker 5 Kg",
        urunFiyat : 165
    },
    {
        urunAdi : "Antep Fıstıklı %60 Bitter Çikolata 65g",
        urunFiyat : 47.50
    },
    {
        urunAdi : "Yayla Çiçek Balı 460g",
        urunFiyat : 290
    },
    {
        urunAdi : "Domates Salçası 830g",
        urunFiyat : 50
    }
]



function harfDuzenle(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`
}

let sonuc = confirm(mesaj)
let toplamOdenecekTutar;

if(sonuc){
    let isim = prompt("Isminizi Giriniz")
    let soyisim = prompt("Soyisim Giriniz")

    isim = harfDuzenle(isim);
    soyisim = harfDuzenle(soyisim);

    const musteri = new mMusteri(isim,soyisim,sonuc,urunler);
    toplamOdenecekTutar = musteri.fiyatiGetir();

    h1DOM.textContent = `Sayin ${musteri.isim} ${musteri.soyisim}`
    h2DOM.textContent= ` Toplam Odemeniz Gereken Tutar : ${toplamOdenecekTutar.toFixed(2)} TL`  
    
    urunler.forEach((urun) =>{
        const li = document.createElement("li");
        const indirimliFiyatListe = urun.urunFiyat * (100-musteri.indirimOrani)/100; 
        li.textContent = `${urun.urunAdi} - Fiyat: ${urun.urunFiyat} TL ==> Indirimli Fiyat: ${indirimliFiyatListe} TL `;
        ulDOM.appendChild(li)
    })
    
}else{
    musteri = new mMusteri(null,null,sonuc,urunler);
    toplamOdenecekTutar = musteri.fiyatiGetir()

    h2DOM.textContent= ` Toplam Odemeniz Gereken Tutar : ${toplamOdenecekTutar} TL`  
    
    urunler.forEach((urun) =>{
        const li = document.createElement("li");
        li.textContent = `${urun.urunAdi} - Fiyat: ${urun.urunFiyat} TL`;
        ulDOM.appendChild(li)
    })
}