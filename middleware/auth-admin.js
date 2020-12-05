export default async function({$auth, redirect}) { //,store
  let user =$auth.$state.user;
  if(user && user.admin) {
    //let the user in
    console.log('Test -> You are admin ok')
  } else {
    //TODO
    console.log('Test -> You not admin error')
    //store.dispatch('snackbar/setSnackbar', {color: 'error, text: "You must be admin to view that page"'})
    //redirect to /
    redirect('/')
  }
}
