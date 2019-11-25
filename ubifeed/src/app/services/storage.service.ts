import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) { }

  async setObject(key: string, user: Object): Promise<any> {
    try {
      const result = await this.storage.set(key, user);
      console.log('User object set in local storage' + result);
      return true;
    } catch(ex) {
      console.log(ex);
      return false;
    }
  }

  async getObject(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      console.log('retrieving user from storage' + result);
      if (result != null) {
        return result;
      }
      return null;
    } catch(ex) {
      console.log(ex);
      return null;
    }
  }

  removeObject(key: string) {
    try {
      this.storage.remove(key);
    } catch(ex) {
      console.log(ex);
    }
  }

  async setKeyValue(key: string, value: string): Promise<any> {
    try {
      const result = await this.storage.set(key, value);
      return true;
    } catch(ex) {
      console.log(ex);
      return null;
    }
  }

  async getKeyValue(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return result;
      }
      return null;
    } catch(ex) {
      console.log(ex);
      return null;
    }
  }
}
