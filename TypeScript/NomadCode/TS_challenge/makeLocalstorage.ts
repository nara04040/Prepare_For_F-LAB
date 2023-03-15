interface LocalStorageAPI<T> {
  [key: string]: T;
}

abstract class LocalStorageAPIs {
  public storage: LocalStorageAPI<T> = {};

  constructor(storage: LocalStorageAPI<T>) {
    this.storage = storage;
  }
}
