<template>
    <b-navbar class="quicksand">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="~assets/twt.png"
                    alt="Afrizals Blog"
                    class="gambarnya"></b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <NuxtLink to="/posts" class="navbar-item linknya" style="color: white">
                            ✍️ Writings
                        </NuxtLink>
                        <NuxtLink to="/videos" class="navbar-item linknya" style="color: white">
                            📽️ Videos
                        </NuxtLink>
                        <NuxtLink to="/about" class="navbar-item linknya" style="color: white">
                            🤵 About
                        </NuxtLink>
                        <NuxtLink to="/search" class="navbar-item linknya" style="color: white">
                            🔎 Search
                        </NuxtLink>
                    </div>
                </b-navbar-item>
          </template>
    </b-navbar>
</template>
<script>
export default {
  name: 'NavBarnya'
}
</script>
<style>
.gambarnya{
  height: auto;
  width: auto;
}
.navbar-item.linknya:hover{
  background-color: #6670AD;
}
.navbar-burger.burger{
  color: white;
}
.linknya {
        background: #28264c;
        color: aliceblue;
        margin-right:10px;
        margin-left:10px;
        margin-bottom:10px;
    }
@media screen and (max-width: 768px) {

.navbar-menu {
    background-color: #209787;
    color: white !important;
    box-shadow: 1px 1px 15px rgb(0, 255, 42), 0 0 15px red, 0 0 5px rgb(0, 255, 42);
 }
}
</style>
