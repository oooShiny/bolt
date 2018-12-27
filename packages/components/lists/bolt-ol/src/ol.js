import { props, define, mapWithDepth } from '@bolt/core/utils';
import classNames from 'classnames/bind';
import { withLitHtml, html } from '@bolt/core/renderers/renderer-lit-html';

import styles from './ol.scss';

let cx = classNames.bind(styles);

// list-specific helper function to set nested children's `level` prop automatically
function addNestedLevelProps(childNode, level) {
  let currentLevel = level;

  if (childNode.tagName) {
    childNode.level = currentLevel;
  }

  return currentLevel;
}

@define
class BoltOrderedList extends withLitHtml() {
  static is = 'bolt-ol';

  static props = {
    level: {
      ...props.number,
      ...{ default: 0 },
    },
  };

  render() {
    let level = this.level;
    let nested = false;

    if (this.parentNode.tagName) {
      console.log(this.parentNode.level);
      if (
        this.parentNode.tagName === 'BOLT-LI' &&
        this.parentNode.parentNode.tagName === 'BOLT-OL'
      ) {
        level = this.parentNode.level - 1;
      } else {
        level = this.parentNode.level;
      }

      if (this.parentNode.tagName === 'BOLT-LI') {
        nested = true;
      }
    }

    const classes = cx('c-bolt-ol', {
      [`c-bolt-ol--nested`]: nested,
    });

    this.slots.default.map(mapWithDepth(level, addNestedLevelProps));

    if (this.slots.default) {
      const updatedDefaultSlot = [];

      this.slots.default.forEach(item => {
        if (item.tagName) {
          updatedDefaultSlot.push(item);
        }
      });

      if (
        updatedDefaultSlot[updatedDefaultSlot.length - 1].attributes.length ===
        0
      ) {
        updatedDefaultSlot[updatedDefaultSlot.length - 1].setAttribute(
          'last',
          '',
        );
      }
    }

    return html`
      ${this.addStyles([styles])}
      <ol class="${classes}">
        ${this.slot('default')}
      </ol>
    `;
  }
}

export { BoltOrderedList };
