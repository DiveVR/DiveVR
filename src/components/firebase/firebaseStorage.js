import {storage} from './firebaseInit';

export function readFile(fileName) {
    const pathReference = storage.ref(fileName)
    return pathReference.getDownloadURL()
}