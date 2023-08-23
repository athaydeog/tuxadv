import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoNegritoComponent } from './texto-negrito.component';

describe('TextoNegritoComponent', () => {
  let component: TextoNegritoComponent;
  let fixture: ComponentFixture<TextoNegritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoNegritoComponent]
    });
    fixture = TestBed.createComponent(TextoNegritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
