import {
  Status
} from 'Config/constants';

export function isEmpty(object): boolean {
  return (Object.keys(object).length === 0);
}

export function isRecentlyReady(previous, next): boolean {
  return previous.status == Status.WaitingOnServer && 
          next.status == Status.Ready
}

export function hasRecentlyFailed(previous, next): boolean {
  return previous.status != next.status && 
          next.status == Status.Failed
}