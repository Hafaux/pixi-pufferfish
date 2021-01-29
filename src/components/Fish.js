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
    this._expand();
    setTimeout(() => {
      this._contract();
    }, 5000);
  }

  /**
   * @private
   */
  _expand() {
    this.texture = Texture.from('big');

    gsap.to(this.scale, { x: 1.5, y: 1.5, duration: 1, ease: 'elastic' });
  }

  /**
   * @private
   */
  _contract() {
    this.texture = Texture.from('small');
    
    gsap.to(this.scale, { x: 1, y: 1, duration: 1, ease: 'elastic' });
  }
}