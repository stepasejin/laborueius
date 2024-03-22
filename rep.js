// 'cache' refers to a specific Cache object.
// 'event.request' is the request you want to match in the cache.
cached = await cache.match(event.request);
