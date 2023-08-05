//2622. Cache With Time Limit

var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const cacheValue = this.cache.get(key);
  if (cacheValue) {
    clearTimeout(cacheValue.timeout);
  }
  const timeout = setTimeout(() => {
    this.cache.delete(key);
  }, duration);
  this.cache.set(key, { value, timeout });
  return Boolean(cacheValue);
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

var obj = new TimeLimitedCache();
obj.set(1, 42, 1000); // false
console.log(obj.get(1)); // 42
console.log(obj.count()); // 1
