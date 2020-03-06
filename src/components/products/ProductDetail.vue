<template>
  <div class="mt-4 p-4">
    <h1 class="mb-4">Detail Product</h1>
    <table class="table col-sm-12">
      <tbody>
        <tr>
          <td>ID</td>
          <td>{{ product.id }}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{{ product.name }}</td>
        </tr>
        <tr></tr>
        <tr>
          <td>Description</td>
          <td>{{ product.description }}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td>{{ product.price }}</td>
        </tr>
        <tr>
          <td>Images</td>
          <td>
            <span
              v-for="(imgDetail, ixDetail) in product.images"
              :key="ixDetail"
            >
              <span v-for="(v, i) in imgDetail" :key="i">
                <b-img v-bind="imageStyle" :src="v.img" :alt="product.name" />
              </span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductService from "./../../services/ProductService";

export default {
  name: "productIndex",
  title: "Detail Product",
  data() {
    return {
      product: {},
      imageStyle: {
        width: 100,
        height: 100
      }
    };
  },
  methods: {
    async getById(id) {
      await ProductService.getById(id)
        .then(res => {
          this.product = res.data.result;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.product = "";
    // console.log("param id:" + this.$route.params.id);
    this.getById(this.$route.params.id);
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
