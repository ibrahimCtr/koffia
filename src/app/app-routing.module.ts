import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "menu" },
	{
		path: "**",
		redirectTo: "menu",
		pathMatch: "full",
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
