const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
.then(res=>res.json())
.then(showProducts); 

function showProducts(products){
    //loop og kalder showProduct
    products.forEach(showProduct);
}

function showProduct(product){
   // console.log(product);
    //fange template
    const template = document.querySelector("#productInfoTemplate").content;
    //lav en kopi
    const copy = template.cloneNode(true);
    //ændre indhold
    copy.querySelector("h3").textContent  =product.productdisplayname;
    
    if (product.soldout){
        //produktet er udsolgt
        copy.querySelector("article").classList.add("soldOut");
    }
    copy.querySelector(".read-more").setAttribute("href",`product.hmtl?id=${product.id}`)
    //appende
    document.querySelector("main").appendChild(copy);
}

  /*

    <arcitle class="productInfo">
        <a href="products.html"> <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey"></a>
        <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
        <p class="productText"> T-shirt | Nike</p>
        <p class="price"> DDK 895,-</p>
        <a href="products.html">READ MORE </a>
    </arcitle>

    {
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
}
    */ 