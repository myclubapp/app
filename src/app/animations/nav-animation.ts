import { Animation, AnimationController } from "@ionic/angular";

export const enterAnimation = (baseEL: HTMLElement, opts?: any): Animation => {
  const DURATION = 1000; // Sichtbarer durch längere Dauer
  const animationCtrl = new AnimationController();

  console.log("Animation options:", opts);

  const enteringAnimation = animationCtrl.create()
    .addElement(opts.enteringEl)
    .duration(DURATION)
    .easing('ease-in')
    .fromTo('opacity', 0, 1)
    .fromTo('transform', 'translateX(100%)', 'translateX(0%)');

  if (opts.direction === 'forward') {
    return enteringAnimation;
  } else {
    const leavingAnimation = animationCtrl.create()
      .addElement(opts.leavingEl)
      .duration(DURATION)
      .easing('ease-out')
      .fromTo('opacity', 1, 0)
      .fromTo('transform', 'translateX(0%)', 'translateX(-100%)');

    return animationCtrl.create()
      .addAnimation(enteringAnimation)
      .addAnimation(leavingAnimation);
  }
};