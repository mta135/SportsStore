import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "./store.component";
import { NgModule } from "@angular/core";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [

        StoreComponent,
        CounterDirective,
        CartSummaryComponent,
        CartDetailComponent,
        CheckoutComponent

    ],

    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }