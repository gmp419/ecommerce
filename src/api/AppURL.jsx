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


}

export default AppURL;
