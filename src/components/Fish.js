import { Sprite, Texture } from 'pixi.js';
import gsap from 'gsap';

/** Class representing a fish 
 * @extends Sprite
 */
export default class Fish extends Sprite {
  /**
   * Create a fish
   */
  constructor() {
    super(Texture.from('small'));

    this.interactive = true;
    this.buttonMode = true;
    this.name = 'fish';

    this.anchor.set(0.5);
    this.on('pointerup', this._onPointerUp.bind(this));
    this.on('pointerupoutside', this._onPointerUp.bind(this));
  }

  /**
   * Handles pointerup and pointerupoutside events
   * @private
   */
  _onPointerUp() {
    this.expand();
    setTimeout(() => {
      this.contract();
    }, 5000);
  }

  /**
   * @private
   */
  expand() {
    this.texture = Texture.from('big');
    this.scale.x = 1.5;
    this.scale.y = 1.5;
    // gsap.to(this.scale, { x: 1.5, y: 1.5, duration: 1, ease: 'elastic' });
  }

  /**
   * @private
   */
  contract() {
    this.texture = Texture.from('small');
    this.scale.x = 1;
    this.scale.y = 1;
    // gsap.to(this.scale, { x: 1, y: 1, duration: 1, ease: 'elastic' });
  }
}