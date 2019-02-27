/* tslint:disable:no-unused-variable */

import { ReversePipe } from "./reverse.pipe";
describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
