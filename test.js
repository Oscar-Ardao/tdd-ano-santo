import { anoSanto } from './index';
import { strictEqual } from "assert";

describe(('Comprobación de año santo'), () => {
  it('test 2020 mal', () => { strictEqual(anoSanto(2020), false) })
  it('test 2021', () => { strictEqual(anoSanto(2021), true) })
  it('test 2027', () => { strictEqual(anoSanto(2027), true) })
  it('test 2032', () => { strictEqual(anoSanto(2032), true) })
  it('test 2038', () => { strictEqual(anoSanto(2038), true) })
  it('test 2049', () => { strictEqual(anoSanto(2049), true) })
  it('test 2055', () => { strictEqual(anoSanto(2055), true) })
  it('test 2085 mal', () => { strictEqual(anoSanto(2085), false) })
  it('test 2083', () => { strictEqual(anoSanto(2083), true) })
  it('test 2106', () => { strictEqual(anoSanto(2106), true) })
  it('test 1993', () => { strictEqual(anoSanto(1993), true) })
  it('test 3035', () => { strictEqual(anoSanto(3035), true) })
})