import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { routes } from './press.routes';

@NgModule({
  declarations: [HelloComponent],
  imports: [RouterModule.forChild(routes)],
})
export class PressModule {}
