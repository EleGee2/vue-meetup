<template>
  <div>
    <AppHero />
    <div
      v-if="pageLoader_isDataLoaded"
      class="container"
    >
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">
            Featured Meetups in "Location"
          </h1>
          <AppDropdown />
          <router-link
            v-if="user"
            class="button is-primary is-pulled-right m-r-sm"
            :to="{name: 'PageMeetupCreate'}"
          >
            Create Meetups
          </router-link>
          <router-link
            :to="{name: 'PageMeetupFind'}"
            class="button is-primary is-pulled-right m-r-sm"
          >
            All
          </router-link>
        </div>
        <div class="row columns is-multiline">
          <MeetupItem
            v-for="(meetup, _id) in meetups"
            :key="_id"
            :meetup="meetup"
          />
        </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">
            Categories
          </h1>
          <div class="columns cover is-multiline is-mobile">
            <!-- Categories -->
            <CategoryItem
              v-for="(category, _id) in categories"
              :key="_id"
              :category="category"
            />
          </div>
        </div>
      </section>
    </div>
    <div
      v-else
      class="container"
    >
      <AppSpinner />
    </div>
  </div>
</template>

<script>
  import CategoryItem from '@/components/CategoryItem'
  import MeetupItem from '@/components/MeetupItem'
  import { mapActions, mapState, mapGetters } from 'vuex'
  import pageLoader from '@/mixins/pageLoader'

  export default {
    components: { CategoryItem, MeetupItem},

    mixins: [ pageLoader ],

    computed: {
      ...mapGetters({
        'user': 'auth/authUser'
      }),
      ...mapState({
        meetups: (state) => state.meetups.items,
        categories: (state) => state.categories.items

      })
    },

    created() {
      Promise.all([this.fetchMeetups(), this.fetchCategories()])
        .then((results) => {
          this.pageLoader_resolveData()})
        .catch((err) => {
          console.error(err)
          this.pageLoader_resolveData()
        })
    },

    methods: {
      ...mapActions('meetups', ['fetchMeetups']),
      ...mapActions('categories', ['fetchCategories'])

    }
  }
</script>

<style scoped>

</style>
