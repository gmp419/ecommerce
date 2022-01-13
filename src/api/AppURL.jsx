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

}

export default AppURL;
