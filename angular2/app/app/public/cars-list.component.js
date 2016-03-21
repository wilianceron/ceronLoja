System.register(['angular2/core', 'angular2/router', './car.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, car_service_1;
    var CarsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            CarsListComponent = (function () {
                function CarsListComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                CarsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getCars().then(function (cars) { return _this.cars = cars; });
                };
                CarsListComponent.prototype.onSelect = function (car) {
                    this._router.navigate(['CarDetail', { id: car.id }]);
                };
                CarsListComponent = __decorate([
                    core_1.Component({
                        template: "\n      <h3>Car List Component</h3>\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Brand</th>\n            <th>Model</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"#car of cars\" (click)=\"onSelect(car)\">\n            <td>{{car.id}}</td>\n            <td>{{car.brand}}</td>\n            <td>{{car.model}}</td>\n          </tr>\n        </tbody>\n      </table>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, car_service_1.CarService])
                ], CarsListComponent);
                return CarsListComponent;
            })();
            exports_1("CarsListComponent", CarsListComponent);
        }
    }
});
//# sourceMappingURL=cars-list.component.js.map