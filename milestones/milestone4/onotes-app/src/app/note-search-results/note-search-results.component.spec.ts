import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSearchResultsComponent } from './note-search-results.component';

describe('NoteSearchResultsComponent', () => {
  let component: NoteSearchResultsComponent;
  let fixture: ComponentFixture<NoteSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteSearchResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
