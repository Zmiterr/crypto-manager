import Router from 'next/router'

const redirect = async (...params: Parameters<typeof Router.push>) => {
  return Router.push(...params)
}

export default redirect
