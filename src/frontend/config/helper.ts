export function isEmpty(object): boolean {
  return (Object.keys(object).length === 0);
}

export function firstLoad(previous, next): boolean {
  return previous.status == 'WAITING_ON_SERVER' && 
          next.status == 'READY'
}