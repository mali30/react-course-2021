import _ from 'lodash';

/**
 * @param {[]} items The array you are paginating 
 * @param {Integer} pageNumber the current page 
 * @param {Integer} pageSize the size of items to display on the page
 * @returns {[]} a new paginated array
 */
export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    console.log('startIndex', startIndex)
    console.log('pageNumber', pageNumber);
    console.log('pageSize', pageSize);
    console.log('items', items);
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}