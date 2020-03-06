import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/index",
      name: "productIndex",
      props: true,
      component: () => import("./../components/products/ProductIndex"),
      meta: {
        title: "Data Products"
      }
    },
    {
      path: "/detail/:id",
      name: "productDetail",
      component: () => import("./../components/products/ProductDetail"),
      meta: {
        title: "Detail Product"
      }
    },
    {
      path: "/form",
      name: "productForm",
      component: () => import("./../components/products/ProductForm"),
      meta: {
        title: "Add Product"
      }
    }
  ]
});
