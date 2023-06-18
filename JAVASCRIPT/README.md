# const , let , var

Const = Değişken için tanımlama , Değiştirilemez bir değişkendir! 

        const name = "mustafa";

        name = "deneme" ("Hata alırsın")

Let,var = Değiştirilebilir değişken!

const text = document.getElementById('text') // id numarasına göre text çağırıyor.
 console.log(text)
 const {default :axios} = require("axios");
 const name = "mustafa";
 const age = 20;
 const result = true;

//  name = "deneme"
// typeof kendisinden sonra gelen değişkenin tipini belirtir.
// Büyük harf ile belirtirsen Number,String() => parantez içerisine gelen değeri ona dönüştürür.
// name.substr(0,2) 0.dan sonra 2 tane karakteri al gerisini kes.
// 26 ? "eşitse" : "değilse"

// == eşit mi diye kontrol ediyor 
// === ek olarak tip kontrolü yapıyor

// console.log(name + String(age))

//Fonksiyonu tanımladığınız zaman fonksiyonu çağırsın!

        const nameFunc = () => {} 
        const nameFunc = () => {   // burda fonk oluşturduk.
            let age =26;
            if(age === 26){
        
         console.log("yaş 26")
    }
    
}


        nameFunc() //fonksiyonu çağırdım!

// obje içinde : kullanılır

        const obj = {
            name: "Mustafa",
            age: 26,
        }
        // console.log(obj)

        for(var i=0; i<10;i++){
        // console.log(i)
        }

        let count =10
        while(count>0){
            count--
            console.log(count)
        }

//(await = veriler gelene kadar bekliyor)
//get all adında veri çeken bir fonksiyon oluşturduk.

        const getAll = async () => {
        let arr = [] // verileri saklamak için boş array oluşturduk list 
        const data = await axios.get('https://restcountries.com/v3.1/all') // verileri data değişkenine atayıp axios ile çektik
        console.log(data) // veriler geliyor mu diye kontrol ettik 
          arr.push(data) // arrayin içine dataları pushladık 
          return arr
        }

//çalışması için dışarıda kullandık

        getAll()



