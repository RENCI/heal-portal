"use strict"

module.exports = {
  test: ctx => {
    ctx.send({ message: 'ok!' })
  },
  logout: async ctx => {
    ctx.cookies.set('token', null)
    ctx.send({
      authorized: true,
      message: "Session successfully destroyed."
    })
  },
}