<template>
  <section class="section">
    <div class="container atas">
      <div style="position: relative;">
        <input v-model="query" class="input" type="text" placeholder="Cari username/caption tweet 🔎"/>
        <span v-if="show" class="removeInput" @click="removeSearchQuery">+</span>
      </div>
      <div v-if="$fetchState.pending" style="margin-top: 5px;">
        <div class="columns is-multiline" >
          <div v-for="n in 6" v-bind:key="n" class="column is-4" >
            <div class="card tweet-box penunggu-data-tweet">
              <div class="card-content">
                <div class="content">
                  Loading
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else class="columns is-multiline" style="margin-top: 5px;">
          <div class="column is-4" v-for="(twt) of tweet"
            v-bind:key="twt.ulid">
            <div class="card tweet-box">
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
    <div>
      <Pagination
        :paginate="paginate"
        :query="query"/>
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
      query: '',
      show: false,
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
  async fetch() {
    const param = this.$route.query.cari
      if (param !== '') {
        await this.$axios.get('/api/savedtweets', {
        params: {
          page: this.$route.params.hal,
          cari: param
        }
      })
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
      } else {
        await this.$axios.get('/api/savedtweets?page=' + this.$route.params.hal)
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
   watch: {
        query(after, before) {
            this.$fetch();
        }
    },
  mounted() {
    if (this.$route.query.cari !== undefined) {
      this.query = this.$route.query.cari;
      this.show = true;
    }
    // if (this.$route.params.hal === '1') {
    //             this
    //                 .$router
    //                 .push('/')
    // };
  },
  methods: {
    removeSearchQuery () {
      this.query = '';
      this.show = false;
    },
  },

}
</script>
