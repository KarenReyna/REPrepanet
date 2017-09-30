export function login(state = {open: false}, action: any) {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return {
        open: true
      }
    case 'CLOSE_LOGIN':
      return {
        open: false
      }
    default:
      return state
  }
}