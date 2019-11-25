import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabmenuPage } from './tabmenu.page';

describe('TabmenuPage', () => {
  let component: TabmenuPage;
  let fixture: ComponentFixture<TabmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
