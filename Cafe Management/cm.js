class Product {
 
    constructor(name, price, stock) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
  
  }
  
  class CustomerProducts {
  
    constructor(customer_id, product, count) {
      this.customer_id = customer_id;
      this.product = product;
      this.count = count;
    }
  
  }
  
  class Cafe {
  
    constructor(products, balance) {
      this.products = products;
      this.balance = balance;
      //Maintain the customer history
      this.customer_products = [];
    }
  
   buyProduct(customer_id, product, count){
        let flag = 0;
        for(let i = 0; i < this.products.length; i++){
            if(this.products[i].name == product.name){
                flag = 1;
            }
        }
        if(flag == 0){
            return false;
        }
        if(count > product.stock){
            return false;
        }else{
          let cp = new CustomerProducts(customer_id, product, count);
          this.customer_products.push(cp);
          product.stock -= count;
          this.balance += (product.price * count);
          return true;
        }
    }
  
    returnProduct(customer_id, product, count){
        if (this.customer_products.length == 0){
            return false;
        }
        for(let i = 0; i < this.customer_products.length; i++){
            if((this.customer_products[i].customer_id == customer_id) && (this.customer_products[i].product.name == product.name)){
                if(this.customer_products[i].count == count){
                    customer_products.splice(i, 1);
                }else if(this.customer_products[i].count > count){
                    this.customer_products[i].count -= count;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
        product.stock += count;
        this.balance -= (product.price * count);
        return true;
    }
  
    getCurrentBalance(){
        return this.balance;
    }
  
  }