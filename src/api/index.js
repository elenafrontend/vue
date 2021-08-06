import instance from "./instance";
import authModule from "./auth"
import filmsFetch from "./films"

export default {
  auth: authModule(instance),
  films: filmsFetch(instance)
}