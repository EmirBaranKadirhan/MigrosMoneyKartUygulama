class mBase{
    indirimOrani = 24;
    constructor(isim,soyisim,kartVarmi,urunler){
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    fiyatiGetir(){
        let odenecekTutar = 0 ;

        if(this.urunVarmi(this.urunler)){
            
            if(this.kartVarmi){
                this.urunler.forEach((urun) =>{
                    odenecekTutar += (urun.urunFiyat *(100 - this.indirimOrani)/100);         //(urun.urunFiyat*(this.indirimOrani/100))
                    console.log(odenecekTutar)
                })
            }else{
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.urunFiyat;
                    console.log(odenecekTutar)
                })
            }
            
        }else{
            alert("Sepete Minimum Bir Urun Eklemelisiniz !!!");
        }
        return odenecekTutar;
    }


    urunVarmi(urunler){
        if(urunler != null && urunler.length > 0){
            return true;
        }else{
            return false;
        }
        
    }
}