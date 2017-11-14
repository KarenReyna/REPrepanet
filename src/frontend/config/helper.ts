import {
  Status,
  User
} from 'Config/constants';

export function containsOnlyIsAdmin(user: User): boolean {
  return !user.name && !user.email && !user.password && user.isAdmin != undefined;
}

export function isEmpty(object): boolean {
  return !object || (Object.keys(object).length === 0) || object == null;
}

export function isRecentlyReady(previous, next): boolean {
  return previous.status != next.status && 
          next.status == Status.Ready
}

export function hasRecentlyFailed(previous, next): boolean {
  return previous.status != next.status && 
          next.status == Status.Failed
}