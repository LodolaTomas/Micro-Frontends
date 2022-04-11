# Microfronts single-spa

## how to create a single spa
 - npm i -g create-single-spa
 - # run the command create-single-spa
      Directory for new project (.) # header
      Which framework do you want to use?  # angular
      Project name # mf-header
  <p>by default when creating an angular project the selector of the app.component.ts is "app-root" and in order not to co-start with the other projects we change the name, preferably the same name as the project.
  Also rename in main.single-spa.ts in the line 22 "app-root" by the name that is chosen for the app.component.ts
  </p>
  ## for more information watch the following video
  https://www.youtube.com/watch?v=XbNsZSYXBp0
  
## Tareas

- Al iniciar un nuevo mf en angular

```ts
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
```

adicionalmente en el app.module se agrega el EmptyRouteComponent

```ts
declarations: [AppComponent, EmptyRouteComponent];
```

- Zone (Se debe importar el script del cdn de zone para proyectos angular en el container)
- Para que las aplicaciones no se sobreescriban se debe modificar el selector como estandar
  pusimos mf-{mf-name}
