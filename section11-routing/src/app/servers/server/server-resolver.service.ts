import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server {
	id: number;
	name: string;
	status: string;
}

export class ServerResolver implements Resolve<Server> {
	constructor(private serversService: ServersService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
		return this.serversService.getServer(+route.params['id']);
	}
}