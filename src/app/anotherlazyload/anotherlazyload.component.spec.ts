import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherlazyloadComponent } from './anotherlazyload.component';

describe('AnotherlazyloadComponent', () => {
  let component: AnotherlazyloadComponent;
  let fixture: ComponentFixture<AnotherlazyloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherlazyloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherlazyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
