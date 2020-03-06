<template>
  <div class="mt-4 p-4">
    <h1 class="mb-4">Data Products</h1>
    <table class="table table-striped col-sm-12">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Images</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in products" :key="index" class="text-left">
          <td>{{ index + 1 }}</td>
          <td>
            <a href="#" @click="detail(row.id)">{{ row.id }}</a>
          </td>
          <td>{{ row.name }}</td>
          <td>
            {{ row.description }}
          </td>
          <td>{{ row.price }}</td>
          <td style="width:600px">
            <span v-for="(imgDetail, ixDetail) in row.images" :key="ixDetail">
              <span v-for="(v, i) in imgDetail" :key="i">
                <b-img v-bind="imageStyle" :src="v.img" :alt="row.name" />
              </span>
            </span>
          </td>
          <td class="text-center" style="width:200px">
            <button class="btn btn-warning" @click="edit(row)">Edit</button>
            ||
            <button class="btn btn-danger" @click="remove(row)">Delete</button>
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
  title: "Data Products",
  // props: ["propA"],
  data() {
    return {
      products: {},
      imageStyle: {
        width: 100,
        height: 100
      }
    };
  },
  methods: {
    getAll() {
      return ProductService.getAll()
        .then(res => {
          this.products = res.data.result;
        })
        .catch(e => {
          console.log(e);
        });
    },
    async detail(id) {
      await this.$router.push({
        path: "/detail/" + id,
        params: {
          id: id
        }
      });
    },
    async remove(product) {
      return ProductService.delete(product.id)
        .then(() => {
          this.getAll();
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.products = "";
    this.getAll();
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
