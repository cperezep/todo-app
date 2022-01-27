function splitByCondition<T>(items: Array<T>, condition: (item: T) => boolean): T[][] {
  const matchGroup: Array<T> = [];
  const notMatchGroup: Array<T> = [];
  items.forEach((item: T) => (condition(item) ? matchGroup : notMatchGroup).push(item));

  return [matchGroup, notMatchGroup];
}

export { splitByCondition };
