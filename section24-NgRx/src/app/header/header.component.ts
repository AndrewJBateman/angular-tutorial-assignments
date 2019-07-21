import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';
import { AuthActions, Logout } from './../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
	isAuthenticated = false;
	private userSub: Subscription;

	constructor(
		private dataStorageService: DataStorageService,
		private authService: AuthService,
		private store: Store<fromApp.AppState>
	) {}

	ngOnInit() {
		this.userSub = this.store
			.select('auth')
			.pipe(map(authState => authState.user))
			.subscribe(user => {
				this.isAuthenticated = !!user;
				console.log(!user);
				console.log(!!user);
			});
	}

	onSaveData() {
		this.dataStorageService.storeRecipes();
	}

	onFetchData() {
		// this.dataStorageService.fetchRecipes().subscribe();
		this.store.dispatch(new RecipeActions.FetchRecipes());
	}

	onLogout() {
		this.store.dispatch(new AuthActions.Logout());
	}

	ngOnDestroy() {
		this.userSub.unsubscribe();
	}
}
