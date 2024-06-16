import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "./store.component";
import { NgModule } from "@angular/core";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
    exports: [StoreComponent]
})
export class StoreModule { }