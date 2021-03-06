import {NgModule} from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MATERIAL_SANITY_CHECKS} from '@angular/material/core';

@NgModule({
	imports: [
		MatTableModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
		MatInputModule,
		MatSnackBarModule
	],
	exports:  [
		MatTableModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
		MatInputModule,
		MatSnackBarModule
	],
	providers: [
		{
			provide: MATERIAL_SANITY_CHECKS,
			useValue: false
		}
	]

})
export class MaterialModule {

}