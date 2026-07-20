export default function Signup() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Sign Up</h1>
      <form style={{ maxWidth: 360 }}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <br />
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
        <button type="submit">Create account</button>
      </form>
    </main>
  )
}
