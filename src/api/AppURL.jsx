class AppURL {
  static BaseURL = "http://localhost:8000/api";

  static getVisitors = this.BaseURL + "/getvisitor";

  static contact_us = this.BaseURL + "/contact-us";

  static siteInfo = this.BaseURL + "/site-info";

  static getCategories = this.BaseURL + "/category";

  static getCategoriesByRemark(remark) {
    return this.BaseURL + "/product-by-remark/" + remark;
  }

  static getCategoriesByCategory(category) {
    return this.BaseURL + "/product-by-category/" + category;
  }

  static getCategoriesBySubcategory(category, subcategory) {
    return (
      this.BaseURL + "/product-by-subcategory/" + category + "/" + subcategory
    );
  }

  static getSliderImages = this.BaseURL + "/slider-images";

  static getProductDetails(code) {
    return this.BaseURL+"/product-details/"+code;
  }

  static notification = this.BaseURL + "/notification";

  static searchItem(key) {
    return this.BaseURL + "/search/" + key;
  }

  static login = this.BaseURL + "/login";

  static register = this.BaseURL + "/register";

  static forget_password = this.BaseURL + "/forget-password";

  static UserResetPassword = this.BaseURL+"/reset-password"

  static getUser = this.BaseURL + "/user";

  static similarProduct(code) {
    return this.BaseURL + "/suggested-product/" + code;
  }

  static reviews(code) {
    return this.BaseURL + "/review/" + code;
  }

  static add_to_cart = this.BaseURL + "/add-to-cart";

  static cartCount(email) {
    return this.BaseURL + "/cart-count/" + email;
  }

  static cartList(email) {
    return this.BaseURL + "/cart-list/" + email;
  }

  static deleteFromCart(email, id) {
    return (
      this.BaseURL + "/remove-cart-item/" + email + "/" + id
    );
  }

  static addToFavourite(product_code, email) {
    return (
      this.BaseURL + "/add-to-favorite/" + product_code + "/" + email
    );
  }

  static favouriteList(email) {
    return this.BaseURL + "/favorite-list/" + email;
  }

  static removeFavourite(product_code, email) {
    return (
      this.BaseURL + "/remove-favorite/" + product_code + "/" + email
    );
  }

  static cartItemPlus(id, quanity, price) {
    return (
      this.BaseURL + "/cartItemPlus/" + id + "/" + quanity + "/" + price
    );
  }

  static cartItemMinus(id, quanity, price) {
    return (
      this.BaseURL + "/cartItemMinus/" + id + "/" + quanity + "/" + price
    );
  }

  static order(email) {
    return this.BaseURL + "/order/" + email;
  }



}

export default AppURL;
