<template>
  <div class="mt-4 p-4">
    <form class="text-left">
      <div class="form-group row">
        <label for="" class="col-sm-1 col-form-label">Add New Product</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="form.url" />
        </div>
        <div class="col-sm-2">
          <button type="button" @click="save" class="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ProductService from "./../../services/ProductService";

export default {
  name: "productForm",
  title: "Add Product",
  data() {
    return {
      form: {
        url: ""
      }
    };
  },
  methods: {
    async save() {
      event.preventDefault();
      var data = {
        url: this.form.url
      };

      await ProductService.grab(data)
        .then(res => {
          let product = res.data.result;
          this.$router.push({
            path: "/detail/" + product.id,
            params: {
              id: product.id
            }
          });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
