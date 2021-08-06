export default function(instance) {
  return {
    signIn(payload) {
      return instance.get('/users/50', payload)
    },
    signUp(payload) {
      return instance.post('/users', payload)
    },
    // logOut() {
    //   return instance.delete('api/user')
    // }
  }
}