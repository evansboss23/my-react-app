export default function Login() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form style={{ maxWidth: 320 }}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    </main>
  )
}
