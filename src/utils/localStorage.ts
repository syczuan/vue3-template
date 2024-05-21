// 获取缓存
export function getStorage(key: string) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// 设置缓存
export function setStorage(key: string, value: any, callback?: CallableFunction) {
  localStorage.setItem(key, JSON.stringify(value));
  callback && callback();
}

// 删除缓存
export function removeStorage(key: string, callback?: CallableFunction) {
  localStorage.removeItem(key);
  callback && callback();
}
