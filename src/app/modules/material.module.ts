import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MATERIAL_SANITY_CHECKS} from '@angular/material/core';

@NgModule({
	imports: [
		MatTableModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
	],
	exports:  [
		MatTableModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
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