import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop.component';

describe('DragDropComponent', () => {
  let component: DragDropComponent;
  let fixture: ComponentFixture<DragDropComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropComponent],
      imports: [DragDropModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
