<template>
  <div class="container">
    <div class="row">
      <div style="font-size: 35px; font-weight: 700">devfinder</div>
      <div class="row left">
        <!-- <theme-changer></theme-changer> -->
        <ThemeChanger />
      </div>
    </div>
    <form>
      <svg
        class="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style="fill: rgb(1, 117, 245)"
      >
        <path
          d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
        ></path>
      </svg>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search Github Username..."
        v-model="store.username"
      />
      <Button style="margin-left: auto" @getUser="store.getUser()" />
    </form>
    <div class="col profile">
      <div class="profile_details">
        <div class="image" v-if="store.users.avatar_url == ''">
          <img src="@/assets/octocat.png" />
        </div>
        <div class="image" v-else>
          <img :src="store.users.avatar_url" />
        </div>

        <div class="col details">
          <div class="col username">
            <h1 style="font-size: 30px; font-weight: 700">{{ store.users.name }}</h1>
            <div style="color: var(--accent-color)">@{{ store.users.login }}</div>
          </div>
          <div style="margin-top: 10px">
            Joined <span>{{ store.formatDate }}</span>
          </div>
        </div>
      </div>

      <div class="writing part" v-if="store.users.bio != null">
        {{ store.users.bio }}
      </div>
      <div class="writing part" style="color: var(--greyed-out)" v-else>This user has no bio</div>

      <div class="repos row part">
        <div class="col space">
          <p>Repos</p>
          <h2>{{ store.users.public_repos }}</h2>
        </div>
        <div class="col space">
          <p>Followers</p>
          <h2>{{ store.users.followers }}</h2>
        </div>
        <div class="col space">
          <p>Following</p>
          <h2>{{ store.users.following }}</h2>
        </div>
      </div>
      <div class="bottom part">
        <div class="section">
          <div class="item" v-if="store.users.location != null">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: var(--text-primary-color)"
            >
              <path
                d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              ></path>
            </svg>
            <p>{{ store.users.location }}</p>
          </div>
          <div class="item" v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: var(--greyed-out)"
            >
              <path
                d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
              ></path>
            </svg>
            <p style="color: var(--greyed-out)">Not available</p>
          </div>

          <div class="item" v-if="store.users.blog != ''">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: var(--text-primary-color)"
            >
              <path
                d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"
              ></path>
              <path
                d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"
              ></path>
            </svg>
            <p>{{ store.users.blog }}</p>
          </div>
          <div class="item" v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: var(--greyed-out)"
            >
              <path
                d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"
              ></path>
              <path
                d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"
              ></path>
            </svg>
            <p style="color: var(--greyed-out)">Not available</p>
          </div>
        </div>
        <div class="section">
          <div class="item" v-if="store.users.twitter_username != null">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: var(--text-primary-color)"
            >
              <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
              ></path>
            </svg>
            <p>{{ store.users.twitter_username }}</p>
          </div>
          <div class="item" v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: var(--greyed-out)"
            >
              <path
                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
              ></path>
            </svg>
            <p style="color: var(--greyed-out)">Not available</p>
          </div>

          <div class="item" v-if="store.users.company != null">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: var(--text-primary-color)"
            >
              <path
                d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"
              ></path>
              <path
                d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"
              ></path>
            </svg>
            <p>{{ store.users.company }}</p>
          </div>
          <div class="item" v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: var(--greyed-out)"
            >
              <path
                d="M19 2H9c-1.103 0-2 .897-2 2v6H5c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zM5 12h6v8H5v-8zm14 8h-6v-8c0-1.103-.897-2-2-2H9V4h10v16z"
              ></path>
              <path
                d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 .001h2v2H7z"
              ></path>
            </svg>
            <p style="color: var(--greyed-out)">Not available</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ThemeChanger from '../components/ThemeChanger.vue'
import Button from './AppButton.vue'
import { useUserStore } from '../stores/user_details'
const store = useUserStore()
console.log(store.users)
</script>

<style scoped>
* {
  color: var(--text-primary-color);
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-family: 'Space Mono', sans-serif;
  font-size: 18px;
}
.container {
  display: flex;
  margin: 0 auto;
  width: 80%;
  max-width: 950px;
  flex-direction: column;
  gap: 20px;
}
.row {
  display: flex;
  align-items: center;
}
.left {
  margin-left: auto;
  gap: 15px;
}
form {
  width: calc(100% - 12px);
  padding: 10px 6px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: var(--background-color-secondary);
}
input {
  border: none;
  flex-grow: 2;
  background-color: var(--background-color-secondary);
  color: var(--text-primary-color);
  font-family: 'Space Mono', sans-serif;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: var(--text-primary-color);
  opacity: 0.7;
  font-family: 'Space Mono', sans-serif;
}
.search-icon {
  margin-right: 12px;
  margin-left: 15px;
}
.col {
  display: flex;
  flex-direction: column;
}
.image {
  width: 28%;
  height: 7em;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.details {
  width: 62%;
  gap: 10px;
}
.profile_details {
  display: flex;
  gap: calc(100% - 90%);
}
.profile {
  padding: 2.5em;
  background-color: var(--background-color-secondary);
  gap: 25px;
  border-radius: 15px;
}
.repos {
  background-color: var(--background-color-primary);
  border-radius: 10px;
  padding: 1em 2.5em;
  justify-content: space-between;
}
.writing {
  line-height: 2;
}
.space {
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
}
.item {
  display: flex;
  gap: 1rem;
}
.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.bottom {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
.space > h2 {
  font-weight: 700;
  font-size: 22px;
}
.space > p {
  font-size: 16px;
}
.username {
  gap: 5px;
}

@media screen and (min-width: 767px) {
  .image {
    width: 20%;
    height: 8rem;
  }
  .details {
    width: 70%;
  }
  .bottom {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 15%;
  }
}
@media screen and (min-width: 1024px) {
  .details {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 74%;
    position: relative;
    left: calc(100% - 72%);
  }
  /* .profile_details{
    gap: calc(100% - 94%);
}  */
  .image {
    width: 15%;
    height: 10rem;
    position: absolute;
  }
  .part {
    margin-left: calc(100% - 72%);
  }
}
</style>
