import fs from 'fs'
import {filterSBItemsWithFiles} from '../src/actions'
import {formatBytes} from '../src/numberFormatting'

describe('actions', () => {
  it('remove items with no files', () => {
    const items = filterSBItemsWithFiles(JSON.parse(fs.readFileSync('tests/data/missingfiles.json', 'utf-8')).items)
    expect(9).toEqual(items.length)
  })
})

describe('prefixes formatting using IEC 80000-13 with exact values', () => {
  const prefixes = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
  prefixes.forEach(function(p,i) {
    it(`exactly 1 ${p}iB`, () => {
      const formattedCount = formatBytes(Math.pow(2,10 * (i + 1)))
      expect(formattedCount).toEqual(`1.0 ${p}iB`)
    })
  })
})

describe('prefixes formatting using IEC 80000-13 with exact negative values', () => {
  const prefixes = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
  prefixes.forEach(function(p,i) {
    it(`exactly -1 ${p}iB`, () => {
      const formattedCount = formatBytes(0 - Math.pow(2,10 * (i + 1)))
      expect(formattedCount).toEqual(`-1.0 ${p}iB`)
    })
  })
})

describe('prefixes formatting using IEC 80000-13 with just a bit over values', () => {
  const prefixes = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']
  prefixes.forEach(function(p,i) {
    if (i > 0) {
      it(`exactly ${p}iB`, () => {
        const formattedCount = formatBytes(Math.pow(2,10 * (i + 1)) - Math.pow(2,10 * (i)))
        expect(formattedCount).toEqual(`1023.0 ${prefixes[i-1]}iB`)
      })
    }
  })
})

describe('adhoc tests using IEC 80000-13 abbreviations', () => {
  const k = 1024;
  it('much less than 1KiB', () => {
    const formattedCount = formatBytes(200)
    expect(formattedCount).toEqual('200 bytes')
  })
  it('exactly 1KiB', () => {
    const formattedCount = formatBytes(k - 1)
    expect(formattedCount).toEqual('1023 bytes')
  })
  it('just one more than 1KiB', () => {
    const formattedCount = formatBytes(k + 1)
    expect(formattedCount).toEqual('1.0 KiB')
  })
  it('51 more than 1KiB', () => {
    const formattedCount = formatBytes(k + 51)
    expect(formattedCount).toEqual('1.0 KiB')
  })
  it('52 more than 1KiB', () => {
    const formattedCount = formatBytes(k + 52)
    expect(formattedCount).toEqual('1.1 KiB')
  })
  it('52 more than 1KiB', () => {
    const formattedCount = formatBytes(k + 52)
    expect(formattedCount).toEqual('1.1 KiB')
  })
  it('negative count well under 1 KiB (' + (-3*k) + ')', () => {
    const formattedCount = formatBytes(-3 * k)
    expect(formattedCount).toEqual('-3.0 KiB')
  })
  it('negative count just under -1 KiB (-1023)', () => {
    const formattedCount = formatBytes(-1023)
    expect(formattedCount).toEqual('-1023 bytes')
  })
  // take of 2^50 to get 'just under 1024 yotta'
  it('count just a little smaller than 1024 yotta (2^50 smaller)', () => {
    const value = Math.pow(2,90)
    const formattedCount = formatBytes(Math.pow(2,90)-Math.pow(2,50))
    expect(formattedCount).toEqual('1024.0 YiB')
  })
  it('count larger than 1024 yotta', () => {
    const value = Math.pow(2,90)
    const formattedCount = formatBytes(Math.pow(2,90))
    expect(formattedCount).toEqual(Math.pow(2,90).toExponential(2) + ' bytes')
  })
})
