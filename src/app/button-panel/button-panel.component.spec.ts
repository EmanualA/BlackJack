import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonPanelComponent } from './button-panel.component';

describe('ButtonPanelComponent', () => {
  let component: ButtonPanelComponent;
  let fixture: ComponentFixture<ButtonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button "Start"', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = compiled[0].nativeElement;
    const app = fixture.debugElement.componentInstance;
    expect(nativeButton.textContent).toContain(app.startButtonValue);
  });

  it('should have a button "Hit"', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = compiled[1].nativeElement;
    const app = fixture.debugElement.componentInstance;
    expect(nativeButton.textContent).toContain(app.hitButtonValue);
  });

  it('should have a button "Stay"', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = compiled[2].nativeElement;
    const app = fixture.debugElement.componentInstance;
    expect(nativeButton.textContent).toContain(app.stayButtonValue);
  });

  it('should have a button "Reset"', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = compiled[3].nativeElement;
    const app = fixture.debugElement.componentInstance;
    expect(nativeButton.textContent).toContain(app.resetButtonValue);
  });

  it('should have a Start button enabled when "isStartedGame" is false', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const app = fixture.debugElement.componentInstance;
    app.startButtonValue = false;
    const nativeButton: HTMLButtonElement = compiled[0].nativeElement;
    expect(nativeButton.disabled).not.toBeTrue;
  });

  it('should have a Start button disabled when "isStartedGame" is true', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const app = fixture.debugElement.componentInstance;
    app.startButtonValue = true;
    const nativeButton: HTMLButtonElement = compiled[0].nativeElement;
    expect(nativeButton.disabled).toBeTrue;
  });

  it('should have a Hit button disabled when "isStartedGame" is false', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const app = fixture.debugElement.componentInstance;
    app.startButtonValue = false;
    const nativeButton: HTMLButtonElement = compiled[1].nativeElement;
    expect(nativeButton.disabled).toBeTrue;
  });

  it('should have a Hit button enabled when "isStartedGame" is true', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const app = fixture.debugElement.componentInstance;
    app.startButtonValue = true;
    const nativeButton: HTMLButtonElement = compiled[1].nativeElement;
    expect(nativeButton.disabled).not.toBeTrue;
  });

  it('should have a Stay button disabled when "isStartedGame" is false', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const app = fixture.debugElement.componentInstance;
    app.startButtonValue = false;
    const nativeButton: HTMLButtonElement = compiled[2].nativeElement;
    expect(nativeButton.disabled).toBeTrue;
  });

  it('should have a Stay button enabled when "isStartedGame" is true', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const app = fixture.debugElement.componentInstance;
    app.startButtonValue = true;
    const nativeButton: HTMLButtonElement = compiled[2].nativeElement;
    expect(nativeButton.disabled).not.toBeTrue;
  });

  it('should have a Reset button disabled when "isStartedGame" is false', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const app = fixture.debugElement.componentInstance;
    app.startButtonValue = false;
    const nativeButton: HTMLButtonElement = compiled[3].nativeElement;
    expect(nativeButton.disabled).toBeTrue;
  });

  it('should have a Reset button enabled when "isStartedGame" is true', () => {
    const compiled = fixture.debugElement.queryAll(By.css('button'));
    const app = fixture.debugElement.componentInstance;
    app.startButtonValue = true;
    const nativeButton: HTMLButtonElement = compiled[3].nativeElement;
    expect(nativeButton.disabled).not.toBeTrue;
  });

  it('should call "start" method on clicking Start button', () => {
    const app = fixture.debugElement.componentInstance;
    const startClickMock = spyOn(app, 'start');
    const compiled = fixture.debugElement.queryAll(By.css('button'));

    compiled[0].triggerEventHandler('click', null);
    expect(startClickMock).toHaveBeenCalled();
  });

  it('should call "hit" method on clicking Hit button', () => {
    const app = fixture.debugElement.componentInstance;
    const hitClickMock = spyOn(app, 'hit');
    const compiled = fixture.debugElement.queryAll(By.css('button'));

    compiled[1].triggerEventHandler('click', null);
    expect(hitClickMock).toHaveBeenCalled();
  });

  it('should call "stay" method on clicking Stay button', () => {
    const app = fixture.debugElement.componentInstance;
    const stayClickMock = spyOn(app, 'stay');
    const compiled = fixture.debugElement.queryAll(By.css('button'));

    compiled[2].triggerEventHandler('click', null);
    expect(stayClickMock).toHaveBeenCalled();
  });

  it('should call "reset" method on clicking Reset button', () => {
    const app = fixture.debugElement.componentInstance;
    const resetClickMock = spyOn(app, 'reset');
    const compiled = fixture.debugElement.queryAll(By.css('button'));

    compiled[3].triggerEventHandler('click', null);
    expect(resetClickMock).toHaveBeenCalled();
  });
});
