var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Project1 = /** @class */ (function () {
    function Project1() {
        this.project_name = null;
        this.budget = 2000000;
    }
    // 실제 메서드
    Project1.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project1;
}());
var WebProject = /** @class */ (function (_super) {
    __extends(WebProject, _super);
    function WebProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebProject.prototype.changeProjectName = function (name) {
        this.project_name = name;
    };
    return WebProject;
}(Project1));
var new_project1 = new WebProject();
console.log(new_project1.project_name);
new_project1.changeProjectName("nara");
console.log(new_project1.project_name);
