 const plus = document.querySelectorAll(".plus");
 const minus = document.querySelectorAll(".minus");
 const num = document.querySelectorAll(".num");
 const p_price = document.querySelectorAll('.p_price');
 const t_price = document.querySelectorAll(".t_price");
 const c_price = document.querySelector('.Cprice');
 const TT_price = document.querySelector('.TTprice');

// let a =1;

let sum = 0;
console.log(p_price);
p_price.forEach(ele =>{
    sum += parseInt(ele.innerText);
})
c_price.innerText = sum;

console.log(plus);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", () => {
        let a = parseInt(num[i].innerText);
        a++;
        a = (a < 10)
            ? "0" + a
            : a;
        num[i].innerText = a;
        console.log(a);
        const priceP = parseInt(p_price[i].innerText);
        const priceT = priceP*parseInt(num[i].innerText);
        const priceC = parseInt( c_price.innerText);
        
         t_price[i].innerText = priceT;
         c_price.innerText = priceC+priceP;
    });
}

  
 for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click", () => {
        let a = parseInt(num[i].innerText);
        if (a > 1) {
            a--;
            a = (a < 10)
                ? "0" + a
                : a;
            num[i].innerText = a;
        }

        const priceP = parseInt(p_price[i].innerText);
        const priceT = priceP*parseInt(num[i].innerText);
        const priceC = parseInt( c_price.innerText);
        
         t_price[i].innerText = priceT;
         c_price.innerText = priceC-priceP;
    })
}
