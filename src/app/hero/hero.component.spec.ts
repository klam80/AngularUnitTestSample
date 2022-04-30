import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Hero } from "../hero";
import { HeroComponent } from "./hero.component";

describe('HeroesComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // it('should create', () => {
  //    expect(component).toBeTruthy();
  //  });

  it('should have the correct hero', () => {
    let hero: Hero
    hero = { id: 1, name: 'Test1', strength: 3 }
    fixture.componentInstance.hero = hero;
    console.log(fixture.componentInstance.hero.id)
    expect(fixture.componentInstance.hero).not.toEqual(null)
  });
});
