import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async (): Promise<string | null> => {
	return SecureStore.getItemAsync('ltoken');
};

export const saveToken = (token: string): void => {
	SecureStore.setItemAsync('ltoken', token);
};

export const deleteToken = (): void => {
	SecureStore.deleteItemAsync('ltoken');
};

/** ----------------STORE GLOBAL -------------- */
export const storeSave = async (key: string, value: any): Promise<void> => {
	try {
		const val =
			typeof value === 'number'
				? value.toString()
				: typeof value === 'string'
				? value
				: JSON.stringify(value);
		await AsyncStorage.setItem(key, val);
	} catch (e) {
		console.log('storeSaveJson:', e.message);
	}
};
/**
 * storeSave('@miVar', 'Value');
 */

export const storeGet = async (key: string): Promise<string> => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			return value;
		}
	} catch (e) {
		console.log('storeGetJson:', e.message);
	}
	return '';
};
/**
 * storeGet('@miVar').then((res) => {
 *  const data = typeof res === 'string' ? res : JSON.parse(res);
 * });
 */

export const storeRemove = async (key: string): Promise<boolean> => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (e) {
		console.log('storeRemoveJson:', e.message);
		return false;
	}
	return true;
};
/**
 * storeRemove('@miVar').then((res) => {
 *  const isRemoved = res;
 * });
 */

const getAllKeys = async () => {
	let keys: string[] = [];
	try {
		keys = await AsyncStorage.getAllKeys();
	} catch (e) {
		// read key error
	}
	console.log(keys);
	return keys;
};
export const storeRemoveAll = async (): Promise<boolean> => {
	const keys = getAllKeys();
	try {
		await AsyncStorage.multiRemove(await keys);
	} catch (e) {
		// remove error
		return false;
	}
	return true;
};
