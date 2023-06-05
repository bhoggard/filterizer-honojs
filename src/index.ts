import { Hono } from 'hono'
import { html } from 'hono/html'


const app = new Hono()

app.get('/', (c) => c.html(
    html`<!DOCTYPE html>
      <h1>Hello!</h1>`
  )
)

export default app
