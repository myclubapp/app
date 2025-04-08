import {
  AuthService,
  Firestore,
  collection2 as collection,
  collectionData,
  deleteDoc2 as deleteDoc,
  doc2 as doc,
  orderBy,
  query,
  where
} from "./chunk-AMO7VPPH.js";
import {
  inject,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-PZUQX53K.js";

// src/app/services/firebase/helfer.service.ts
var _HelferService = class _HelferService {
  constructor(firestore = inject(Firestore), authService) {
    this.firestore = firestore;
    this.authService = authService;
  }
  /*getHelferPunkteList() {
    return this.authService.getUser$().pipe(
      take(1),
      tap((user) => {
        this.user = user;
      }),
      switchMap((user) => {
        if (!user) return of([]);
        return this.getUserHelferPunkteRefs(user);
      }),
      tap((helferPunkte) => console.log("helferPunkte:", helferPunkte)),
      
      catchError((err) => {
        console.error("Error in getTeamList:", err);
        return of([]); // Return an empty array on error
      })
    );
  }*/
  deleteHelferPunkt(clubId, helferPunktId) {
    const helferPunktRef = doc(this.firestore, `club/${clubId}/helferPunkte/${helferPunktId}`);
    return deleteDoc(helferPunktRef);
  }
  getUserHelferPunkteRefs(userId, clubId) {
    const helferPunkteRefList = collection(this.firestore, `club/${clubId}/helferPunkte`);
    const q = query(helferPunkteRefList, where("userId", "==", userId), orderBy("eventDate", "desc"));
    return collectionData(q, {
      idField: "id"
    });
  }
  getUserHelferPunkteRefsWithFilter(userId, clubId, dateFrom, dateTo) {
    const helferPunkteRefList = collection(this.firestore, `club/${clubId}/helferPunkte`);
    const q = query(helferPunkteRefList, where("userId", "==", userId), where("eventDate", ">=", dateFrom), where("eventDate", "<=", dateTo), orderBy("eventDate", "desc"));
    return collectionData(q, {
      idField: "id"
    });
  }
};
_HelferService.\u0275fac = function HelferService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HelferService)(\u0275\u0275inject(Firestore), \u0275\u0275inject(AuthService));
};
_HelferService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HelferService, factory: _HelferService.\u0275fac, providedIn: "root" });
var HelferService = _HelferService;

export {
  HelferService
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2FwcC9zZXJ2aWNlcy9maXJlYmFzZS9oZWxmZXIuc2VydmljZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5pbXBvcnQge1xuICBGaXJlc3RvcmUsXG4gIGNvbGxlY3Rpb24sXG4gIGNvbGxlY3Rpb25EYXRhLFxuICBkb2MsXG4gIGRlbGV0ZURvYyxcbn0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHtcbiAgT2JzZXJ2YWJsZSxcbn0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IG9yZGVyQnksIHF1ZXJ5LCB3aGVyZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEhlbGZlclNlcnZpY2Uge1xuICB1c2VyOiBVc2VyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpcmVzdG9yZTogRmlyZXN0b3JlID0gaW5qZWN0KEZpcmVzdG9yZSksXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7XG5cbiAgfVxuICAvKmdldEhlbGZlclB1bmt0ZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlciQoKS5waXBlKFxuICAgICAgdGFrZSgxKSxcbiAgICAgIHRhcCgodXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgfSksXG4gICAgICBzd2l0Y2hNYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gb2YoW10pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVc2VySGVsZmVyUHVua3RlUmVmcyh1c2VyKTtcbiAgICAgIH0pLFxuICAgICAgdGFwKChoZWxmZXJQdW5rdGUpID0+IGNvbnNvbGUubG9nKFwiaGVsZmVyUHVua3RlOlwiLCBoZWxmZXJQdW5rdGUpKSxcbiAgICAgIFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBnZXRUZWFtTGlzdDpcIiwgZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKFtdKTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IG9uIGVycm9yXG4gICAgICB9KVxuICAgICk7XG4gIH0qL1xuXG4gIGRlbGV0ZUhlbGZlclB1bmt0KGNsdWJJZDogc3RyaW5nLCBoZWxmZXJQdW5rdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBoZWxmZXJQdW5rdFJlZiA9IGRvYyh0aGlzLmZpcmVzdG9yZSwgYGNsdWIvJHtjbHViSWR9L2hlbGZlclB1bmt0ZS8ke2hlbGZlclB1bmt0SWR9YCk7XG4gICAgcmV0dXJuIGRlbGV0ZURvYyhoZWxmZXJQdW5rdFJlZik7IFxuICB9XG5cbiAgZ2V0VXNlckhlbGZlclB1bmt0ZVJlZnModXNlcklkOiBhbnksIGNsdWJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJJZCwgY2x1YklkKVxuICAgIGNvbnN0IGhlbGZlclB1bmt0ZVJlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgY2x1Yi8ke2NsdWJJZH0vaGVsZmVyUHVua3RlYFxuICAgICk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgICAgaGVsZmVyUHVua3RlUmVmTGlzdCxcbiAgICAgIHdoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSxcbiAgICAgIG9yZGVyQnkoXCJldmVudERhdGVcIiwgXCJkZXNjXCIpXG4gICAgKVxuICAgIHJldHVybiBjb2xsZWN0aW9uRGF0YShxLCB7XG4gICAgICBpZEZpZWxkOiBcImlkXCIsXG4gICAgfSkgYXMgT2JzZXJ2YWJsZTxhbnlbXT47XG4gIH1cblxuXG4gIGdldFVzZXJIZWxmZXJQdW5rdGVSZWZzV2l0aEZpbHRlcih1c2VySWQ6IGFueSwgY2x1YklkOiBzdHJpbmcsIGRhdGVGcm9tOiBUaW1lc3RhbXAsIGRhdGVUbzogVGltZXN0YW1wKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgLy8gIGNvbnNvbGUubG9nKHVzZXJJZCwgY2x1YklkLCBkYXRlRnJvbSwgZGF0ZVRvKVxuICAgIGNvbnN0IGhlbGZlclB1bmt0ZVJlZkxpc3QgPSBjb2xsZWN0aW9uKFxuICAgICAgdGhpcy5maXJlc3RvcmUsXG4gICAgICBgY2x1Yi8ke2NsdWJJZH0vaGVsZmVyUHVua3RlYFxuICAgICk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgICAgaGVsZmVyUHVua3RlUmVmTGlzdCxcbiAgICAgIHdoZXJlKFwidXNlcklkXCIsIFwiPT1cIiwgdXNlcklkKSxcbiAgICAgIHdoZXJlKFwiZXZlbnREYXRlXCIsIFwiPj1cIiwgZGF0ZUZyb20pLFxuICAgICAgd2hlcmUoXCJldmVudERhdGVcIiwgXCI8PVwiLCBkYXRlVG8pLFxuICAgICAgb3JkZXJCeShcImV2ZW50RGF0ZVwiLCBcImRlc2NcIilcbiAgICApXG4gICAgcmV0dXJuIGNvbGxlY3Rpb25EYXRhKHEsIHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KSBhcyBPYnNlcnZhYmxlPGFueVtdPjtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJNLElBQU8saUJBQVAsTUFBTyxlQUFhO0VBRXhCLFlBQ21CLFlBQXVCLE9BQU8sU0FBUyxHQUN2QyxhQUF3QjtBQUR4QixTQUFBLFlBQUE7QUFDQSxTQUFBLGNBQUE7RUFHbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFvQkEsa0JBQWtCLFFBQWdCLGVBQXFCO0FBQ3JELFVBQU0saUJBQWlCLElBQUksS0FBSyxXQUFXLFFBQVEsTUFBTSxpQkFBaUIsYUFBYSxFQUFFO0FBQ3pGLFdBQU8sVUFBVSxjQUFjO0VBQ2pDO0VBRUEsd0JBQXdCLFFBQWEsUUFBYztBQUVqRCxVQUFNLHNCQUFzQixXQUMxQixLQUFLLFdBQ0wsUUFBUSxNQUFNLGVBQWU7QUFFL0IsVUFBTSxJQUFJLE1BQ1IscUJBQ0EsTUFBTSxVQUFVLE1BQU0sTUFBTSxHQUM1QixRQUFRLGFBQWEsTUFBTSxDQUFDO0FBRTlCLFdBQU8sZUFBZSxHQUFHO01BQ3ZCLFNBQVM7S0FDVjtFQUNIO0VBR0Esa0NBQWtDLFFBQWEsUUFBZ0IsVUFBcUIsUUFBaUI7QUFFbkcsVUFBTSxzQkFBc0IsV0FDMUIsS0FBSyxXQUNMLFFBQVEsTUFBTSxlQUFlO0FBRS9CLFVBQU0sSUFBSSxNQUNSLHFCQUNBLE1BQU0sVUFBVSxNQUFNLE1BQU0sR0FDNUIsTUFBTSxhQUFhLE1BQU0sUUFBUSxHQUNqQyxNQUFNLGFBQWEsTUFBTSxNQUFNLEdBQy9CLFFBQVEsYUFBYSxNQUFNLENBQUM7QUFFOUIsV0FBTyxlQUFlLEdBQUc7TUFDdkIsU0FBUztLQUNWO0VBQ0g7OzttQ0FqRVcsZ0JBQWEsbUJBQUEsU0FBQSxHQUFBLG1CQUFBLFdBQUEsQ0FBQTtBQUFBO2tGQUFiLGdCQUFhLFNBQWIsZUFBYSxXQUFBLFlBRlosT0FBTSxDQUFBO0FBRWQsSUFBTyxnQkFBUDsiLAogICJuYW1lcyI6IFtdCn0K
