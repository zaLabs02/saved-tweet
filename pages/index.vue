<template>
  <section class="section">
    <div class="container"  style="margin-top: 25px;">
      <div class="columns is-multiline">
          <div class="column is-4" v-for="(twt) of tweet"
            v-bind:key="twt.ulid">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <blockquote v-if="btnLabel === 'light'" class="twitter-tweet" data-theme="dark">
                    <a :href="twt.tweet_url"></a>
                  </blockquote>
                  <blockquote v-else class="twitter-tweet">
                    <a :href="twt.tweet_url"></a>
                  </blockquote>
                  <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <!-- <div class="container is-primary" style="margin-top: 20px;padding-bottom:-90px;max-width: 38.5rem;">

    </div> -->
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
  },
  data() {
    return {
      tweet: [],
      paginate: {
        total: 0,
        perPage: 0,
        currentPage: 1,
        nextPage: 0,
        prevPage: 0
      }
    }
  },
  computed: {
    mode() {
      return this.$colorMode;
    },
    btnLabel() {
      return this.$colorMode.preference === "light" ? "dark" : "light";
    }
  },
  methods: {
    getAllData () {
      this.$axios.get('/api/savedtweets')
        .then(response => {
          this.tweet = response.data.data
          this.paginate.total = response.data.pagination.total_pages
          this.paginate.perPage = response.data.pagination.per_page
          this.paginate.currentPage = response.data.pagination.current_page
          this.paginate.nextPage = response.data.pagination.current_page + 1
          this.paginate.prevPage = response.data.pagination.current_page - 1
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.getAllData()
  },
}
</script>
