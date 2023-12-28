import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";

describe('Button component', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('Should have container class', () => {
        const isContainerPresent = component.container.nativeElement.classList.contains('container');

        expect(isContainerPresent).toEqual(true);
    })
})