import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "./store.component";
import { NgModule } from "@angular/core";
import { CounterDirective } from "./counter.directive";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [StoreComponent, CounterDirective],
    exports: [StoreComponent]
})
export class StoreModule { }