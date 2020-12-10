import _ from 'loadsh';

export function pagination(itemCounts,pageSize,currentPage) {
  return _.chunk(itemCounts,pageSize)[currentPage-1];
}