import { deepConvertPixel } from './style-utils';

describe('Style Utils Unit test', () => {
  const originSource: Record<string, any> = {
    name: 'test',
    position: {
      left: 15,
      right: '0',
      top: '22.5px',
      bottom: null,
    },
    style: {
      maxWidth: undefined,
      width: 160,
      color: 'red',
      visibility: 'visiable',
      display: 'inline-flex',
      margin: '10px 20px',
      padding: 20,
    },
  };

  it(`deepConvertPixel should remove null & translate pixel`, () => {
    const ret: Record<string, any> = {
      name: 'test',
      position: {
        left: '15px',
        right: '0px',
        top: '22.5px',
      },
      style: {
        width: '160px',
        color: 'red',
        visibility: 'visiable',
        display: 'inline-flex',
        margin: '10px 20px',
        padding: '20px',
      },
    };

    const translated = deepConvertPixel(originSource, true);
    expect(translated).toEqual(ret);
  });

  it(`deepConvertPixel should only 'width,right' convert pixel`, () => {
    const ret: Record<string, any> = {
      name: 'test',
      position: {
        left: 15,
        right: '0px',
        top: '22.5px',
        bottom: null,
      },
      style: {
        maxWidth: undefined,
        width: '160px',
        color: 'red',
        visibility: 'visiable',
        display: 'inline-flex',
        margin: '10px 20px',
        padding: 20,
      },
    };

    const translated = deepConvertPixel(originSource, false, ['width', 'right']);

    globalThis.console.log(translated);

    expect(translated).toEqual(ret);
  });

  it(`deepConvertPixel should only remove null and undefined keys`, () => {
    const ret: Record<string, any> = {
      name: 'test',
      position: {
        left: 15,
        right: '0',
        top: '22.5px',
      },
      style: {
        width: 160,
        color: 'red',
        visibility: 'visiable',
        display: 'inline-flex',
        margin: '10px 20px',
        padding: 20,
      },
    };

    const translated = deepConvertPixel(originSource, true, []);

    globalThis.console.log(translated);

    expect(translated).toEqual(ret);
  });
});
