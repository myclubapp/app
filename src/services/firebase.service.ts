import { collection, getDocs, addDoc } from "firebase/firestore";
import { DocumentReference } from "firebase/firestore";

class FirebaseService {
  async addClubLink(clubId: string, link: any): Promise<DocumentReference> {
    const linksRef = collection(this.firestore, `club/${clubId}/links`);

    // Hole alle existierenden Links
    const linksSnapshot = await getDocs(linksRef);
    const currentOrder = linksSnapshot.size; // Die Größe der Collection gibt uns die Anzahl der Links

    const newLink = {
      order: currentOrder,
      ...link,
    };
    return addDoc(linksRef, newLink);
  }
}
