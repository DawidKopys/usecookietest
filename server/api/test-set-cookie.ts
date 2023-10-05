// import { setCookie } from '#imports'
// import { setCookie } from '#imports'

export default defineEventHandler((event) => {
  console.log('test-set-cookie endpoint')

  setCookie(event, 'test-cookie', 'test-value', {
    expires: new Date(2024, 0, 13),
    sameSite: true,
  })

  return {
    hello: 'world'
  }
})