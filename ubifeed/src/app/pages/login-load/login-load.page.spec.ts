import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginLoadPage } from './login-load.page';

describe('LoginLoadPage', () => {
  let component: LoginLoadPage;
  let fixture: ComponentFixture<LoginLoadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLoadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginLoadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
