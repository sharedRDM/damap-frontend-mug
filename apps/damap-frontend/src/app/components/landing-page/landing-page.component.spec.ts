import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { LandingPageComponent } from './landing-page.component';
import { TranslateTestingModule } from '@damap/core';
import { of } from 'rxjs';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent, TranslateTestingModule],
      providers: [
        {
          provide: ConfigService,
          useValue: { isBackendDown: () => of(false) },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 'mockValue' }),
            snapshot: {
              paramMap: {
                get: () => 'mockValue',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
