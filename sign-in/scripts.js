import { supabase } from '../libs/supabase.js'

async function SignInAPI() {
  const email = document.getElementById('LOGIN_ID').value
  const password = document.getElementById('LOGIN_PW').value

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return alert(error)
  }

  location.href = '/'
}

const button = document.getElementById('LOGIN_BTN')
button.addEventListener('click', SignInAPI)
