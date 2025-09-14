import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExperince } from './my-experince';

describe('MyExperince', () => {
  let component: MyExperince;
  let fixture: ComponentFixture<MyExperince>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExperince]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyExperince);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
