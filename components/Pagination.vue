<template>
  <div class="box-paginate">
    <nav v-if="query != ''" class="pagination is-centered" role="navigation" aria-label="pagination">
            <a
                v-if="paginate.currentPage === 1"
                class="pagination-previous tulisan"
                disabled style="visibility: hidden">👈 Sebelumnya</a>
            <NuxtLink
                v-else
                :to="{ name: 'hal-hal', params: { hal: paginate.prevPage }, query: { cari: query }}"
                class="pagination-previous tulisan">
                👈 Sebelumnya
            </NuxtLink>
            <a
                v-if="paginate.currentPage === paginate.total"
                class="pagination-next tulisan"
                disabled="disabled">Selanjutnya 👉</a>
            <NuxtLink
                v-else
                :to="{ name: 'hal-hal', params: { hal: paginate.nextPage }, query: { cari: query }}"
                class="pagination-next tulisan">
                Selanjutnya 👉
            </NuxtLink>

            <ul class="pagination-list">
              <li class="linya">
                <NuxtLink
                  :to="`/hal/1?cari=${query}`"
                  class="pagination-next tulisan">
                  1
                </NuxtLink>
              </li>
              <li class="linya"><span class="pagination-ellipsis">&hellip;</span></li>
              <li class="linya">
                <NuxtLink
                  v-if="paginate.currentPage != 1"
                  :to="`/hal/${paginate.prevPage}?cari=${query}`"
                  class="pagination-link tulisan">
                  {{paginate.prevPage}}
                </NuxtLink>
              </li>
              <li class="linya"><a class="pagination-link is-current" :aria-label="`Page ${paginate.currentPage}`" aria-current="page">{{ paginate.currentPage }}</a></li>
              <li class="linya">
                <NuxtLink
                v-if="paginate.currentPage != paginate.total"
                  :to="`/hal/${paginate.nextPage}?cari=${query}`"
                  class="pagination-link tulisan">
                  {{paginate.nextPage}}
                </NuxtLink>
                </li>
              <li class="linya"><span class="pagination-ellipsis">&hellip;</span></li>
              <li class="linya">
                <NuxtLink
                  :to="`/hal/${paginate.total}?cari=${query}`"
                  class="pagination-link tulisan">
                  {{paginate.total}}
                </NuxtLink>
              </li>
            </ul>
    </nav>
    <nav v-else class="pagination is-centered" role="navigation" aria-label="pagination">
            <a
                v-if="paginate.currentPage === 1"
                class="pagination-previous tulisan"
                disabled style="visibility: hidden">👈 Sebelumnya</a>
            <NuxtLink
                v-else
                :to="{ name: 'hal-hal', params: { hal: paginate.prevPage }}"
                class="pagination-previous tulisan">
                👈 Sebelumnya
            </NuxtLink>
            <a
                v-if="paginate.currentPage === paginate.total"
                class="pagination-next tulisan"
                disabled="disabled">Selanjutnya 👉</a>
            <NuxtLink
                v-else
                :to="{ name: 'hal-hal', params: { hal: paginate.nextPage }}"
                class="pagination-next tulisan">
                Selanjutnya 👉
            </NuxtLink>

            <ul class="pagination-list">
              <li class="linya">
                <NuxtLink
                  :to="`/hal/1`"
                  class="pagination-next tulisan">
                  1
                </NuxtLink>
              </li>
              <li class="linya"><span class="pagination-ellipsis">&hellip;</span></li>
              <li class="linya">
                <NuxtLink
                  v-if="paginate.currentPage != 1"
                  :to="`/hal/${paginate.prevPage}`"
                  class="pagination-link tulisan">
                  {{paginate.prevPage}}
                </NuxtLink>
              </li>
              <li class="linya"><a class="pagination-link is-current" :aria-label="`Page ${paginate.currentPage}`" aria-current="page">{{ paginate.currentPage }}</a></li>
              <li class="linya">
                <NuxtLink
                v-if="paginate.currentPage != paginate.total"
                  :to="`/hal/${paginate.nextPage}`"
                  class="pagination-link tulisan">
                  {{paginate.nextPage}}
                </NuxtLink>
                </li>
              <li class="linya"><span class="pagination-ellipsis">&hellip;</span></li>
              <li class="linya">
                <NuxtLink
                  :to="`/hal/${paginate.total}`"
                  class="pagination-link tulisan">
                  {{paginate.total}}
                </NuxtLink>
              </li>
            </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    paginate: Object,
    query: String
  }
}
</script>
<style>
.box-paginate {
  background-color: #f8f8f8;
  margin-top: 15px;
  padding: 15px 15px 15px 15px;
  border-radius: 15px;
}

.dark-mode .box-paginate{
  background-color: #0d2538;
}

.tulisan {
  color: black;
}
.tulisan:hover {
  color: black;
  background-color: #e8f6ff;
}

.dark-mode  .tulisan {
  color: white;
}
.dark-mode .tulisan:hover {
  color: black;
  background-color: #e8f6ff;
}
</style>
